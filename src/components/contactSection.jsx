"use client";
import React, { useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import "../styles/contactSection.css";
import { IoIosMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { sendEmail } from "../lib/contactAction";

const initialState = {
  message: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="text-base md:text-lg relative overflow-hidden flex items-center justify-center w-full max-w-[200px] h-12 py-3 px-6 mt-[15px] mx-auto font-bold text-black uppercase tracking-wider rounded-[25px] bg-[linear-gradient(117.4deg,_#0D2BCC_1.72%,_rgba(137,_255,_241,_0.5)_50.63%,_#FFFFFF_97.87%)] shadow-lg backdrop-blur-[15px] transition-all duration-300 ease-in-out hover:bg-[linear-gradient(117.4deg,_rgba(137,_255,_241,_0.5)_4.84%,_#0D2BCC_45.17%,_#FFFFFF_97.87%)] hover:shadow-xl gradient-border-button"
    >
      {pending ? "SENDING..." : "SEND"}
    </button>
  );
}

export default function ContactSection({ className = "" }) {
  const [state, formAction] = useActionState(sendEmail, initialState);

  useEffect(() => {
    if (state.success) {
      alert(state.message);
      document.querySelector("form").reset();
    } else if (state.message) {
      alert(state.message);
    }
  }, [state]);

  return (
    <section className={className}>
      <div className="py-20 flex items-center justify-center bg-[linear-gradient(167.78deg,_rgba(13,_43,_204,_0.82)_20.79%,_rgba(255,_255,_255,_0.82)_91.1%)] p-4 md:p-6">
        <div
          className="relative w-full max-w-6xl rounded-[30px] border-2 border-solid border-white/60 bg-[linear-gradient(117.4deg,_rgba(255,_255,_255,_0.2)_1.72%,_rgba(255,_255,_255,_0.05)_97.87%)] backdrop-blur-[20px] shadow-[0px_20px_40px_0px_#0000001A] opacity-[0.95] flex flex-col items-center justify-center mx-auto p-4 md:p-6"
          style={{
            backgroundImage: "url(/Rectangle 25.svg)",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            Connect with our experts
          </h1>
          <h2 className="text-lg md:text-xl text-white text-center mb-6">
            We are here for you! How can we help?
          </h2>
          <div className="w-full max-w-4xl opacity-[1] rounded-[20px] flex flex-col md:flex-row items-center bg-[linear-gradient(117.4deg,_rgba(255,_255,_255,_0.4)_1.72%,_rgba(137,_255,_241,_0.2)_97.87%)] relative">
            <div className="w-full md:w-1/2 p-6 md:p-8 flex items-center justify-center">
              <img
                src="/contact-vector.svg"
                alt="Contact illustration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-8 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none flex flex-col relative overflow-hidden">
              <div className="w-full z-10">
                <form action={formAction} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Your Name
                    </label>
                    <div className="relative mt-[15px] rounded-[25px] border-2 border-white/60 bg-[linear-gradient(117.4deg,rgba(255,_255,_255,_0.4)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] hover:bg-[linear-gradient(117.4deg,_rgba(3,_246,_234,_0.1)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] shadow-[0px_15px_30px_0px_#0000001A] backdrop-blur-[15px] opacity-100 py-2 px-5 transition-none">
                      <div className="w-[calc(100%-40px)] border-b border-gray-400">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your Name"
                          required
                          className="w-full bg-transparent outline-none pb-1 text-base md:text-lg"
                        />
                      </div>
                      <span className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                        <FaUser className="text-black text-xl md:text-2xl" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email Address
                    </label>
                    <div className="relative mt-[15px] rounded-[25px] border-2 border-white/60 bg-[linear-gradient(117.4deg,rgba(255,_255,_255,_0.4)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] hover:bg-[linear-gradient(117.4deg,_rgba(3,_246,_234,_0.1)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] shadow-[0px_15px_30px_0px_#0000001A] backdrop-blur-[15px] opacity-100 py-2 px-5 transition-none">
                      <div className="w-[calc(100%-40px)] border-b border-gray-400">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          required
                          className="w-full bg-transparent outline-none pb-1 text-base md:text-lg"
                        />
                      </div>
                      <span className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                        <IoIosMail className="text-black text-xl md:text-2xl" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <div className="relative mt-[15px] rounded-[25px] border-2 border-white/60 bg-[linear-gradient(117.4deg,rgba(255,_255,_255,_0.4)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] hover:bg-[linear-gradient(117.4deg,_rgba(3,_246,_234,_0.1)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] shadow-[0px_15px_30px_0px_#0000001A] backdrop-blur-[15px] opacity-100 py-2 px-5 transition-none">
                      <div className="w-[calc(100%-40px)] border-b border-gray-400">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Message"
                          required
                          className="w-full bg-transparent outline-none pb-1 text-base md:text-lg h-20 resize-none"
                        />
                      </div>
                      <span className="absolute top-4 right-5 flex items-center pointer-events-none">
                        <MdMessage className="text-black text-xl md:text-2xl" />
                      </span>
                    </div>
                  </div>
                  <SubmitButton />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}