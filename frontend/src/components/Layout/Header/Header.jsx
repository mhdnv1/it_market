import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <HeaderTop />
        <HeaderBottom />
      </header>
    </React.Fragment>
  );
};

export default Header;
