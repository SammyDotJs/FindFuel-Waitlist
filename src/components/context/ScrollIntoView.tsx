import {
  createContext,
  PropsWithChildren,
  useRef,
  MutableRefObject,
} from "react";

// Define the shape of the context value
interface ScrollIntoViewContextType {
  scrollRef: MutableRefObject<HTMLDivElement  | null>;
}

// Update the context type to match the provided value
export const ScrollIntoViewContext =
  createContext<ScrollIntoViewContextType | null>(null);

const ScrollIntoViewProvider = ({ children }: PropsWithChildren) => {
  const scrollRef = useRef<HTMLDivElement  | null>(null);

  return (
    <ScrollIntoViewContext.Provider value={{ scrollRef }}>
      {children}
    </ScrollIntoViewContext.Provider>
  );
};

export default ScrollIntoViewProvider;
