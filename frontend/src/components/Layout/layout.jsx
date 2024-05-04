import React, { useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import BackToTop from "@ui/BackToTop";
import BurgerMenu from "@components/BurgerMenu/BurgerMenu";
import { useSelector } from "react-redux";

const Layout = () => {
  const location = useLocation();
  const burgerState = useSelector((state) => state.burger.isActive);
  console.log(burgerState);

  const MockItems = [
    { value: "Каталог", link: "catalog", type: "bold" },
    { value: "Товары в наличии", link: "catalog", type: "bold" },
    { value: "Скидки", link: "catalog", type: "bold" },
    { value: "Популярное", link: "catalog", type: "bold" },
    { value: "Контакты", link: "contacts", type: "thin" },
  ];

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
      <BurgerMenu items={MockItems} />
      <BackToTop />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
