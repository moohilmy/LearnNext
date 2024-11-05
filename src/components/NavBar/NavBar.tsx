import Link from "next/link";
import React from "react";
import { Links } from "./data";
import Button from "../../elements/Button/Button";
import Logo from "@/elements/Logo/Logo";


const NavBar = () => {
  return (
    <div className=" flex justify-between items-center h-28 ">
        <Logo/> 
      <div className=" flex gap-2 items-center">
        {Links.map((link) => (
          <Link key={link.id} href={link.url} className="  transition-all  opacity-65 hover:opacity-100">
            {link.title}
          </Link>
        ))}
        <Button/>
      </div>
    </div>
  );
};

export default NavBar;
