import {
  getExportsVariables,
  getImportsVariables,
} from "./utils/extractVariables";
import { mdxJsxFromMarkdown, mdxJsxToMarkdown } from "mdast-util-mdx-jsx";
import { toMarkdown } from "mdast-util-to-markdown";
import { fromMarkdown } from "mdast-util-from-markdown";
import { mdxJsx } from "micromark-extension-mdx-jsx";

import * as acorn from "acorn";
import { flatten } from "./utils/get";

const addComponentsProps = (scopes: string[]) => (node: any, idx: number) => {
  const scope = `{props, ${scopes.join(",")}}`;

  const code = toMarkdown(node.children[0], {
    extensions: [mdxJsxToMarkdown()],
  });

  const out = toMarkdown(node, {
    extensions: [mdxJsxToMarkdown()],
  });

  const tree: any = fromMarkdown(
    out.replace("<Playground", `<Playground scope={${scope}}`),
    {
      extensions: [mdxJsx({ acorn: acorn as any, addResult: true })],
      mdastExtensions: [mdxJsxFromMarkdown()],
    }
  );

  node.attributes = [
    ...tree.children[0].attributes,
    ...node.attributes,
    {
      type: "mdxJsxAttribute",
      name: "code",
      value: code.trim(),
    },
  ];
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
  // console.log(exportNodes, "<<<<<<<");
  playgroundComponents.forEach(addComponentsProps(scopes));

  return tree;
};
