import React from "react";

const GetApp = () => {
  return (
    <div className="flex flex-col items-start h-full odd-bg px-24 py-32 gap-32">
      <div className="flex flex-col gap-10">
        <h1 className="h text-4xl lg:text-6xl font-normal">Get the Find Fuel app</h1>
        <p className="p text-lg">
          Download now and never miss out on the latest deals at the pump!
        </p>
      </div>
      <div className="flex flex-row items-center gap-10">
        <img src="src/assets/play.png" className="max-w-60 bg-contain" />
        <img src="src/assets/apple.png" className="max-w-60 bg-contain" />
      </div>
    </div>
  );
};

export default GetApp;
