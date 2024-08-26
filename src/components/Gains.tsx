import React from "react";

const Gains = () => {
  return (
    <div className="h-full odd-bg flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-between p-9 lg:px-24 lg:py-32">
      <div className="w-full lg:w-3/5">
        <h1 className="h text-4xl lg:text-6xl font-normal text-center w-full lg:w-3/4">
          Why Join the Waitlist?
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-col gap-12 lg:w-2/5 items-end justify-center py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:gap-0 gap-5">
          <div className="">
            <div className="main rounded-3xl flex justify-center items-center w-20 h-20">
              <h1 className="font-normal text-4xl hw text-white">1</h1>
            </div>
          </div>
          <div className="flex flex-col pl-3">
            <h1 className="h text-3xl font-normal w-fit">
              Exclusive Early Access
            </h1>
            <p className="p text-base font-normal w-full lg:w-3/5">
              Be among the first to experience the convenience of finding the
              most affordable fuel stations near you.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:gap-0 gap-5">
          <div className="">
            <div className="secondary rounded-3xl flex justify-center items-center w-20 h-20">
              <h1 className="font-normal text-4xl h text-white">2</h1>
            </div>
          </div>
          <div className="flex flex-col pl-3">
            <h1 className="h text-3xl font-normal w-fit">Priority Alerts</h1>
            <p className="p text-base font-normal w-full lg:w-3/5">
              Get notified immediately when we launch, so you can start saving
              on fuel costs right away.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:gap-0 gap-5">
          <div className="">
            <div className="main rounded-3xl flex justify-center items-center w-20 h-20">
              <h1 className="font-normal text-4xl hw text-white">3</h1>
            </div>
          </div>
          <div className="flex flex-col pl-3">
            <h1 className="h text-3xl font-normal w-fit">Special Offers</h1>
            <p className="p text-base font-normal  w-full lg:w-3/5">
              Receive exclusive discounts and promotions available only to our
              early subscribers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gains;
