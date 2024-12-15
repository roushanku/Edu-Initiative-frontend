"use client";

import { toast } from "sonner";
import Cookies from "js-cookie";
import login from "@/api/auth/login";
import React, { useState } from "react";
import { GoogleIcon, MicrosoftIcon } from "hugeicons-react";

const SignInCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateInputs()) {
      const userData = {
        email: email,
        password: password,
      };

      const response = await login(userData);

      if (response.status === true) {
        toast.success(response.message, {
          description: "Login is successfull",
        });
        const token = response.data.token;
        Cookies.set("edu-initiative-user-token", token, {
          path: "/",
          expires: 7,
        });
        // window.location.href = "/";
        return;
      } else {
        toast.error(response.message, {
          description: "Login failed",
        });
      }
    }
  };

  const validateInputs = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    if (!password || password.length < 3) {
      setPasswordError("Password must be at least 3 characters long.");
      isValid = false;
    }

    return isValid;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md p-6 mx-auto bg-white border rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="w-full mt-4 space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`mt-1 block w-full p-2 border rounded ${emailError ? "border-red-500" : "border-gray-300"}`}
            placeholder="your@email.com"
          />
          {emailError && (
            <p className="mt-1 text-sm text-red-600">{emailError}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={`mt-1 block w-full p-2 border rounded ${passwordError ? "border-red-500" : "border-gray-300"}`}
            placeholder="••••••"
          />
          {passwordError && (
            <p className="mt-1 text-sm text-red-600">{passwordError}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <button
            type="button"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot your password?
          </button>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2  rounded bg-slate-300 hover:bg-slate-600 hover:text-white text-black "
        >
          Sign in
        </button>
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
      <div className="my-4 w-full border-t"></div>
      <div className="flex flex-col w-full justify-center items-center space-y-2">
        <button
          onClick={() => alert("Sign in with Google")}
          className="w-full flex flex-row justify-center items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100"
        >
          <GoogleIcon className="text-blue-500" />
          Sign in with Google
        </button>
        <button
          onClick={() => alert("Sign in with Facebook")}
          className="w-full px-4 gap-2 flex flex-row justify-center items-center py-2 border rounded hover:bg-gray-100"
        >
          <MicrosoftIcon className="text-blue-500" />
          Sign in with Microsoft
        </button>
      </div>
    </div>
  );
};

export default SignInCard;
