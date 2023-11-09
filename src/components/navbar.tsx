import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full bg-orange-100 p-3">
      <h1 className="font-bold text-2xl">
        S-<i>Blog</i>
      </h1>
    </div>
  );
};

export default Navbar;
