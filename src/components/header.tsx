import Image from "next/image";
import HeaderLogo from "../../public/headerLogo.svg";
import HeaderGplay from "../../public/headerGplay.svg";
import HeaderAppStore from "../../public/headerAppStore.svg";

// const HeroPhoneImage = HeroPhone
const HeaderLogoImage = HeaderLogo;
const HeaderGplayImage = HeaderGplay;
const HeaderAppStoreImage = HeaderAppStore;

const Header = () => {
  return (
    <div className="bg-white w-full">
      <header className="flex justify-evenly items-center w-full max-w-7xl mx-auto py-6 px-4 ">
        <span className="cursor-pointer flex  justify-center grow-3">
          <Image
            width={130}
            height={50}
            alt="NoMoo logo"
            src={HeaderLogoImage}
            className="cursor-pointer border-2"
          />
        </span>

        <nav className="hidden  md:flex gap-8 text-[15px] md:px-[5%]  lg:px-[10%] justify-evenly font-medium text-[#222] lg:grow-4">
          <span className="text-[#0AAD0B]  font-semibold relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-[#0AAD0B] after:rounded-full after:content-['']">
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
        <div className="flex items-center  gap-2 ">
          <Image
            width={40}
            height={40}
            alt="Google Play"
            src={HeaderGplayImage}
            className="cursor-pointer  p-1"
          />
          <Image
            width={40}
            height={40}
            alt="App Store"
            src={HeaderAppStoreImage}
            className="cursor-pointer  p-1"
          />
          <button className="ml-2 px-4 py-2 rounded-md bg-[#0AAD0B] text-white font-bold text-[15px] shadow hover:bg-[#09990a] transition">
            Join the waitlist
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
