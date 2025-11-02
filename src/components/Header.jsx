import "boxicons/css/boxicons.min.css";


const Header = () => {
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };
  return (
    <header className="flex justify-between items-center lg:px-10">
      <h1 className="">
       <img className="w-50" src="/7.svg" alt="" />
      </h1>
      {/* Nav */}
      <nav className="hidden md:flex item-center gap-12">
        <a
          className="text-base tracking-wider transition-colors hover:text-[#FF007F] z-50"
          href="#"
        >
          About us
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text-[#FF007F] z-50"
          href="#"
        >
          Contact us
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text-[#FF007F] z-50"
          href="#"
        >
          Merch
        </a>
      </nav>

      <div className="border border-gray-400 border-radius-50 p-1 rounded-full  shadow-gray-600 shadow-[4px_4px_10px_rgba(0,0,0,0.2)] ">
          <a href="#">
            <img className="w-7" src="/support.svg" alt="" />
          </a>
      </div>

      {/* mobile */}

      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i class="bx bx-menu-alt-right"></i>
      </button>

      {/* Mobile Menu */}

      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md"
      >
        <nav className="flex flex-col gap-6 items-center ">
          <a
            className="text-base tracking-wider transition-colors hover:text-[#e99b63] z-50"
            href="#"
          >
            About us
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-[#e99b63] z-50"
            href="#"
          >
            Contact us
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-[#e99b63] z-50"
            href="#"
          >
            Merch
          </a>
        </nav>
      </div>
      </header>
      
  );
};

export default Header;
