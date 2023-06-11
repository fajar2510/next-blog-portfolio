import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div class=" flex flex-col gap-4 mt-8 pb-10 bg-white  pt-8  dark:bg-dark dark:text-textLight border-t dark:border-slate-700  items-center justify-center">
      <div class="grid grid-flow-col gap-4">
        <Image src="/1.png" width={20} height={20} alt="Facebook" />
        <Image src="/2.png" width={20} height={20} alt="Instagram" />
        <Image src="/3.png" width={20} height={20} alt="Twitter" />
        <Image src="/4.png" width={20} height={20} alt="Youtube" />
      </div>

      <div>
        <p className=" font-normal text-sm dark:text-white">
          Copyright © 2023 - All right reserved by Fajar Abdurrohman
        </p>
      </div>
    </div>
  );
};

export default Footer;
