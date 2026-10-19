import React from "react";

const Hero = () => {
return (
    <>
    <section className="flex max-w-full -z-20 bg-white px-4 mt-1 ">
        <div className="mx-auto grid max-w-auto items-center gap-16 md:grid-cols-2 lg:grid-cols-2">
            
            <div className=" items-start mt-32">
                <span className="text-2xl text-[#106cc8]">5.0 (980 Reviews)</span>
                <h2 className="mt-4  text-7xl font-semibold font-sans text-shadow-neutral-950">
                    Partner in health <br /> and wellness
                </h2>
                <p className="mt-4 max-w-sm text-2xl leading-relaxed text-neutral-600">
                    Providing advanced healthcare solutions with a compassionate touch for every patient.
                </p>
                <div className="flex gap-4 mt-6">
                    <a className="bg-[#106cc8] text-white py-2 px-4 rounded-4xl  hover:text-[#106cc8] transition duration-200 "><span className="hover:translate-y-2">Book a call</span></a>
                    <a className="border border-[#106cc8] text-[#106cc8] py-2 px-4 rounded-4xl hover:bg-[#106cc8] hover:text-white transition duration-300 ">Watch video</a>
                </div>

                <div className="flex">
                    <div className="">
                        <div className="" style={{backgroundImage:"url('/hero1.webp')"}}></div>
                        <div  style={{backgroundImage:"url('/hero2.webp')"}}></div>
                        <div style={{backgroundImage:"url('/hero3.webp')"}}></div>
                    </div>
                </div>

            </div>
            
            {/* Image with floating stats card */}
            <div className="relative  aspect-30/32  items-end overflow-hidden rounded-4xl  bg-center bg-cover "
            style={{
                    backgroundImage: "url('/homehero.jpg')",
                }}>
            </div>
        </div>
    </section>
    </>
);
};

export default Hero;
