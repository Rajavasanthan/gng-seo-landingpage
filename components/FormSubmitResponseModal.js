import { useRouter } from "next/router";

export default function FormSubmitResponseModal() {
    const router = useRouter();
    return (
        <main className="antialiased bg-[#F7F8FD] text-gray-900 font-sans overflow-x-hidden">
            <div className="relative flex items-center justify-center min-h-screen px-4">
                <div className="absolute inset-0 z-10 w-full h-full bg-black opacity-25"></div>
                <div className="fixed inset-x-0 z-50 p-4 mx-4 mb-4 bg-white rounded-lg md:max-w-md md:mx-auto">
                    <div className="flex items-center">
                        <div className="mt-4 text-center md:mt-0 md:ml-6 md:text-left">
                            <img
                                id="homepagelogo"
                                src="/assets/logo.svg"
                                className="mx-auto my-3"
                                alt="Grids and Guides"
                            />
                            <p className="pb-2 text-xl font-bold text-center text-green-400 md-3xl lg:pb-5">
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
                    <div className="mt-4 text-center md:text-right md:flex md:justify-center">
                        <button
                            onClick={() => window.location.href = "https://gridsandguides.com/"}
                            className="block w-[150px] px-4 py-3 bg-[#FD9E07] text-white rounded-lg font-semibold text-sm my-4
          "
                        >
                            Visit Website
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
