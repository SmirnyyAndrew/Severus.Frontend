export function Print<T>(value: T) {
  if (value !== null) {
    if (typeof value === "object") {
      printWithTemplate(JSON.stringify(value));
    } else {
      printWithTemplate(value);
    }
  } else {
    printWithTemplate("NULL");
  }
}

const printWithTemplate = (value: any) =>
  console.log(`------------------> ${value} <------------------`);
