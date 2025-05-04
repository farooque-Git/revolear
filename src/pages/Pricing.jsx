import React from "react";
import PricingMainSection from "../components/pricing/PricingMainSection";
import PricingSection from "../components/pricing/PricingSection";
import TestimonialCarousel from "../components/pricing/TestimonialCarousel";
import FaqSection from "../components/pricing/FaqSection";

const Pricing = () => {
  return (
    <div>
      <PricingMainSection />
      <PricingSection />
      <TestimonialCarousel />
      <FaqSection />
    </div>
  );
};

export default Pricing;
