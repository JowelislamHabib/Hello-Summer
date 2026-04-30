import Link from "next/link";
import {
  IoSunnyOutline,
  IoCartOutline,
  IoLogIn,
  IoPersonAdd,
} from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="bg-orange-50 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="  flex items-center justify-between px-8 h-20">
          <div className="flex items-center gap-2">
            <IoSunnyOutline className="text-3xl text-orange-400 " />
            <span className="text-2xl font-black text-gray-900 font-serif ">
              SOLIS
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <Link
              href={"/"}
              className="text-base font-medium text-gray-900 hover:opacity-70 transition-opacity"
            >
              Home
            </Link>
            <Link
              href={"/products"}
              className="text-base font-medium text-gray-900 hover:opacity-70 transition-opacity"
            >
              Products
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center w-11 h-11 rounded-full bg-orange-400 text-gray-900 transition-transform active:scale-95">
              <IoCartOutline className="text-2xl" />
            </button>

            <Link
              href={"/login"}
              className="flex justify-center items-center gap-2 px-8 py-2.5 rounded-xl border-2 border-amber-500 text-stone-900 font-bold hover:shadow-[0_8px_24px_rgba(245,158,11,0.4)] transition-all active:scale-95"
            >
              <IoLogIn size={24} />
              Login
            </Link>
            <Link
              href={"/register"}
              className="flex justify-center items-center gap-2 px-8 py-2.5 rounded-xl border-2 border-amber-500 bg-linear-to-r from-amber-500 to-orange-500 text-stone-900 font-bold hover:shadow-[0_8px_24px_rgba(245,158,11,0.4)] transition-all active:scale-95"
            >
              <IoPersonAdd />
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
