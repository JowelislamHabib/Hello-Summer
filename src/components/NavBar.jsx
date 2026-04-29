import { IoSunnyOutline, IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="w-full bg-neutral-100 shadow-sm">
      <div className=" container mx-auto flex items-center justify-between px-8 h-20">
        <div className="flex items-center gap-2">
          <IoSunnyOutline className="text-3xl text-orange-400 " />
          <span className="text-2xl font-bold text-gray-900 ">SOLIS</span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:opacity-70 transition-opacity"
          >
            Home
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:opacity-70 transition-opacity"
          >
            Products
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-11 h-11 rounded-full bg-orange-400 text-gray-900 transition-transform active:scale-95">
            <IoCartOutline className="text-2xl" />
          </button>

          <button className="px-8 py-2.5 text-sm font-bold rounded-full border-2 border-orange-400 text-gray-900 hover:bg-orange-400 hover:text-white transition-all">
            Login
          </button>

          <button className="px-8 py-2.5 text-sm font-bold rounded-full bg-orange-400 text-white shadow-sm hover:brightness-110 transition-all">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
