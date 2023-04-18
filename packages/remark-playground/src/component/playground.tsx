import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import dark from "prism-react-renderer/themes/dracula";
import { Resizable } from "re-resizable";
import React, { useState } from "react";
import { getResizableProps } from "./resizableProps";
import "../styles.css";
import { RxCheck, RxCopy, RxDesktop } from "react-icons/rx";
import {
  BsArrowsFullscreen,
  BsCode,
  BsPhone,
  BsRulers,
  BsTablet,
} from "react-icons/bs";
import { Button } from "./button";
import useClipboard from "react-use-clipboard";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { formater } from "./formater";
import { Language } from "prism-react-renderer";
import { usePlaygroundContext } from "./context";

type Props = {
  scope: Record<string, React.ReactNode>;
  code: string;
  language?: Language;
  className?: string;
  style?: Record<string, any>;
};

export const Playground = (props: Props) => {
  const [isCopied, setCopied] = useClipboard(props.code, {
    successDuration: 1000,
  });
  const [editor, setEditor] = React.useState(true);
  const [width, setWidth] = React.useState("100%");
  const resizableProps = getResizableProps(width, setWidth);
  const screens = ["414px", "768px", "100%"];
  const [screen, setScreen] = useState(screens[2]);
  const [rule, setRule] = useState(true);
  const handle = useFullScreenHandle();
  const { theme, components } = usePlaygroundContext();

  return (
    <Resizable
      {...resizableProps}
      className={` bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 ${props.className}`}
      handleComponent={{
        right: (
          <div className="w-4 h-full rounded-r-lg bg-gray-200  dark:bg-gray-700 flex justify-center items-center -ml-2">
            <div className="w-2 h-1/3 border-r-2 border-l-2 dark:border-gray-500 border-gray-500" />
          </div>
        ),
      }}
    >
      <div
        style={props.style}
        className=" bg-gray-200 dark:bg-gray-800 dark:border-gray-800 border-gray-200 rounded-t-lg flex justify-between p-2 pr-6"
      >
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
          <Button onClick={handle.enter} isActive={screens[2] === screen}>
            <BsArrowsFullscreen size={18} />
          </Button>
        </div>
        <div>
          <Button onClick={() => setRule(!rule)} isActive={!!rule}>
            <BsRulers size={18} />
          </Button>
          <Button onClick={() => setEditor(!editor)} isActive={!!editor}>
            <BsCode size={18} />
          </Button>
        </div>
      </div>

      <LiveProvider
        code={formater(props.code)}
        scope={{ ...props.scope, ...components }}
        language={props.language}
        theme={theme ?? dark}
        frameBorder={2}
      >
        <div
          className={`block overflow-auto h-auto ${
            rule &&
            "inset-0 bg-grid-slate-700/10 mask-image:rgba(255,255,255,0.9) dark:bg-grid-slate-700/20 dark:mask-image:rgba(255,255,255,0.9)"
          }`}
        >
          <FullScreen handle={handle}>
            <LivePreview
              className={`p-2 pr-6 dark:border-gray-700 `}
              style={{
                width: screen,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </FullScreen>
        </div>
        {editor && (
          <div className="relative">
            <Button onClick={setCopied} className="absolute top-0 right-2 z-10">
              {isCopied ? <RxCheck size={18} /> : <RxCopy size={18} />}
            </Button>
            <LiveEditor className=" dark:border-gray-700 border-t rounded-b-lg font-mono text-sm" />
          </div>
        )}
        <LiveError className="text-white bg-red-500 p-2 rounded-b-lg" />
      </LiveProvider>
    </Resizable>
  );
};
