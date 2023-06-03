import { useRouter } from "next/router";

export default function FormSubmitResponseModal() {
 const router = useRouter();
 return (
  <main className="antialiased bg-[#F7F8FD] text-gray-900 font-sans overflow-x-hidden">
   <div className="relative px-4 min-h-screen flex items-center justify-center">
    <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
    <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 z-50 mb-4 mx-4">
     <div className="flex items-center">
      <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
       <p className="font-bold text-green-400 text-xl md-3xl text-center pb-2 lg:pb-5">
        Form submitted successfully !
       </p>
       <p className="text-sm lg:text-lg font-semibold text-[#3D4C61] mt-1 text-center pb-3">
        We just received your message. Thank you very much for writing to us.
       </p>
       <p className="text-sm lg:text-lg font-semibold text-[#3D4C61] mt-1 text-center">
        We are working on your request and will get in touch as soon as
        possible.
       </p>
      </div>
     </div>
     <div className="text-center md:text-right mt-4 md:flex md:justify-center">
      <button
       onClick={() => router.push("/hire-contract-developers")}
       className="block w-[150px] px-4 py-3 bg-[#FD9E07] text-white rounded-lg font-semibold text-sm my-4
          "
      >
       Go Back
      </button>
     </div>
    </div>
   </div>
  </main>
 );
}
