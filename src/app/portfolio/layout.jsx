import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col mx-[7rem] my-12">
      <h1 className="text-6xl font-bold ">Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
