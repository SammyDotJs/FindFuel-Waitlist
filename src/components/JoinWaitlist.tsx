import React, { useContext, useState } from "react";
import InputField from "./utils/InputField";
import { ScrollIntoViewContext } from "./context/ScrollIntoView";
import axios from "axios";
import { createPortal } from "react-dom";
import SuccessModal from "./Modals/SuccessModal";
import Lottie from "lottie-react";
import loadingAnim from "../assets/Ntl4ulo41s.json";
import FailedModal from "./Modals/FailedModal";

const JoinWaitlist = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);
  //   const { scrollRef } = useContext(ScrollIntoViewContext);
  const context = useContext(ScrollIntoViewContext);

  if (!context) {
    // Handle the case where the context is not provided
    throw new Error(
      "ScrollIntoViewContext must be used within a ScrollIntoViewProvider",
    );
  }

  const { scrollRef } = context;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`;
    const formData = {
      name: fullName,
      email: email,
      phone: phoneNo,
    };
    setLoading(true);
    try {
      const url = "https://findfuel.pythonanywhere.com/api/clients/";
      await axios
        .post(
          url,
          { ...formData },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
        .then(res => {
          console.log(res);
          if (res.statusText == "Created") {
            setIsSuccess(true);
            setLoading(false);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhoneNo("");
          }
        });
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
    setTimeout(() => {
      setIsSuccess(false);
      setError(false);
    }, 2500);
    // console.log(firstName, lastName, email, phoneNo);
  };
  const mountElement = document.getElementById("overlays");

  return (
    <div
      id="join-waitlist"
      className="h-full flex flex-wrap flex-row justify-center items-center p-9 lg:px-24 lg:py-32"
      ref={scrollRef}
    >
      {isSuccess &&
        createPortal(
          <SuccessModal
            onClose={() => {
              setIsSuccess(false);
            }}
          />,
          mountElement ?? document.body,
        )}
      {error &&
        createPortal(
          <FailedModal
            onClose={() => {
              setError(false);
            }}
          />,
          mountElement ?? document.body,
        )}
      <div className="w-full lg:w-2/5 flex flex-col justify-center gap-6">
        <h1 className="h text-4xl lg:text-6xl font-normal">Join Now</h1>
        <p className="p text-lg">
          Just fill in your details, and you’ll be one step closer to accessing
          the best fuel prices around.
          <br /> We’ll notify you as soon as we launch so you can start saving
          right away.
        </p>
      </div>
      <div className="w-full lg:w-3/5 h-full py-9">
        <form
          className="gap-6 rounded-3xl odd-bg flex flex-col items-start justify-center px-7 py-12 max-w-4xl"
          onSubmit={handleSubmit}
        >
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
          <InputField
            label="Phone Number"
            placeholder="Phone Number"
            value={phoneNo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setPhoneNo(e.target.value)
            }
            type="number"
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

          <button
            disabled={loading ? true : false}
            className={`btn ${
              loading ? "py-1" : "py-3"
            } px-7 rounded-lg text-white text-base w- ${
              loading && "opacity-60"
            } min-w-40`}
          >
            {loading ? (
              <Lottie
                animationData={loadingAnim}
                loop={true}
                style={{ width: 40, height: 40, margin: "auto" }}
              />
            ) : (
              <p className="text-white text-base">Join waitlist</p>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinWaitlist;
