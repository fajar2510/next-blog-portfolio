import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-3 mt-2">
      <h1 className="font-medium text-lg">Choose a gallery</h1>
      <div className="flex gap-5 flex-wrap">
        <Link
          href="/portfolio/illustrations"
          className="gallery bg-[url('/illustration.png')] bg-cover bg-center"
        >
          <span className="gallery-title">Illustrations</span>
        </Link>
        <Link
          href="/portfolio/websites"
          className="gallery bg-[url('/websites.jpg')] bg-cover bg-center"
        >
          <span className="gallery-title">Websites</span>
        </Link>
        <Link
          href="/portfolio/applications"
          className="gallery bg-[url('/apps.jpg')] bg-cover bg-center"
        >
          <span className="gallery-title">Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
