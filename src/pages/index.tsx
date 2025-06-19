import Image from "next/image";
import HeroPhone from "../../public/heroSection/heroPhone.svg";
import HeaderLogo from "../../public/headerLogo.svg";
import HeaderGplay from "../../public/headerGplay.svg";
import HeaderAppStore from "../../public/headerAppStore.svg";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const HeroPhoneImage = HeroPhone;
const HeaderLogoImage = HeaderLogo;
const HeaderGplayImage = HeaderGplay;
const HeaderAppStoreImage = HeaderAppStore;

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} bg-white p-4`}
    >
      <div className="flex justify-between w-full">
        <Image
          width={130}
          height={50}
          alt="plans"
          src={HeaderLogoImage}
          className="cursor-pointer"
        />
        <div className="flex py-6">
          <Image
            width={50}
            height={50}
            alt="plans"
            src={HeaderGplayImage}
            className="cursor-pointer mr-2"
          />
          <Image
            width={50}
            height={50}
            alt="plans"
            src={HeaderAppStoreImage}
            className="cursor-pointer mr-2"
          />
          <div className="rounded-md flex items-center justify-center px-3 text-white  font-bold bg-[#0AAD0B]">
            <p>Join the waitlist</p>
          </div>
        </div>
      </div>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div></div>
        <div className="flex w-full items-center justify-center">
          <Image
            width={600}
            alt="plans"
            src={HeroPhoneImage}
            className="cursor-pointer mt-4"
          />
        </div>
      </main>
    </div>
  );
}
