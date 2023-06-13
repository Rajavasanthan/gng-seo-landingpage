const Footer = () => {
 return (
  <div>
   <div className="bg-[#F0F0F0]">
    <div className="grid grid-cols-1 gap-10 py-10 mx-auto md:grid-cols-3 max-w-7xl">
     <img
      src="/assets/gandg.svg"
      alt="Grids and Guides"
      className="m-auto w-36 md:w-2/4"
     />
     <div className="m-auto">
      <p className="font-700 text-[25px] font-redHat text-[#3D4C61]">Address</p>
      <p className="font-400 text-[16px] sm:text-[18px] font-redHat">
       8/4 Poomagal Second Street
      </p>
      <p className="font-400 text-[16px] sm:text-[18px] font-redHat">
       Ambal Nagar,
      </p>
      <p className="font-400 text-[16px] sm:text-[18px] font-redHat">
       Ekkattuthangal, Chennai, Tamil Nadu
      </p>
      <p className="font-400 text-[16px] sm:text-[18px] font-redHat">
       Pin : 600032, India.
      </p>
     </div>
     <div className="m-auto md:m-0">
      <p className="font-700 text-[25px] font-redHat text-[#3D4C61]">Contact</p>
      <p className="font-400 text-[16px] sm:text-[18px] font-redHat">
       Email:{" "}
       <a href="mailto:vasanth@gridsandguides.com">
        vasanth@gridsandguides.com
       </a>
      </p>
      <p className="font-400 text-[16px] sm:text-[18px] font-redHat">
       Phone: <a href="tel:+919884327203">+91-9884327203</a>
      </p>
      <p className="font-400 text-[16px] sm:text-[18px] font-redHat ml-14 md:ml-16">
       <a href="tel:+919884891090">+91-9884891090</a>
      </p>
      <p className="font-400 text-[16px] sm:text-[18px] font-redHat">
       Visit Us:{" "}
       <a
        className="underline text-blue-500"
        href="https://www.gridsandguides.com/"
        target="_blank"
       >
        gridsandguides.com
       </a>
      </p>
     </div>
    </div>
   </div>
   <div className="bg-[#262626] px-6 py-4">
    <p className="text-white text-[16px] md:text-[16px] text-center">
     Grids and Guides • All Right Reserved © "Grids and Guides" Group of
     Companies.{" "}
    </p>
   </div>
  </div>
 );
};

export default Footer;
