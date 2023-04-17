import React from "react";

type Context = {
  theme?: any;
  components?: Record<string, any>;
};
const PlaygroundContext = React.createContext({} as Context);

export function usePlaygroundContext() {
  return React.useContext(PlaygroundContext);
}

export function PlaygroundProvider({
  theme,
  components,
  children,
}: React.PropsWithChildren<Context>) {
  return (
    <PlaygroundContext.Provider value={{ theme, components }}>
      {children}
    </PlaygroundContext.Provider>
  );
}
