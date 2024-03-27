import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import { Fragment } from "react";

const Header = () => {
  return (
    <React.Fragment>
      <HeaderTop />
      <HeaderBottom />
    </React.Fragment>
  );
};

export default Header;
