import React from "react";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="btn border-none rounded-lg bg-[#5A6E6F] text-white hover:text-[#BFCDCB] hover:bg-[#2C3842]">
        {text}
      </button>
    </Link>
  );
};

export default Button;
