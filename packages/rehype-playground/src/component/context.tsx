import React from "react";

type Context = {
  theme: "dark" | "light";
};
const PlaygroundContext = React.createContext({} as Context);

export function usePlayground() {
  return React.useContext(PlaygroundContext);
}

export function PlaygroundProvider({
  theme,
  children,
}: React.PropsWithChildren<Context>) {
  return (
    <PlaygroundContext.Provider value={{ theme }}>
      {children}
    </PlaygroundContext.Provider>
  );
}
