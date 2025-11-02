
import { useEffect, useState } from "react";




export default function App() {
  const [show, setShow] = useState(false);
  

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 21500); // delay 0.5s
    return () => clearTimeout(timer);
  }, []);

  

return (
  <div>
    <div className="flex items-center justify-center">
      <a href='#'
        className={`px-6 py-2 bg-[#FF007F] text-white rounded-3xl mb-7 mt-3 transition-opacity duration-1000  shadow-gray-600 shadow-[4px_4px_10px_rgba(0,0,0,0.2)] hover:bg-teal-300 hover:border-white hover:text-black ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        Subscribe
      </a>
    </div>
    <div>
      <div>
        <div className="flex sm:justify-center justify-end -translate-x-1/100 gap-3 ">
          <img className="w-50 rounded-lg border-b border-r p-3 transform -rotate-7 translate-y-1 blur-sm hover:blur-none hover:-translate-y-2 " src="/Mia.jpg" alt="" />
          <img className="w-50 rounded-lg border-b border-r p-3 blur-sm hover:blur-none hover:-translate-y-2" src="/Mia7.jpg" alt="" />
          <img className="w-50 rounded-lg border-b border-r p-3 transform rotate-5 -translate-x-1 blur-sm hover:blur-none hover:-translate-y-2" src="/Mia6.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
);
}