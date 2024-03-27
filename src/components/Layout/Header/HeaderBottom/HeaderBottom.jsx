import "@styles/components/header-bottom.scss";
import BurgerButton from "@ui/BurgerButton";
import CartIcon from "@ui/CartIcon";
import ProfileIcon from "@ui/ProfileIcon";
import SearchIcon from "@ui/SearchIcon";
import StarIcon from "@ui/StarIcon";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <BurgerButton />
            <div className="search-bar">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Что желаете найти?"
              />
              <SearchIcon/>
            </div>
          </div>
          <div className="col-6">
            <Link><StarIcon/></Link>
            <Link><CartIcon/></Link>
            <Link><ProfileIcon/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
