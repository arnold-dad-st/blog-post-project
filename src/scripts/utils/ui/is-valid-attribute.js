export function isValidAttribute(key) {
  const testElement = document.createElement("div");
  return key in testElement;
}