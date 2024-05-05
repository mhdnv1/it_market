import "@styles/components/header-bottom.scss";
import BurgerButton from "@ui/BurgerButton";
import SearchIcon from "@ui/SearchIcon";
import { useDispatch } from "react-redux";
import { toggleBurger } from "@store/burgerMenuSlice";
import { setSearch } from "@store/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const HeaderBottom = () => {
  const dispatch = useDispatch();
  const handleShowBurger = () => {
    dispatch(toggleBurger(true));
  };

  const navigate = useNavigate();

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
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
                onKeyDown={(e) => {
                  e.key === "Enter" && navigate("catalog");
                }}
                onChange={handleSearch}
              />
              <Link to="catalog">
                <SearchIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
