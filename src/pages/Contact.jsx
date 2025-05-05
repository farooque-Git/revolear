import React from "react";
import ContactMainScreen from "./../components/contact/ContactMainSection";
import ContactForm from "../components/contact/ContactForm";
import ContactFaqSection from "./../components/contact/ContactFaqSection";
import TestimonialContactSection from "../components/contact/TestimonialContactSection";

const Contact = () => {
  return (
    <div>
      <ContactMainScreen />
      <ContactForm />
      <ContactFaqSection />
      <TestimonialContactSection />
    </div>
  );
};

export default Contact;
