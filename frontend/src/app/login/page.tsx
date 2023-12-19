import React from "react";

import LoginForm from "@/components/login/LoginForm";
import SignupForm from "@/components/login/SignupForm";

export default function Page() {
  return (
    <section>
      <div className="container">
        <LoginForm />
        <SignupForm />
      </div>
    </section>
  );
}
