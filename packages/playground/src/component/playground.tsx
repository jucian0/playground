import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import light from "prism-react-renderer/themes/nightOwlLight";
import dark from "prism-react-renderer/themes/dracula";
import { Resizable } from "re-resizable";
import React, { useState } from "react";
import { getResizableProps } from "./resizableProps";
import "../styles.css";
import { RxCheck, RxCopy, RxDesktop } from "react-icons/rx";
import { BsCode, BsPhone, BsRulers, BsTablet } from "react-icons/bs";
import { Button } from "./button";
import useClipboard from "react-use-clipboard";

export const Playground = (props: any) => {
  const [isCopied, setCopied] = useClipboard(props.code, {
    successDuration: 1000,
  });
  const [editor, setEditor] = React.useState(true);
  const [width, setWidth] = React.useState("100%");
  const resizableProps = getResizableProps(width, setWidth);
  const screens = ["414px", "768px", "100%"];
  const [screen, setScreen] = useState(screens[2]);
  const [rule, setRule] = useState(true);

  return (
    <Resizable
      {...resizableProps}
      className={` bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${props.className}`}
    >
      <div className=" bg-gray-200 dark:bg-gray-800 dark:border-gray-800 border-gray-200 rounded-t-lg flex justify-between p-2">
        <div className="lg:w-52 sm:w-0"></div>
        <div>
          <Button
            onClick={() => setScreen(screens[0])}
            isActive={screens[0] === screen}
          >
            <BsPhone size={18} />
          </Button>
          <Button
            onClick={() => setScreen(screens[1])}
            isActive={screens[1] === screen}
          >
            <BsTablet size={18} />
          </Button>
          <Button
            onClick={() => setScreen(screens[2])}
            isActive={screens[2] === screen}
          >
            <RxDesktop size={18} />
          </Button>
        </div>
        <div>
          <Button onClick={() => setRule(!rule)} isActive={!!rule}>
            <BsRulers size={18} />
          </Button>
          <Button onClick={() => setEditor(!editor)} isActive={!!editor}>
            <BsCode size={18} />
          </Button>
          <Button onClick={setCopied}>
            {isCopied ? <RxCheck size={18} /> : <RxCopy size={18} />}
          </Button>
        </div>
      </div>

      <LiveProvider
        code={props.code}
        scope={props.scope}
        theme={dark}
        frameBorder={2}
      >
        <div className="flex justify-center">
          <LivePreview
            className={`p-2 overflow-auto h-auto rounded-b-lg ${
              rule &&
              "inset-0 bg-grid-slate-700/25 mask-image:rgba(255,255,255,0.9) dark:bg-grid-slate-700/25 dark:mask-image:rgba(255,255,255,0.9)"
            }`}
            style={{ width: screen }}
          />
        </div>
        {editor && (
          <LiveEditor className=" dark:border-gray-700 border-t rounded-b-lg font-mono text-sm" />
        )}
        <LiveError className="text-white bg-red-500 p-2 rounded-b-lg" />
      </LiveProvider>
    </Resizable>
  );
};
