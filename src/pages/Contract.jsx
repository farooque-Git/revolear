import React from "react";
import P2PSection from "./../components/contract/P2PSection";

import ContractPricingPlans from "../components/contract/PricingPlans";
import { FaqAndSecurity } from "../components/profile/FaqAndSecurity";
import ContractFooter from "./../components/contract/ContractFooter";

const Contract = () => {
  return (
    <div>
      <P2PSection />
      <ContractPricingPlans />
      <FaqAndSecurity />
      <ContractFooter />
    </div>
  );
};

export default Contract;
