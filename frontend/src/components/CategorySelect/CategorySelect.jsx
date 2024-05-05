import { useGetCategoriesQuery } from "@store/products";
import { useState } from "react";
import "@styles/components/category-select.scss";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setSearch } from "@store/searchSlice";

const CategorySelect = ({ path }) => {
  const {
    data: categories,
    isLoading: categoriesIsLoading,
    error: categoriesError,
  } = useGetCategoriesQuery();

  const location = useLocation();
  const dispatch = useDispatch();
  const [activeCat, setActiveCat] = useState(location.pathname);

  const handleResetSearch = () => {
    dispatch(setSearch(""));
  };

  return (
    <>
      <h3 className="categories_title">Категории:</h3>
      <div className="category_select">
        <Link
          to={`/${path}`}
          onClick={() => (setActiveCat(`/${path}`), handleResetSearch())}
          className={activeCat == `/${path}` ? "active_cat" : ""}
        >
          <button>Все</button>
        </Link>
        {categoriesError
          ? ""
          : categoriesIsLoading
          ? ""
          : categories.map((item) => (
              <Link
                key={item.id}
                to={`/${path}/${item.id}`}
                onClick={() => (
                  setActiveCat(`/${path}/${item.id}`), handleResetSearch()
                )}
                className={
                  activeCat == `/${path}/${item.id}` ? "active_cat" : ""
                }
              >
                <button>{item.name}</button>
              </Link>
            ))}
      </div>
    </>
  );
};

CategorySelect.propTypes = {
  path: PropTypes.string.isRequired,
};

export default CategorySelect;
