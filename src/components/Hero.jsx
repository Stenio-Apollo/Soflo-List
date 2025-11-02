import "boxicons/css/boxicons.min.css";

const hero = () => {
  return (
    <main
      className="flex lg:mt-20 flex-col lg:flex-row items-center
      justify-between min-h-[calc(90vh-6rem)]"
    >
      <div
        className="max-w-xl ml-[5%] z-10 mt-[90%]
          md:mt-[60%] lg:mt-0 bg-transparent"
      >
        {/* tag box-with gradient */}
        <div
          className="relative translate-x-20 justify-center w-[95%] sm:w-48 h-10
              bg-gradient-to-r from-slate-200 to-[#ff007f] shadow-[0_0_15px_rgba(255,255,255,0.4)]
              rounded-full"
        >
          <div className="absolute inset-[3px] bg-[#F3F0E0] rounded-full flex items-center justify-center gap-1">
            <i class="bx bxs-leaf"></i>
            SOFLO LIST
          </div>
        </div>
        {/* Main Heading */}
        <h1 className="flex justify-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold tracking-wider my-8  text-[#FF007F]">
          ABOUT US
        </h1>
        {/* description */}
        <p className="bg-transparent text-base sm:text-lg tracking-wider text-slate-700 max-w-[24rem] lg:max-w-[30rem] border-b-2 border-b-black  border-r-black border-r-2 border-rounded rounded-md p-2  ">
          Soflolist — Centralized Cannabis Test Reports (COAs) for Florida
          Medical Patients Find the right batch, see the real lab report, and
          know where it’s in stock—all in one place. CTA: Get Access
        </p>
        {/* Call to action */}
        <div className="flex justify-center  mt-7 mb-3">
          <a
            className="flex justify-center items-center bg-slate-700 border text-slate-100 border-black py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm
                  font-semibold tracking-wider transition-all duration-300 hover:bg-[#FF007F] hover:text-black "
            href="#"
          >
            See Stock
            <i class="bx bx-link-external"></i>
          </a>
        </div>
      </div>
      {/* 3d Design */}

      <spline-viewer url="https://prod.spline.design/5ldAdzf1N2aBhYZO/scene.splinecode"></spline-viewer>
    </main>
  );
};

export default hero;
