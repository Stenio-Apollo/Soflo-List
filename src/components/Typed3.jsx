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
  const typedText = useTypewriter(
    "Thhat sounds awesome how do I gain access to that?",
    80,
    15955
  );

  return (
    <div className=" flex justify-start items-center p-7 mt-3">
      <h1 className="text-cyan-700 border-b border-b-black border-r-black border-r border-rounded rounded-md p-2">
        {typedText}
      </h1>
    </div>
  );
}
