import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import light from "prism-react-renderer/themes/nightOwlLight";
import dark from "prism-react-renderer/themes/dracula";
import { Resizable } from "re-resizable";
import React from "react";
import { getResizableProps } from "./resizableProps";
import "../styles.css";

export const Playground = (props: any) => {
  const [width, setWidth] = React.useState("100%");
  const [height, setHeight] = React.useState("200px");

  const resizableProps = getResizableProps(width, setWidth, height, setHeight);

  return (
    <Resizable {...resizableProps} className="border-l-4 border-indigo-500">
      <LiveProvider
        code={props.code}
        scope={props.scope}
        theme={light}
        frameBorder={2}
      >
        <LivePreview
          style={{
            height: "100%",
            width: "100%",
            // background: "green",
            resize: "both",
            overflow: "auto",
          }}
        />
        <div className="bg-black w-8 h-8"></div>

        <LiveEditor
          style={{ borderEndEndRadius: 6, borderEndStartRadius: 10 }}
        />
        <LiveError />
      </LiveProvider>
    </Resizable>
  );
};
