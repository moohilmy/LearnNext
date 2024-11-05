import Image from "next/image";
import React from "react";
import { icons } from "./data";

const Footer = () => {
  return (
    <div className="h-[50px] text-[14px] flex items-center justify-between">
      <div>&copy; 2024. All rights reserved. </div>
      <div className="flex items-center gap-2">
        {icons.map((icon) => (
          <Image
            key={icon.id}
            alt={icon.alt}
            src={icon.src}
            width={20}
            height={20}
            className=" transition-all duration-500 opacity-65 cursor-pointer hover:opacity-100"
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
