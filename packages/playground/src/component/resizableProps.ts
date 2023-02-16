export const getResizableProps = (
  width: string,
  setWidth: (width: string) => void,
  height: any,
  setHeight: any
) => ({
  minWidth: 260,
  minHeight: 100,
  maxWidth: "100%",
  size: {
    width: width,
    height: height,
  },
  style: {
    marginTop: 10,
    //    marginRight: "auto",
    height: "auto",
    border: "1px solid red",
  },
  enable: {
    top: false,
    right: true,
    bottom: true,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  },
  onResizeStop: (_: any, __: any, ref: any) => {
    setWidth(ref.style.width);
    setHeight(ref.style.height);
  },
});
