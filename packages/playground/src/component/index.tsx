import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import light from "prism-react-renderer/themes/nightOwlLight";
import dark from "prism-react-renderer/themes/dracula";
import { Resizable } from "re-resizable";
import React from "react";
import { getResizableProps } from "./resizableProps";
import "../styles.css";
import {
  RxViewGrid,
  RxCode,
  RxCopy,
  RxMobile,
  RxDesktop,
  RxTable,
} from "react-icons/rx";

export const Playground = (props: any) => {
  const [editor, setEditor] = React.useState(true);
  const [width, setWidth] = React.useState("100%");

  const resizableProps = getResizableProps(width, setWidth);

  return (
    <Resizable
      {...resizableProps}
      className={` bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-lg shadow border ${props.className}`}
    >
      <div className=" bg-gray-200 rounded-t-lg flex justify-between p-2">
        <div></div>
        <div>
          <button
            type="button"
            onClick={() => setEditor(!editor)}
            className="inline-block px-6 py-2.5 mr-2 bg-transparent text-black-600 font-medium text-xs leading-tight uppercase rounded hover:text-back-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          >
            <RxMobile size={18} />
          </button>
          <button
            type="button"
            onClick={() => setEditor(!editor)}
            className="inline-block px-6 py-2.5 mr-2 bg-transparent text-black-600 font-medium text-xs leading-tight uppercase rounded hover:text-back-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          >
            <RxTable size={18} />
          </button>
          <button
            type="button"
            onClick={() => setEditor(!editor)}
            className="inline-block px-6 py-2.5 bg-transparent text-back-600 font-medium text-xs leading-tight uppercase rounded hover:text-back-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          >
            <RxDesktop size={18} />
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => setEditor(!editor)}
            className="inline-block px-6 py-2.5 mr-2 bg-transparent text-black-600 font-medium text-xs leading-tight uppercase rounded hover:text-back-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          >
            <RxViewGrid size={18} />
          </button>
          <button
            type="button"
            onClick={() => setEditor(!editor)}
            className="inline-block px-6 py-2.5 mr-2 bg-transparent text-black-600 font-medium text-xs leading-tight uppercase rounded hover:text-back-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          >
            <RxCode size={18} />
          </button>
          <button
            type="button"
            onClick={() => setEditor(!editor)}
            className="inline-block px-6 py-2.5 bg-transparent text-back-600 font-medium text-xs leading-tight uppercase rounded hover:text-back-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          >
            <RxCopy size={18} />
          </button>
        </div>
      </div>

      <LiveProvider
        code={props.code}
        scope={props.scope}
        theme={dark}
        frameBorder={2}
      >
        <div className="inset-0 bg-grid-slate-100 ">
          <LivePreview className="p-2 overflow-auto h-auto rounded-b-lg" />
        </div>
        {editor && (
          <LiveEditor className="border-gray-200 border-t rounded-b-lg font-mono text-sm p-2" />
        )}
        <LiveError className="text-white bg-red-500 p-2 rounded-b-lg" />
      </LiveProvider>
    </Resizable>
  );
};
