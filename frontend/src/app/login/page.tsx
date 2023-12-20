"use client";

import React from "react";

import LoginForm from "@/components/login/LoginForm";
import SignupForm from "@/components/login/SignupForm";

export default function Page() {
  // check the cookie for loggedIn
  // if true, redirect to profile

  // const loggedIn = document.cookie.includes("loggedIn=true");
  // const session = document.cookie.split("session=")[1];

  // console.log(loggedIn, session);

  return (
    <section>
      <div className="container">
        <LoginForm />
        <SignupForm />
      </div>
    </section>
  );
}
