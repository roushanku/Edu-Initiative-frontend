"use client";

import React, { useEffect, useState } from "react";
import SignInCard from "./SignInCard";
import { title } from "../Primitives";

const SignInSide = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  // useEffect(() => {
  //   const savedMode = localStorage.getItem("themeMode") as
  //     | "light"
  //     | "dark"
  //     | null;
  //   if (savedMode) {
  //     setMode(savedMode);
  //   } else {
  //     const systemPrefersDark = window.matchMedia(
  //       "(prefers-color-scheme: dark)"
  //     ).matches;
  //     setMode(systemPrefersDark ? "dark" : "light");
  //   }
  // }, []);

  return (
    <div
      className={`flex flex-col w-5xl justify-between h-screen ${mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <main className="flex flex-col md:flex-col justify-center items-center gap-8 p-6">
        <h1 className={title()}>Sign In</h1>
        <SignInCard />
      </main>
      <footer className="p-4 text-center border-t">
        &copy; {new Date().getFullYear()} My Application
      </footer>
    </div>
  );
};

export default SignInSide;
