import React from "react";
import Hero from "./components/hero.jsx";
import About from "./components/About.jsx";
import Typed from "./components/Typed.jsx";
import Typed2 from "./components/Typed2.jsx";
import Typed3 from "./components/Typed3.jsx";
import Header2 from "./components/Header2.jsx";
import Ty from "./components/Ty.jsx"
const App = () => {
  return (
    <main>
      {/* gradient image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-1 "
        src="/gradient.png"
        alt=""
      />
      {/* blur fx */}
      <div
        className=" h-0 w-[40rem] absolute top-[20%] right-[-5%] 
      shadow-[0_0_900px_5px_#FF7926] -rotate-[39deg] -z-10 "
      ></div>
      <Header2 />
      <Typed />
      <Typed2 />
      <Typed3 />
     <Ty/>
      <Hero />
      <About />
    </main>
  );
};

export default App;
