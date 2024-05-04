import { toggleBurger } from "@store/burgerMenuSlice";
import "@styles/components/burger-menu.scss";
import Logo from "@ui/Logo";
import PropTypes from "prop-types";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const BurgerMenu = ({ items }) => {
  const dispatch = useDispatch();
  const burgerState = useSelector((state) => state.burger.isActive);
  const handleCloseBurger = () => {
    dispatch(toggleBurger(false));
  };

  return (
    <div className={burgerState ? "burger-menu burger_show" : "burger-menu burger_hide"}>
      <div className="blur" onClick={handleCloseBurger}></div>
      <div className={burgerState ? "menu-content burger_active" : "menu-content"}>
        <div className="menu-header">
          <Logo />
          <button onClick={handleCloseBurger}>
            <RxCross1 className="cross" />
          </button>
        </div>
        <ul className="bold-links">
          {items
            .filter((item) => item.type == "bold")
            .map((item, id) => (
              <li key={id}>
                <h2>
                  <Link to={item.link}>{item.value}</Link>
                </h2>
              </li>
            ))}
        </ul>
        <ul className="thin-links">
          {items
            .filter((item) => item.type == "thin")
            .map((item, id) => (
              <li key={id}>
                <Link to={item.link}>{item.value}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

BurgerMenu.propTypes = {
  items: PropTypes.array.isRequired,
};

export default BurgerMenu;
