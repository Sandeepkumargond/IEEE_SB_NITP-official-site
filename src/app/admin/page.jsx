"use client";

import { useState } from "react";
import { IoIosMail } from "react-icons/io";
import "./admin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you would handle the login logic i have left it for the team to implement
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="w-[1440px] h-[1142px] flex items-center justify-center bg-[linear-gradient(167.78deg,_rgba(13,_43,_204,_0.82)_20.79%,_rgba(255,_255,_255,_0.82)_91.1%)] p-6">
      <div
        className="relative w-[1299px] h-[926px] rounded-[30px] border-2 border-solid border-white/60 bg-[linear-gradient(117.4deg,_rgba(255,_255,_255,_0.2)_1.72%,_rgba(255,_255,_255,_0.05)_97.87%)] backdrop-blur-[20px] shadow-[0px_20px_40px_0px_#0000001A] opacity-[0.82] flex items-center justify-center mx-auto"
        style={{
          backgroundImage: "url(/Rectangle 25.svg)",
          backgroundSize: "cover",
        }}
      >
        {/* Logo: positioned inside the box at the top-left with padding */}
        <img
          src="/logo.svg"
          alt="Logo"
          className="absolute top-6 left-6 w-[180px] h-auto z-20"
          style={{ opacity: 1 }}
        />

        <div
          className="w-[919px] h-[655px] top-[281px] left-[260px] opacity-[1] rounded-[20px] flex bg-no-repeat bg-center"
          style={{
            backgroundImage: "url(/Vector.svg)",
            backgroundSize: "cover",
          }}
        >
          {/* Left Welcome section */}
          <div className="w-1/2 p-12 text-center text-white flex flex-col justify-center rounded-l-2xl">
            <h1 className="tracking-[0%] align-middle text-[40px] text-black font-bold mb-4">
              WELCOME TO
            </h1>

            {/* === THIS IS THE ANIMATION CODE === */}
            <div className="text-4xl font-extrabold mb-6 text-purple-700 animated-text-container">
              <div className="animated-text-wrapper">
                <div>IEEE</div>
                <div>STUDENT BRANCH</div>
                <div>NIT PATNA</div>
              </div>
            </div>
            {/* === END OF ANIMATION CODE === */}
            <div className="w-[382px] h-[118px] top-[157px]">
              <p className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0%] text-center align-middle text-white">
                To keep connected with us,
                <br />
                please login with your personal
                <br />
                information
              </p>
            </div>
          </div>

          {/* Right Admin login form */}
          <div className="w-1/2 p-12  rounded-r-2xl flex flex-col justify-center ">
            <div className="top-[389px] left-[755px] gap-[30px]">
              <h2 className="text-[40px] font-bold mb-8 text-black text-center items-center ">
                ADMIN LOGIN
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* The Email Input Component */}
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <div className="relative h-[56px] mt-[20px] rounded-[30px] border-2 border-white/60 bg-[linear-gradient(117.4deg,rgba(255,_255,_255,_0.4)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] hover:bg-[linear-gradient(117.4deg,_rgba(3,_246,_234,_0.1)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] shadow-[0px_20px_40px_0px#0000001A] backdrop-blur-[17.4px] opacity-100 py-[9px] px-[35px] transition-none">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      required
                      className="w-[calc(100%-40px)] h-full bg-transparent outline-none pr-3 pb-1 border-b border-gray-400 text-2xl"
                    />
                    <span className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                      <IoIosMail className="text-black text-[40px]" />
                    </span>
                  </div>
                </div>
                {/* The Password Input Component */}
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className="relative h-[56px] mt-[20px] rounded-[30px] border-2 border-white/60 bg-[linear-gradient(117.4deg,rgba(255,_255,_255,_0.4)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] hover:bg-[linear-gradient(117.4deg,_rgba(3,_246,_234,_0.1)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] shadow-[0px_20px_40px_0px_#0000001A] backdrop-blur-[17.4px] opacity-100 py-[9px] px-[35px] transition-none">
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                      className="w-[calc(100%-40px)] h-full bg-transparent outline-none pr-3 pb-1 border-b border-gray-400 text-2xl"
                    />
                    <span className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                      {/* Password icon on the right */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="40px"
                        viewBox="0 -960 960 960"
                        width="40px"
                        fill="#1f1f1f"
                      >
                        <path d="M160-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-200v-80h800v80H80Zm400-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm320 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="flex justify-self-end">
                  <a
                    href="#"
                    className="text-black hover:text-cyan-300 text-xl"
                  >
                    Forgot Password ?
                  </a>
                </div>
                <button
                  type="submit"
                  className="text-xl relative overflow-hidden flex items-center justify-center w-[182px] h-[56px] py-[13px] px-[35px] mt-[20px] mx-auto font-bold text-black uppercase tracking-wider rounded-[30px] bg-[linear-gradient(117.4deg,_#0D2BCC_1.72%,_rgba(137,_255,_241,_0.5)_50.63%,_#FFFFFF_97.87%)] shadow-lg backdrop-blur-[17.4px] transition-all duration-300 ease-in-out hover:bg-[linear-gradient(117.4deg,_rgba(137,_255,_241,_0.5)_4.84%,_#0D2BCC_45.17%,_#FFFFFF_97.87%)] hover:shadow-xl gradient-border-button"
                >
                  SIGN IN
                </button>

                <p className="text-center text-black hover:text-cyan-300 text-xl">
                  Don&apos;t have account? <a href="#">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
