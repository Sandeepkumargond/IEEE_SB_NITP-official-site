"use client";

import './admin.css';
import { useState } from "react";
import { IoIosMail } from "react-icons/io";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you would handle the login logic i have left it for the team to implement
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(167.78deg,_rgba(13,_43,_204,_0.82)_20.79%,_rgba(255,_255,_255,_0.82)_91.1%)] p-4 md:p-6">
      <div
        className="relative w-full max-w-[1299px] md:min-h-[926px] rounded-[30px] border-2 border-solid border-white/60 bg-[linear-gradient(117.4deg,_rgba(255,_255,_255,_0.2)_1.72%,_rgba(255,_255,_255,_0.05)_97.87%)] backdrop-blur-[20px] shadow-[0px_20px_40px_0px_#0000001A] opacity-[0.95] flex items-center justify-center mx-auto p-4 md:p-6"
        style={{
          backgroundImage: "url(/Rectangle 25.svg)",
          backgroundSize: "cover",
        }}
      >
        {/* Desktop logo: positioned inside the box at the top-left on md+ screens */}
        <img
          src="/logo.svg"
          alt="Logo"
          className="hidden md:block absolute top-6 left-6 w-[180px] h-auto z-20"
          style={{ opacity: 1 }}
        />

        {/* Content wrapper: on mobile we stack logo, hero and form vertically in this order */}
        <div className="w-full max-w-[919px] md:h-[655px] opacity-[1] rounded-[20px] flex flex-col md:flex-row items-stretch bg-no-repeat bg-center md:bg-[url('/Vector.svg')] md:bg-cover relative">
          {/* Mobile decorative backgrounds: applied per-section */}
          {/* Mobile: centered logo at top (visible only on small screens) */}
          <div className="md:hidden flex justify-center mt-6 mb-8">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-[180px] sm:w-[200px] h-auto"
            />
          </div>
          {/* Left Welcome section */}
          <div className="w-full md:w-1/2 p-6 md:p-12 text-center text-white flex flex-col justify-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none relative overflow-hidden mobile-hero-bg">
            <div className="z-10">
              <h1 className="tracking-tight align-middle text-3xl md:text-[40px] text-black font-bold mb-4">
                WELCOME TO
              </h1>

              {/* === THIS IS THE UPDATED ANIMATION CODE === */}
              <div className="text-2xl md:text-4xl font-extrabold mb-6 text-purple-700 animated-text-container">
                <div className="animated-text-wrapper">
                  <div>IEEE</div>
                  <div>STUDENT BRANCH</div>
                  <div>NIT PATNA</div>
                </div>
              </div>
              {/* === END OF UPDATED CODE === */}
              <div className="w-full md:w-[382px] h-auto mt-2 mx-auto">
                <p className="font-poppins font-semibold text-base md:text-[24px] leading-snug tracking-tight text-center align-middle text-white">
                  To keep connected with us,
                  <br />
                  please login with your personal
                  <br />
                  information
                </p>
              </div>
            </div>
          </div>

          {/* Right Admin login form */}
          <div className="w-full md:w-1/2 p-6 md:p-12 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none flex flex-col justify-center relative overflow-hidden mobile-form-bg">
            <div className="w-full z-10">
              <h2 className="text-3xl md:text-[40px] font-bold mb-8 text-black text-center items-center ">
                ADMIN LOGIN
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* The Email Input Component */}
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <div className="relative mt-[20px] rounded-[30px] border-2 border-white/60 bg-[linear-gradient(117.4deg,rgba(255,_255,_255,_0.4)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] hover:bg-[linear-gradient(117.4deg,_rgba(3,_246,_234,_0.1)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] shadow-[0px_20px_40px_0px_#0000001A] backdrop-blur-[17.4px] opacity-100 py-2 px-6 transition-none">
                    <div className="w-[calc(100%-48px)] border-b border-gray-400">
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required
                        className="w-full bg-transparent outline-none pb-1 text-base md:text-xl"
                      />
                    </div>
                    <span className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                      <IoIosMail className="text-black text-2xl md:text-3xl" />
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className="relative mt-[20px] rounded-[30px] border-2 border-white/60 bg-[linear-gradient(117.4deg,rgba(255,_255,_255,_0.4)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] hover:bg-[linear-gradient(117.4deg,_rgba(3,_246,_234,_0.1)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] shadow-[0px_20px_40px_0px_#0000001A] backdrop-blur-[17.4px] opacity-100 py-2 px-6 transition-none">
                    <div className="w-[calc(100%-48px)] border-b border-gray-400">
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="w-full bg-transparent outline-none pb-1 text-base md:text-xl"
                      />
                    </div>
                    <span className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                      {/* Password icon on the right */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#1f1f1f"
                        className="w-6 h-6 md:w-8 md:h-8"
                      >
                        <path d="M160-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-200v-80h800v80H80Zm400-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm320 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="flex justify-self-end">
                  <a
                    href="#"
                    className="text-black hover:text-cyan-300 text-sm md:text-base"
                  >
                    Forgot Password ?
                  </a>
                </div>
                <button
                  type="submit"
                  className="text-base md:text-lg relative overflow-hidden flex items-center justify-center w-full max-w-[182px] h-14 py-3 px-8 mt-[20px] mx-auto font-bold text-black uppercase tracking-wider rounded-[30px] bg-[linear-gradient(117.4deg,_#0D2BCC_1.72%,_rgba(137,_255,_241,_0.5)_50.63%,_#FFFFFF_97.87%)] shadow-lg backdrop-blur-[17.4px] transition-all duration-300 ease-in-out hover:bg-[linear-gradient(117.4deg,_rgba(137,_255,_241,_0.5)_4.84%,_#0D2BCC_45.17%,_#FFFFFF_97.87%)] hover:shadow-xl gradient-border-button"
                >
                  SIGN IN
                </button>

                <p className="text-center text-black hover:text-cyan-300 text-sm md:text-base">
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
