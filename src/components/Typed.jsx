import React, { useState, useEffect } from "react";

function useTypewriter(text, speed = 177) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

export default function Typed() {
  const typedText = useTypewriter("Whhat exactly does Soflo List do?", 80);

  return (
   <div className="flex justify-left item-left p-7 ">
          <h1 className="text-cyan-700 border-b border-b-black border-r-black border-r border-rounded rounded-md p-2">{typedText}</h1>
      </div>
      
      
  );
}