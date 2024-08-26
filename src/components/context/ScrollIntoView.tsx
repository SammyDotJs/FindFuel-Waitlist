import React, { createContext, PropsWithChildren, useRef } from "react";

export const ScrollIntoViewContext = createContext<null>(null);

const ScrollIntoViewProvider = ({ children }: PropsWithChildren) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <ScrollIntoViewContext.Provider value={{ scrollRef }}>
      {children}
    </ScrollIntoViewContext.Provider>
  );
};

export default ScrollIntoViewProvider;
