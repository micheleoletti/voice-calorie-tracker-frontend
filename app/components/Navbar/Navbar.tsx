import React from "react";
import Logo from "./Logo";
import Datepicker from "./Datepicker";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-5">
      <div className="flex items-center">
        <Logo />
      </div>
      <Datepicker />
      <button className="flex items-center">
        <Image
          src="/avatar.jpeg"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
      </button>
    </nav>
  );
};

export default Navbar;
