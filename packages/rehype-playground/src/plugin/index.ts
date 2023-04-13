import {
  getExportsVariables,
  getImportsVariables,
} from "./utils/extractVariables";

import { flatten } from "./utils/get";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toMarkdown } from "mdast-util-to-markdown";
import { mdxjs } from "micromark-extension-mdxjs";
import { mdxFromMarkdown, mdxToMarkdown } from "mdast-util-mdx";

const addComponentsProps = (scopes: string[]) => (node: any, idx: number) => {
  const scope = `{props, ${scopes.join(",")}}`;

  const out = toMarkdown(node, { extensions: [mdxToMarkdown()] });

  const tree = fromMarkdown(
    out.replace("<Playground", `<Playground scope={${scope}} code={${out}}`),
    {
      extensions: [mdxjs()],
      mdastExtensions: [mdxFromMarkdown()],
    }
  );

  // node = tree.children[0];

  // console.log(tree.children[0], "<<<<<<<<<<<<tree");
  // console.log(node, "<<<<<<<<<<<<node");

  node.attributes = node.attributes.concat([
    {
      type: "mdxJsxAttribute",
      name: "code",
      value: out
        .trim()
        .replace(`<Playground>`, "")
        .replace(`</Playground>`, ""),
    },
    {
      type: "mdxJsxAttribute",
      name: "scope",
      value: scope,
    },
  ]);

  console.log(typeof scope);
};

export interface PluginOpts {
  root: string;
}

export const playground = () => (tree: any, file: { contents: string }) => {
  const playgroundComponents: Node[] = tree.children
    .filter((node: any) => node.type === "mdxJsxFlowElement")
    .filter((node: any) => {
      return node.name === "Playground";
    });

  const importNodes = tree.children.filter((n: any) =>
    n.value?.includes("import")
  );

  const exportNodes = tree.children.filter((n: any) =>
    n.value?.includes("export")
  );

  const importedScopes = flatten<string>(importNodes.map(getImportsVariables));

  const exportedScopes = flatten<string>(
    exportNodes.flatMap(getExportsVariables)
  );

  const scopes: string[] = [...importedScopes, ...exportedScopes].filter(
    Boolean
  );
  playgroundComponents.forEach(addComponentsProps(scopes));

  return tree;
};
