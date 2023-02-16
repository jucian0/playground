import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import light from "prism-react-renderer/themes/nightOwlLight";
import dark from "prism-react-renderer/themes/dracula";
import { Resizable } from "re-resizable";
import React from "react";
import { getResizableProps } from "./resizableProps";

export const Playground = (props: any) => {
  const [width, setWidth] = React.useState("100%");
  const [height, setHeight] = React.useState("200px");

  const resizableProps = getResizableProps(width, setWidth, height, setHeight);

  return (
    <Resizable {...resizableProps}>
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
            background: "green",
            resize: "both",
            overflow: "auto",
          }}
        />

        <LiveEditor
          style={{ borderEndEndRadius: 6, borderEndStartRadius: 10 }}
        />
        <LiveError />
      </LiveProvider>
    </Resizable>
  );
};
