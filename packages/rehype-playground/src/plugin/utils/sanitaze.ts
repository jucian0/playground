export function stringifyReactCode(code: string) {
  const trimmedCode = code.trim();
  const startIndex = trimmedCode.startsWith("<Playground>")
    ? "<Playground>".length
    : 0;
  const endIndex = trimmedCode.endsWith("</Playground>")
    ? trimmedCode.length - "</Playground>".length
    : trimmedCode.length;
  const formattedCode = trimmedCode
    .slice(startIndex, endIndex)
    .replace(/^\s*\{/gm, "")
    .replace(/^\s*}/gm, "")
    .replace(/\/\s+/g, "/")
    .replace(/\s+</g, "<");

  return formattedCode;
}
