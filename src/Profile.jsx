import React from "react";
import ProfileMainSection from "./components/profile/ProfileMainSection";
import ProfileAndPayment from "./components/profile/ProfileAndPayment";
import FaqAndSecurity from "./components/profile/FaqAndSecurity";

const Profile = () => {
  return (
    <div>
      <ProfileMainSection />
      <ProfileAndPayment />
      <FaqAndSecurity />
    </div>
  );
};

export default Profile;
