import React from "react";

export const gradientColor = "from-pink-400 to-teal-500";

export const GradientButton = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`bg-gradient-to-r ${gradientColor} text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition ${className}`}
  >
    {children}
  </button>
);

export const GradientOutlineButton = ({
  children,
  className = "",
  ...props
}) => (
  <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-400 to-teal-500 inline-block">
    <button
      {...props}
      className={`px-6 py-3 bg-white text-black rounded-full font-medium transition hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  </div>
);
