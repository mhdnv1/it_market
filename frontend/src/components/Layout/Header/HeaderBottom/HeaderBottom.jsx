import "@styles/components/header-bottom.scss";
import BurgerButton from "@ui/BurgerButton";
import SearchIcon from "@ui/SearchIcon";
import { useDispatch } from "react-redux";
import { toggleBurger } from "@store/burgerMenuSlice";

const HeaderBottom = () => {
  const dispatch = useDispatch();
  const handleShowBurger = () => {
    dispatch(toggleBurger(true));
  };

  return (
    <div className="header-bottom">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <button className="burger_button" onClick={handleShowBurger}>
              <BurgerButton />
            </button>
          </div>
          <div className="col-6">
            <div className="search-bar">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Что желаете найти?"
              />
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
