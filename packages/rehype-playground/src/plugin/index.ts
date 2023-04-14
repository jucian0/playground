import {
  getExportsVariables,
  getImportsVariables,
} from "./utils/extractVariables";

import { flatten } from "./utils/get";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toMarkdown } from "mdast-util-to-markdown";
import { mdxjs } from "micromark-extension-mdxjs";
import { mdxFromMarkdown, mdxToMarkdown } from "mdast-util-mdx";
import { stringifyReactCode } from "./utils/sanitaze";

const addComponentsProps = (scopes: string[]) => (node: any, idx: number) => {
  const scope = `{props, ${scopes.join(",")}}`;

  const out = toMarkdown(node, { extensions: [mdxToMarkdown()] });

  const tree: any = fromMarkdown(
    out.replace("<Playground", `<Playground scope={${scope}}`),
    {
      extensions: [mdxjs()],
      mdastExtensions: [mdxFromMarkdown()],
    }
  );

  node.attributes = [
    ...tree.children[0].attributes,
    ...node.attributes,
    {
      type: "mdxJsxAttribute",
      name: "code",
      value: `${stringifyReactCode(out)}`,
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
  playgroundComponents.forEach(addComponentsProps(scopes));

  return tree;
};
