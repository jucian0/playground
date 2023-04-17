export function getImportsVariables(node: any): string[] {
  const result: string[] = [];
  const { type, value } = node;

  if (type === "mdxjsEsm" && value.includes("import")) {
    const matches = value.match(/import\s+{(.+)}\s+from\s+['"](.+)['"]/);

    if (matches) {
      const variables = matches[1].split(",").map((v: string) => v.trim());

      result.push(...variables);
    }
  }

  return result;
}

export function getExportsVariables(node: any): string[] {
  const result: string[] = [];
  const { type, value } = node;

  if (type === "mdxjsEsm" && value.includes("export")) {
    const matches = value.match(
      /export\s+(?:const|let|var)?\s*([A-Z][a-zA-Z0-9]*(?:[A-Z][a-zA-Z0-9]*)*)/
    );

    if (matches) {
      const variableName = matches[1];

      if (/^[A-Z][a-zA-Z0-9]*(?:[A-Z][a-zA-Z0-9]*)*$/.test(variableName)) {
        result.push(variableName);
      }
    }
  }

  return result;
}
