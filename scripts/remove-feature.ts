import { Node, Project, SyntaxKind } from "ts-morph";
import { Print } from "../src/shared/lib/console/Print";

const featureNameToRemove = process.argv[2]; //example: "isArticleRatingEnabled"
const featureStateToRemove = process.argv[3]; // example on/off

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
      child.getText() === "toggleFeatures"
    ) {
      isToggleFeatures = true;
    }
  });

  return isToggleFeatures;
}

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node: Node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
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

      if (featureName?.toLowerCase() !== featureNameToRemove.toLowerCase())
        return;

      if (featureStateToRemove === "on") {
        node.replaceWithText(onFunc?.getBody().getText() ?? "");
      }

      if (featureStateToRemove === "off") {
        node.replaceWithText(offFunc?.getBody().getText() ?? "");
      }
    }
  });
});

project.save();
