import React from "react";
import ProfileMainSection from "./../components/profile/ProfileMainSection";
import ProfileAndPayment from "./../components/profile/ProfileAndPayment";
import {
  FaqAndSecurity,
  FaqAndSecurityFooter,
} from "../components/profile/FaqAndSecurity";

const Profile = () => {
  return (
    <div>
      <ProfileMainSection />
      <ProfileAndPayment />
      <FaqAndSecurity />
      <FaqAndSecurityFooter />
    </div>
  );
};

export default Profile;
