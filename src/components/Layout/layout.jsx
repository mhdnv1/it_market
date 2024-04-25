import React, { useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import BackToTop from "@ui/BackToTop";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.key]);

  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <BackToTop />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
