"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Logo";

const navbarLinks = [
  {
    url: "/",
    title: "Beranda",
  },
  {
    url: "/lokasi",
    title: "Lokasi",
  },
  {
    url: "/galeri",
    title: "Galeri",
  },
  {
    url: "/berita",
    title: "Berita",
  },
  {
    url: "/about-us",
    title: "Tentang Kami",
  },
];

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const onMenuClickHandler = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className="bg-white h-16 shadow-lg absolute right-0 top-0 lg:top-14 left-0">
      <div className="flex items-center justify-between h-full px-5 container m-auto">
        <h1 className="font-bold text-xl">
          <Logo size={50} />
        </h1>
        <div
          className="block lg:hidden cursor-pointer"
          onClick={onMenuClickHandler}
        >
          {isMenuClicked ? <FaTimes size={27} /> : <FaBars size={27} />}
        </div>

        <div
          className={`absolute lg:hidden select-none w-64 bg-gray-200 border-gray-200 p-5 top-16 h-screen duration-300 ease-in-out transition-all ${
            isMenuClicked ? "right-0" : "-right-64"
          }`}
        >
          <ol className="flex flex-col gap-2 items-center">
            {navbarLinks.map((navbarLink, index) => (
              <li
                key={index}
                className="bg-slate-300 rounded-md w-full px-5 py-2"
              >
                <a href={navbarLink.url}>{navbarLink.title}</a>
              </li>
            ))}
          </ol>
        </div>
        <ol className="hidden lg:flex gap-5 text-md">
          {navbarLinks.map((navbarLink, index) => (
            <li key={index}>
              <a href={navbarLink.url}>{navbarLink.title}</a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
