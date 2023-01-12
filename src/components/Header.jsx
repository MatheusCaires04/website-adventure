import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaHiking, FaSearch } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const search = (e) => {
    e.preventDefault();

    setOpenSearch(!openSearch);
  };

  useEffect(() => {
    function colorHeader() {
      if (window.scrollY > 10) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    }

    window.addEventListener("scroll", colorHeader);
  }, []);

  const menu = (e) => {
    e.preventDefault();
    setMenuActive(!menuActive);
  };

  return (
    <header
      className={`${
        changeColor ? "bg-white shadow-box" : "bg-transparent"
      } h-20 fixed px-8 top-0 left-0 right-0 z-[999] duration-300`}
    >
      <nav className="h-full max-w-[1100px] mx-auto flex items-center justify-between text-black">
        <a href="#" className="flex items-center gap-1 text-xl font-bold">
          <FaHiking className="text-green text-2xl" /> Travel.
        </a>
        <ul className="hidden md:flex items-center gap-4 text-sm font-medium">
          <a href="#" className="hover:text-green duration-150">
            Home
          </a>
          <a href="#" className="hover:text-green duration-150">
            About
          </a>
          <a href="#" className="hover:text-green duration-150">
            Shop
          </a>
          <a href="#" className="hover:text-green duration-150">
            Packages
          </a>
          <a href="#" className="hover:text-green duration-150">
            Reviews
          </a>
          <a href="#" className="hover:text-green duration-150">
            Blogs
          </a>
          <li className="text-base hover:text-green duration-150 cursor-pointer">
            <FaShoppingCart />
          </li>
          <li
            onClick={search}
            className="text-base hover:text-green duration-150 cursor-pointer"
          >
            <FaSearch />
          </li>
        </ul>
        <div className="flex md:hidden items-center gap-3 text-lg font-bold">
          <div onClick={menu} className="cursor-pointer">
            <GiHamburgerMenu />
          </div>
          <div className="cursor-pointer">
            <FaShoppingCart />
          </div>
          <div onClick={search} className="cursor-pointer">
            <FaSearch />
          </div>
          <ul
            className={`${
              menuActive ? "left-0" : "left-[-100%]"
            } fixed top-0 w-[85%] h-screen bg-white flex flex-col items-center justify-center gap-4 text-2xl font-medium duration-200`}
          >
            <div
              onClick={menu}
              className="absolute top-4 right-4 text-5xl hover:text-green cursor-pointer"
            >
              <RiCloseFill />
            </div>
            <a href="#" className="hover:text-green duration-150">
              Home
            </a>
            <a href="#" className="hover:text-green duration-150">
              About
            </a>
            <a href="#" className="hover:text-green duration-150">
              Shop
            </a>
            <a href="#" className="hover:text-green duration-150">
              Packages
            </a>
            <a href="#" className="hover:text-green duration-150">
              Reviews
            </a>
            <a href="#" className="hover:text-green duration-150">
              Blogs
            </a>
          </ul>
        </div>
      </nav>
      <div
        className={`${
          openSearch ? "top-[0]" : "top-[-100%]"
        } w-full h-full fixed top-0 bg-black/90 flex items-center justify-center duration-300 z-[9999]`}
      >
        <div
          onClick={search}
          className="absolute top-4 right-4 text-[4rem] font-black text-white hover:text-green duration-150 cursor-pointer"
        >
          <RiCloseFill />
        </div>
        <div className="flex items-center min-w-[25rem] w-[45%] relative py-2 border-b-4 border-b-greyLight">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here..."
            className="w-full outline-none text-base text-white px-4 bg-transparent"
          />
          <FaSearch className="absolute right-0 text-xl text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
