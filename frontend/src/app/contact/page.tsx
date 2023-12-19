import React from "react";

import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function Page() {
  return (
    <section>
      <div className="container">
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
  );
}
