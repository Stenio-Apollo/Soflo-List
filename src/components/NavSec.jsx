/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <section
      className="h-screen w-screen bg-[url('/public/images/Miami2.jpg)] bg-cover bg-center 
         items-center overflow-hidden flex xl:flex-row flex-col-reverse justify-center lg:px-30 px-3 
        "
    >
      {/* left Section */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.9,
          }}
          className="ClassicoBold text-3xl md:text-4xl lg:text-5xl font-bold z-10 mb-1  "
        >
          Rhodie
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.9,
          }}
          className="w-xl text-xl md:text-lg lg:text-3xl text-gray-500 max-w-3xl border-r border-b rounded border-gray-800"
        >
          "I promise to deliver robust, well-crafted production-ready mobile &
          web applications. Every project is backed with clean and concise
          codes, clear communication and commitment to aiding in you creative
          endeavors. So what're you waiting for? let's get this show on the
          'Rhode!'''
        </motion.p>
      </div>
      {/* Right Section */}

   
    </section>
  );
};

export default HeroSection;
