import React from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = ({ className }) => {
 return (
  <div
   className={`bg-[#FD9E07] ${className} animate-bounce w-12 h-12 rounded-md shadow-2xl cursor-pointer flex items-center justify-center z-50`}
   onClick={() => {
    scroll.scrollToTop();
   }}
  >
   <img src="/assets/up-arrow.png" className="w-5" alt="scroll bar" />
  </div>
 );
};

export default ScrollToTop;
