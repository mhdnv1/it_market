import "@styles/components/header-top.scss";
import Logo from "@ui/Logo";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Logo />
          </div>
          <div className="col-4">
            <nav>
              <div className="links">
                <Link>Каталог</Link>
                <Link>Доставка</Link>
                <Link>Условия</Link>
                <Link>Контакты</Link>
              </div>
            </nav>
          </div>
          <div className="col-4">
            <div className="contacts">
              <p>+ 375 736 463 64 72 <span>/</span> + 375 736 463 64 72</p>
              <Link>Заказать звонок</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
