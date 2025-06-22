import Image from "next/image";
import { useState } from "react";
import HeaderLogo from "../../public/headerLogo.svg";
import HeaderGplay from "../../public/headerGplay.svg";
import HeaderAppStore from "../../public/headerAppStore.svg";

const HeaderLogoImage = HeaderLogo;
const HeaderGplayImage = HeaderGplay;
const HeaderAppStoreImage = HeaderAppStore;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full relative">
      <header className="flex justify-between items-center w-full max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <span className="cursor-pointer">
          <Image
            width={120}
            height={40}
            alt="NoMoo logo"
            src={HeaderLogoImage}
            className="cursor-pointer border-2"
          />
        </span>

        {/* Desktop Nav - DO NOT MODIFY */}
        <nav className="hidden lg:flex gap-8 text-[15px] font-medium text-[#222]">
          <span className="text-[#0AAD0B] font-semibold relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-[#0AAD0B] after:rounded-full after:content-['']">
            Home
          </span>
          <span className="hover:text-[#0AAD0B] cursor-pointer">
            How it works?
          </span>
          <span className="hover:text-[#0AAD0B] cursor-pointer">
            Key Features
          </span>
          <span className="hover:text-[#0AAD0B] cursor-pointer">FAQs</span>
        </nav>

        {/* CTA Buttons - DO NOT MODIFY */}
        <div className="hidden lg:flex items-center gap-2">
          <Image
            width={36}
            height={36}
            alt="Google Play"
            src={HeaderGplayImage}
            className="cursor-pointer"
          />
          <Image
            width={36}
            height={36}
            alt="App Store"
            src={HeaderAppStoreImage}
            className="cursor-pointer"
          />
          <button className="ml-2 px-4 py-2 rounded-md bg-[#0AAD0B] text-white font-bold text-[15px] shadow hover:bg-[#09990a] transition">
            Join the waitlist
          </button>
        </div>

        {/* Hamburger - visible from tablet and below */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 bg-[#0AAD0B] rounded-md p-2 z-50"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white mt-1 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white mt-1 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white overflow-hidden border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col py-4 px-6 space-y-4 text-[#222] font-medium">
          <span className="text-[#0AAD0B] font-semibold border-b border-gray-100 pb-2">
            Home
          </span>
          <span className="hover:text-[#0AAD0B] cursor-pointer border-b border-gray-100 pb-2">
            How it works?
          </span>
          <span className="hover:text-[#0AAD0B] cursor-pointer border-b border-gray-100 pb-2">
            Key Features
          </span>
          <span className="hover:text-[#0AAD0B] cursor-pointer border-b border-gray-100 pb-2">
            FAQs
          </span>

          {/* Store Buttons */}
          <div className="flex gap-3 pt-2">
            <Image
              width={36}
              height={36}
              alt="Google Play"
              src={HeaderGplayImage}
              className="cursor-pointer"
            />
            <Image
              width={36}
              height={36}
              alt="App Store"
              src={HeaderAppStoreImage}
              className="cursor-pointer"
            />
          </div>

          {/* CTA Button */}
          <button className="w-full px-4 py-3 rounded-md bg-[#0AAD0B] text-white font-bold text-[15px] shadow hover:bg-[#09990a] transition mt-4">
            Join the waitlist
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
