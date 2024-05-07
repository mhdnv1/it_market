import "@styles/components/header-top.scss";
import Logo from "@ui/Logo";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderTop = () => {
  const ref = useRef(null);
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        const headerHeight = 1.7 * ref.current.offsetHeight;
        if (window.scrollY > headerHeight) {
          ref.current.classList.add("fixed");
        } else {
          ref.current.classList.remove("fixed");
        }
      }
    });
  }, []);

  return (
    <div className="header-top" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Logo />
          </div>
          <div className="col-4">
            <nav>
              <div className="links">
                <Link
                  to="/"
                  className={location.pathname == "/" ? "active_nav" : ""}
                >
                  Главная
                </Link>
                <Link
                  to="catalog"
                  className={location.pathname == "/catalog" ? "active_nav" : ""}
                >
                  Каталог
                </Link>
                <Link
                  to="discounts"
                  className={
                    location.pathname == "/discounts" ? "active_nav" : ""
                  }
                >
                  Скидки
                </Link>
                <Link
                  to="contacts"
                  className={
                    location.pathname == "/contacts" ? "active_nav" : ""
                  }
                >
                  Контакты
                </Link>
              </div>
            </nav>
          </div>
          <div className="col-4">
            <div className="contacts">
              <p><a href="tel:+996779740794">+996779740794</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
