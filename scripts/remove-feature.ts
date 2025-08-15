import { JsxAttribute, Node, Project, SyntaxKind } from "ts-morph";
import { Print } from "../src/shared/lib/console/Print";

const featureNameToRemove = process.argv[2]; //example: "isArticleRatingEnabled"
const featureStateToRemove = process.argv[3]; // example on/off

const toggleComponmentName = "ToggleFeatures";
const toggleFunctionName = "toggleFeatures";

if (!featureNameToRemove) {
  Print("Укажите корректное название feature flag (arg №2)");
  process.exit(0);
}
if (!featureStateToRemove) {
  Print("Укажите корректное название feature state (arg №3) - on/off");
  process.exit(0);
}

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*ts");
project.addSourceFilesAtPaths("src/**/*tsx");

const files = project.getSourceFiles();

export function isToggleFunction(node: Node) {
  let isToggleFeatures = false;

  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === toggleFunctionName
    ) {
      isToggleFeatures = true;
    }
  });

  return isToggleFeatures;
}

export function isToggleComponent(node: Node) {
  const indentifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
  return indentifier?.getText() === toggleComponmentName;
}

const replaceToogleFunctions = (node: Node) => {
  const objectOptions = node.getFirstDescendantByKind(
    SyntaxKind.ObjectLiteralExpression
  );

  if (!objectOptions) return;

  const onFuncProperty = objectOptions.getProperty("on");
  const offFuncProperty = objectOptions.getProperty("off");
  const featureNameProperty = objectOptions.getProperty("name");

  const onFunc = onFuncProperty?.getFirstDescendantByKind(
    SyntaxKind.ArrowFunction
  );
  const offFunc = offFuncProperty?.getFirstDescendantByKind(
    SyntaxKind.ArrowFunction
  );
  const featureName = featureNameProperty
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getLiteralText();

  if (featureName?.toLowerCase() !== featureNameToRemove.toLowerCase()) return;

  if (featureStateToRemove === "on") {
    node.replaceWithText(onFunc?.getBody().getText() ?? "");
  }

  if (featureStateToRemove === "off") {
    node.replaceWithText(offFunc?.getBody().getText() ?? "");
  }
};

const getAttributeNodeByName = (
  jsxAttributes: JsxAttribute[],
  name: string
) => {
  return jsxAttributes.find((node) => {
    return node.getNameNode().getText() === name;
  });
};

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  if (value?.startsWith("(")) {
    return value.slice(1, -1);
  }

  return value;
};

const replaceComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const onAttribute = getAttributeNodeByName(attributes, "on");
  const offAttribute = getAttributeNodeByName(attributes, "off");
  const featureNameAttribute = getAttributeNodeByName(attributes, "name");
  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getLiteralText();

  if (featureName !== featureNameToRemove) return;

  const offValue = getReplacedComponent(offAttribute);
  const onValue = getReplacedComponent(onAttribute);

  if (featureStateToRemove === "on" && onValue) {
    node.replaceWithText(onValue);
  }

  if (featureStateToRemove === "off" && offValue) {
    node.replaceWithText(offValue);
  }
};

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node: Node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      replaceToogleFunctions(node);
    }

    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToggleComponent(node)
    ) {
      replaceComponent(node);
    }
  });
});

project.save();
