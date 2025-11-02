import React from "react";

const About = () => {
  return (
    <main>
      <div
        className="h-screen w-screen
         items-center overflow-hidden flex xl:flex-col flex-col-reverse justify-top lg:px-30 px-3 
        "
      >
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-semibold tracking-wider my-8 text-[#FF007F] ">
          Purpose of Service
        </h2>
        {/* description */}
        <p className="bg-transparent text-base sm:text-lg tracking-wider text-slate-700 max-w-[24rem] lg:max-w-[30rem] border-b-2 border-b-black border-r-black border-r-2 border-rounded rounded-md p-2 ">
          SoFLo List is an informational tool for medical cannabis patients in
          Florida. We collect and organize Certificate of Analysis (“COA”) data
          and batch availability information that are publicly published by
          licensed Medical Marijuana Treatment Centers (“MMTCs”). We do not
          perform laboratory testing, and we do not alter or verify the accuracy
          of COAs. All testing and reporting responsibility rests with the MMTCs
          that publish them. Our role is to centralize these reports in one
          place for easier access, comparison, and verification by patients. We
          do not sell, distribute, or promote cannabis.
        </p>
      </div>
    </main>
  );
};

export default About;
