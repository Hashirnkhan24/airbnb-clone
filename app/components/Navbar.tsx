import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.webp";
import UserNav from "./UserNav";
import { SearchModalCompnent } from "./SearchComponent";

function Navbar() {
  return (
    <>
      <nav className="w-full border-b">
        <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
          <Link href="/">
            <Image
              src={DesktopLogo}
              alt="AirBnB Clone"
              className="w-32 hidden lg:block"
            />
            <Image
              src={MobileLogo}
              alt="AirBnB Clone"
              className="w-12 block lg:hidden"
            />
          </Link>
          <SearchModalCompnent />

          <UserNav />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
