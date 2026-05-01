"use client"; // Required to use usePathname

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/solis-logo.png";
import { IoCartOutline, IoLogIn, IoPersonAdd } from "react-icons/io5";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
const NavBar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Profile", href: "/my-profile" },
  ];

  return (
    <div className="bg-orange-50 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 md:px-0 h-20">
          <div className="flex items-center gap-2">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Solis Logo"
                width={120}
                height={40}
                className="w-auto h-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center gap-2 text-base font-bold transition-all duration-300 uppercase ${
                    isActive
                      ? "text-orange-600"
                      : "text-stone-900 hover:text-orange-500"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-orange-600 transition-all duration-300 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  />
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center w-11 h-11 rounded-full bg-orange-500 text-stone-50 transition-transform active:scale-95 shadow-md cursor-pointer">
              <IoCartOutline className="text-2xl" />
            </button>

            <div>
              <Dropdown>
                <Dropdown.Trigger className="rounded-xl">
                  <Avatar>
                    <Avatar.Image
                      alt="John Doe"
                      src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                    />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                  </Avatar>
                </Dropdown.Trigger>
                <Dropdown.Popover className="rounded-xl">
                  <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                      <Avatar size="sm">
                        <Avatar.Image
                          alt="John Doe"
                          src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                        />
                        <Avatar.Fallback>JD</Avatar.Fallback>
                      </Avatar>
                      <div className="flex flex-col gap-0">
                        <p className="text-sm leading-5 font-medium">
                          Jane Doe
                        </p>
                        <p className="text-xs leading-none text-muted">
                          jane@example.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <Dropdown.Menu>
                    <Dropdown.Item id="profile" textValue="Profile">
                      <Label>Profile</Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="settings" textValue="Settings">
                      <div className="flex w-full items-center justify-between gap-2">
                        <Label>Settings</Label>
                        <Gear className="size-3.5 text-muted" />
                      </div>
                    </Dropdown.Item>

                    <Dropdown.Item
                      id="logout"
                      textValue="Logout"
                      variant="danger"
                    >
                      <div className="flex w-full items-center justify-between gap-2">
                        <Label>Log Out</Label>
                        <ArrowRightFromSquare className="size-3.5 text-danger" />
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </div>

            <Link
              href={"/login"}
              className="flex justify-center items-center gap-2 px-8 py-2.5 rounded-full border-2 border-orange-500 text-stone-900 font-bold hover:shadow-[0_8px_24px_rgba(245,158,11,0.2)] transition-all active:scale-95 hidden md:flex"
            >
              <IoLogIn size={24} />
              Login
            </Link>
            <Link
              href={"/register"}
              className="flex justify-center items-center gap-2 px-8 py-2.5 rounded-full border-2 border-orange-500 bg-orange-500 text-stone-50 font-bold hover:shadow-[0_8px_24px_rgba(245,158,11,0.3)] transition-all active:scale-95 hidden md:flex"
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
