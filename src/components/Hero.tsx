import hero1 from "../assets/hero-1.png";
import { useContext } from "react";
import { ScrollIntoViewContext } from "./context/ScrollIntoView";

const Hero = () => {
  const context = useContext(ScrollIntoViewContext);

  if (!context) {
    // Handle the case where the context is not provided
    throw new Error(
      "ScrollIntoViewContext must be used within a ScrollIntoViewProvider",
    );
  }

  const { scrollRef } = context;

  const handleClick = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-full flex-wrap flex flex-row justify-center items-center p-9 lg:pl-24 lg:pr-0 pb-20 ">
      <div className="w-full lg:w-3/5 flex flex-col justify-center gap-6">
        <h1 className="h text-4xl lg:text-6xl font-normal">
          Be the First to Find the Cheapest Fuel Near You!
        </h1>
        <p className="p text-lg">
          Join our waitlist to get early access to the app that makes finding
          affordable fuel stations quick and easy. Say goodbye to high prices
          and long searches get notified as soon as we launch!
        </p>
        <button
          className="btn py-3 px-7 rounded-lg text-white text-base w-fit"
          onClick={handleClick}
        >
          Join waitlist
        </button>
      </div>
      <div className="w-full lg:w-2/5 hidden lg:block">
        <img src={hero1} className="w-full h-full bg-contain" />
      </div>
    </div>
  );
};

export default Hero;
