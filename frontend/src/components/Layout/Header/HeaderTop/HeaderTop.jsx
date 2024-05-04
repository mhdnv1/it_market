import "@styles/components/header-top.scss";
import Logo from "@ui/Logo";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeaderTop = () => {

  const ref = useRef(null)
  console.log(ref);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        const headerHeight = 1.7 * ref.current.offsetHeight
        if (window.scrollY > headerHeight) {
          ref.current.classList.add("fixed")
        } else {
          ref.current.classList.remove("fixed")
        }
      }
    })
  }, [])

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
                <Link to="catalog">Каталог</Link>
                <Link to="contacts">Контакты</Link>
              </div>
            </nav>
          </div>
          <div className="col-4">
            <div className="contacts">
              <p>+996 779 740-794</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
