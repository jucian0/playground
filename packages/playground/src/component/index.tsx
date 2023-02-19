import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import light from "prism-react-renderer/themes/nightOwlLight";
import dark from "prism-react-renderer/themes/dracula";
import { Resizable } from "re-resizable";
import React, { useState } from "react";
import { getResizableProps } from "./resizableProps";
import "../styles.css";
import { RxCopy, RxDesktop } from "react-icons/rx";
import { BsCode, BsPhone, BsRulers, BsTablet } from "react-icons/bs";

import { Button } from "./button";

export const Playground = (props: any) => {
  const [editor, setEditor] = React.useState(true);
  const [width, setWidth] = React.useState("100%");
  const resizableProps = getResizableProps(width, setWidth);
  const screens = ["414px", "768px", "100%"];
  const [screen, setScreen] = useState(screens[2]);
  const [rule, setRule] = useState(true);

  return (
    <Resizable
      {...resizableProps}
      className={` bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-lg shadow border ${props.className}`}
    >
      <div className=" bg-gray-200 rounded-t-lg flex justify-between p-2">
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
          <Button>
            <RxCopy size={18} />
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
              rule && "inset-0 bg-grid-slate-100"
            }`}
            style={{ width: screen }}
          />
        </div>
        {editor && (
          <LiveEditor className="border-gray-200 border-t rounded-b-lg font-mono text-sm p-2" />
        )}
        <LiveError className="text-white bg-red-500 p-2 rounded-b-lg" />
      </LiveProvider>
    </Resizable>
  );
};
