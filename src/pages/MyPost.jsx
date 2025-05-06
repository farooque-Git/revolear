import React from "react";
import PostMainSection from "../components/post/PostMainSection";
import PostDashboard from "./../components/post/PostDashboard";
import CampaignDashboard from "./../components/post/CampaignDashboard";
import P2PTransactionsSection from "../components/post/P2PTransactionsSection";

const MyPost = () => {
  return (
    <div>
      <PostMainSection />
      <PostDashboard />
      <CampaignDashboard />
      <P2PTransactionsSection />
    </div>
  );
};

export default MyPost;
