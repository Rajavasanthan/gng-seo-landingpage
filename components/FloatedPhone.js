import React from "react";

const FloatedPhone = ({ className }) => {
 return (
  <a
   href="tel:+919884327203"
   className={`bg-[#FD9E07] ${className} animate-bounce w-12 h-12 rounded-full shadow-2xl cursor-pointer flex items-center justify-center z-50`}
  >
   <img src="/assets/phone.png" className="w-8" alt="scroll bar" />
  </a>
 );
};

export default FloatedPhone;
