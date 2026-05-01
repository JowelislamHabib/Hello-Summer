"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/solis-logo.png";
import { IoCartOutline, IoLogIn, IoPersonAdd } from "react-icons/io5";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { ArrowRightFromSquare, Gear } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

const NavBar = () => {
  const pathname = usePathname();

  const userData = authClient.useSession();
  const user = userData.data?.user;

  console.log(user);

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
          <div className="flex items-center justify-center gap-4">
            <button className="flex items-center justify-center w-11 h-11 rounded-full bg-orange-500 text-stone-50 transition-transform active:scale-95 shadow-md cursor-pointer shrink-0">
              <IoCartOutline className="text-2xl" />
            </button>

            {user && (
              <Dropdown placement="bottom">
                <Dropdown.Trigger className="flex items-center justify-center rounded-full outline-none shrink-0">
                  <Avatar
                    size="lg"
                    className="border-2 border-orange-500 rounded-full object-cover cursor-pointer"
                  >
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>
                      {user?.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar.Fallback>
                  </Avatar>
                </Dropdown.Trigger>

                <Dropdown.Popover className="rounded-xl mt-2" align="center">
                  <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                      <Avatar size="md">
                        <Avatar.Image alt={user?.name} src={user?.image} />
                        <Avatar.Fallback>
                          {user?.name
                            ?.split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </Avatar.Fallback>
                      </Avatar>
                      <div className="flex flex-col gap-0">
                        <p className="text-sm leading-5 font-medium">
                          {user?.name}
                        </p>
                        <p className="text-xs leading-none text-muted">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Dropdown.Menu>
                    <Dropdown.Item id="profile">
                      <Label>Profile</Label>
                    </Dropdown.Item>

                    <Dropdown.Item id="settings">
                      <div className="flex w-full items-center justify-between gap-2">
                        <Label>Settings</Label>
                        <Gear className="size-3.5 text-muted" />
                      </div>
                    </Dropdown.Item>

                    <Dropdown.Item id="logout" variant="danger">
                      <div
                        onClick={async () => await authClient.signOut()}
                        className="flex w-full items-center justify-between gap-2"
                      >
                        <Label>Log Out</Label>
                        <ArrowRightFromSquare className="size-3.5 text-danger" />
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            )}

            {!user && (
              <div className="flex gap-4 justify-center items-center">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
