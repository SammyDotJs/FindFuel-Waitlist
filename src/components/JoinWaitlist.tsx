import React, { useContext, useState } from "react";
import InputField from "./utils/InputField";
import { ScrollIntoViewContext } from "./context/ScrollIntoView";

const JoinWaitlist = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
//   const { scrollRef } = useContext(ScrollIntoViewContext);
  const context = useContext(ScrollIntoViewContext);

  if (!context) {
    // Handle the case where the context is not provided
    throw new Error(
      "ScrollIntoViewContext must be used within a ScrollIntoViewProvider",
    );
  }

  const { scrollRef } = context;

  return (
    <div
      id="join-waitlist"
      className="h-full flex flex-wrap flex-row justify-center items-center p-9 lg:px-24 lg:py-32"
      ref={scrollRef}
    >
      <div className="w-full lg:w-3/5 flex flex-col justify-center gap-6">
        <h1 className="h text-4xl lg:text-6xl font-normal">Join Now</h1>
        <p className="p text-lg">
          Just fill in your details, and you’ll be one step closer to accessing
          the best fuel prices around.
          <br /> We’ll notify you as soon as we launch so you can start saving
          right away.
        </p>
      </div>
      <div className="w-full lg:w-2/5 h-full py-9">
        <form className="gap-6 rounded-3xl odd-bg flex flex-col items-start justify-center px-7 py-12 max-w-4xl">
          <InputField
            label="First Name"
            placeholder="First Name"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setFirstName(e.target.value)
            }
          />
          <InputField
            label="Last Name"
            placeholder="Last Name"
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setLastName(e.target.value)
            }
          />
          <InputField
            label="Email"
            placeholder="Email Address"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setEmail(e.target.value)
            }
            type="email"
          />
          <div className="flex flex-col md:flex-row lg:flex-row items-start gap-3 p-3">
            <label className="chk-container mb-4 md:mb-0 lg:mb-0">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <p className="chk-text font-normal text-base">
              I agree to receive emails, updates, and promotional offers from
              Find Fuel related to the app and its services. I understand that I
              can unsubscribe at any time.
            </p>
          </div>

          <button className="btn py-3 px-7 rounded-lg text-white text-base w-fit">
            Join waitlist
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinWaitlist;
