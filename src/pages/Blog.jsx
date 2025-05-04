import React from "react";
import BlogCard from "../components/blog/BlogCard";
import BlogSection from "../components/blog/BlogSection";
import BlogSectionNext from "../components/blog/BlogSectionNext";
import SubscriptionAndTestimonial from "../components/blog/SubscriptionAndTestimonial";

const Blog = () => {
  return (
    <div>
      <BlogCard />
      <BlogSection />
      <BlogSectionNext />
      <SubscriptionAndTestimonial />
    </div>
  );
};

export default Blog;
