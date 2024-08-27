import { useContext } from "react";
import { ScrollIntoViewContext } from "./context/ScrollIntoView";

const Header = () => {
    const context = useContext(ScrollIntoViewContext);

  if (!context) {
    throw new Error("ScrollIntoViewContext must be used within a ScrollIntoViewProvider");
  }

  const { scrollRef } = context;

  const handleClick = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex items-center justify-between p-9 lg:py-10 lg:px-24">
      <h1 className="h text-2xl font-normal">Find Fuel</h1>
      <button
        className="btn py-3 px-7 rounded-lg text-white text-base w-fit"
        onClick={handleClick}
      >
        Join waitlist
      </button>
    </div>
  );
};

export default Header;
