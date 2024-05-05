import React, { useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import BackToTop from "@ui/BackToTop";
import BurgerMenu from "@components/BurgerMenu/BurgerMenu";

const Layout = () => {
  const location = useLocation();

  const MockItems = [
    { value: "Главная", link: "/", type: "bold" },
    { value: "Каталог", link: "/catalog", type: "bold" },
    { value: "Товары в наличии", link: "/catalog", type: "bold" },
    { value: "Скидки", link: "/discounts", type: "bold" },
    { value: "Популярное", link: "/catalog", type: "bold" },
    { value: "Контакты", link: "/contacts", type: "thin" },
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
      <div className="content">
        <Outlet />
        <BurgerMenu items={MockItems} />
        <BackToTop />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
