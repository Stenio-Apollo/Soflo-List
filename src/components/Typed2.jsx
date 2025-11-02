import React, { useState, useEffect } from "react";

function useTypewriter(text, speed = 10, startDelay = 1000) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed((prev) => prev + text.charAt(i));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return displayed;
}

export default function App() {
  const typedText = useTypewriter("Wee provide floridians with a list of potent and effective Medical Canibis by location centralized certificates of analysis", 80, 4900);

return (
   <div className="flex justify-center item-center p-7 ">
          <h1 className="text-black border-b border-b-black border-r-black border-r border-rounded rounded-md p-2">{typedText}</h1>
      </div>
      
      
  );
}