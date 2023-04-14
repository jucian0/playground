import prettier from "prettier";
import parserBabel from "prettier/parser-babel";

export function formater(code: string) {
  return prettier.format(code, {
    parser: "babel",
    semi: true,
    plugins: [parserBabel],
  });
}
