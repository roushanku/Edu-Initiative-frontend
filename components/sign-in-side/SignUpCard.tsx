"use client";

import { toast } from "sonner";
import Cookies from "js-cookie";
import login from "@/api/auth/login";
import React, { useState } from "react";
import { GoogleIcon, MicrosoftIcon } from "hugeicons-react";
import { Sign } from "crypto";
import register from "@/api/auth/register";

const SignUpCard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateInputs()) {
      const userData = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      };

      const response = await register(userData);

      if (response.status === true) {
        toast.success(response.message, {
          description: "account is created successfull",
        });
        // window.location.href = "/";
        return;
      } else {
        toast.error(response.message, {
          description: "register failed",
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

    if(!firstName || firstName.length < 3) {
      setFirstNameError("First name must be at least 3 characters long.");
      isValid = false;
    }

    if(!lastName || lastName.length < 3) {
      setLastNameError("Last name must be at least 3 characters long.");
      isValid = false;
    }

    if(!phoneNumber || phoneNumber.length !== 10) {
      setPhoneNumberError("Phone number must be of 10 characters long.");
      isValid = false;
    }

    return isValid;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md p-6 mx-auto bg-white border rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="w-full mt-4 space-y-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={`mt-1 block w-full p-2 border rounded ${firstNameError ? "border-red-500" : "border-gray-300"}`}
            placeholder="John"
          />
          {firstNameError && (
            <p className="mt-1 text-sm text-red-600">{firstNameError}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className={`mt-1 block w-full p-2 border rounded ${lastNameError ? "border-red-500" : "border-gray-300"}`}
            placeholder="Doe"
          />
          {lastNameError && (
            <p className="mt-1 text-sm text-red-600">{lastNameError}</p>
          )}
          </div>
          <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
            >
            Phone Number
            </label>
            <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className={`mt-1 block w-full p-2 border rounded ${phoneNumberError ? "border-red-500" : "border-gray-300"}`}
            placeholder="1234567890"
            />
            {phoneNumberError && (
            <p className="mt-1 text-sm text-red-600">{phoneNumberError}</p>
            )}
          </div>
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
          Sign up
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <a href="/sign-in" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </form>
      <div className="my-4 w-full border-t"></div>
     
    </div>
  );
};

export default SignUpCard;
