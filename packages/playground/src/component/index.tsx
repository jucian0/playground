import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import light from "prism-react-renderer/themes/nightOwlLight";
import dark from "prism-react-renderer/themes/dracula";
import { Resizable } from "re-resizable";
import React from "react";
import { getResizableProps } from "./resizableProps";
import "../styles.css";

export const Playground = (props: any) => {
  const [editor, setEditor] = React.useState(false);
  const [width, setWidth] = React.useState("100%");

  const resizableProps = getResizableProps(width, setWidth);

  return (
    <Resizable
      {...resizableProps}
      className={` bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-lg shadow border ${props.className}`}
    >
      <div className=" bg-gray-200 rounded-t-lg flex justify-end p-2">
        <button
          type="button"
          onClick={() => setEditor(!editor)}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Code
        </button>
        <button
          type="button"
          onClick={() => setEditor(!editor)}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Copy
        </button>
      </div>

      <LiveProvider
        code={props.code}
        scope={props.scope}
        theme={light}
        frameBorder={2}
      >
        <LivePreview className="p-2 overflow-auto h-auto" />
        {editor && (
          <LiveEditor className="border-gray-200 border-t font-mono rounded-b-lg" />
        )}
        <LiveError className="text-white bg-red-500 p-2 rounded-b-lg" />
      </LiveProvider>
    </Resizable>
  );
};
