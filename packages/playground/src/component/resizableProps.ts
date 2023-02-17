export const getResizableProps = (
  width: string,
  setWidth: (width: string) => void
) => ({
  minWidth: 260,
  minHeight: 100,
  maxWidth: "100%",
  size: {
    width: width,
    height: "auto",
    minHeight: 150,
  },

  enable: {
    top: false,
    right: true,
    bottom: false,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  },
  onResizeStop: (_: any, __: any, ref: any) => {
    setWidth(ref.style.width.replace("px", ""));
  },
});
