
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img
      src="/lovable-uploads/13b4fb30-cd5c-42ae-b804-679c42c226d5.png"
      alt="Company Logo"
      className={`w-[123px] h-[50px] ${className}`}
    />
  );
};

export default Logo;
