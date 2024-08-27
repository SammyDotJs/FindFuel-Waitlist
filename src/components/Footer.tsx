import appleWhite from "../assets/apple-white.png";
import googlePlayWhite from "../assets/play-white.png";

import fbIcon from "../assets/facebook.png";
import igIcon from "../assets/instagram.png";
import xIcon from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="main flex flex-col lg:flex-col md:flex-col sm:flex-col items-center h-full px-24 py-32 gap-32 relative">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="hw text-3xl lg:text-4xl font-normal text-white lg:text-start text-center">
          Find Fuel
        </h1>
        <h1 className="hw text-4xl lg:text-5xl font-normal text-white lg:text-start text-center">
          Fuel as you go!
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img src={googlePlayWhite} className="max-w-60 bg-contain" />
        <img src={appleWhite} className="max-w-60 bg-contain" />
      </div>
      <div className="flex items-center justify-center">
        <p className="pw text-1xl font-normal text-white">
          &copy; Copyright 2024
        </p>
      </div>
      <div className="absolute flex flex-row items-center gap-2  right-5 bottom-10">
        <img src={igIcon} />
        <img src={xIcon} />
        <img src={fbIcon} />
      </div>
    </div>
  );
};

export default Footer;
