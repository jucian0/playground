import React from "react";

export function Button({ children }: any) {
  const [number, setNumber] = React.useState(0);
  return (
    <button
      style={{
        padding: "10px 20px",
        color: "red",
        backgroundColor: "blue",
        height: 500,
      }}
      onClick={() => setNumber(number + 1)}
    >
      {children}
      {` `}
      {number}
    </button>
  );
}
