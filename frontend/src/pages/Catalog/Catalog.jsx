import { Link, useLocation, useParams } from "react-router-dom";
import { useGetCategoriesQuery, useGetProductsQuery } from "@store/products";
import "@styles/pages/Catalog/catalog.scss";
import "@styles/pages/Home/Sections/products.scss";
import Card from "@components/Card/Card";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useState } from "react";

const Catalog = () => {
  const {
    data: products,
    isLoading: productsIsLoading,
    error: productsError,
  } = useGetProductsQuery();
  const {
    data: categories,
    isLoading: categoriesIsLoading,
    error: categoriesError,
  } = useGetCategoriesQuery();
  const { category } = useParams();
  const location = useLocation()
  const [activeCat, setActiveCat] = useState(location.pathname);
  const search = useSelector((state) => state.search.search);
  return (
    <main>
      <section className="catalog">
        <div className="catalog">
          <div className="container">
            <h1>Каталог</h1>
            <h3 className="categories_title">Категории:</h3>
            <div className="category_select">
              <Link
                to="/catalog/"
                onClick={() => setActiveCat("/catalog/")}
                className={activeCat == /catalog/ ? "active_cat" : ""}
              >
                <button>Все</button>
              </Link>
              {categoriesError ? (
                ""
              ) : categoriesIsLoading ? (
                <>Загрузка...</>
              ) : (
                categories.map((item) => (
                  <Link
                    key={item.id}
                    to={`/catalog/${item.id}`}
                    onClick={() => setActiveCat(`/catalog/${item.id}`)}
                    className={activeCat == `/catalog/${item.id}` ? "active_cat" : ""}
                  >
                    <button>{item.name}</button>
                  </Link>
                ))
              )}
            </div>
            {search && (
              <h2 className="search_result">Результаты по поиску: {search}</h2>
            )}
            <div className="row">
              {productsError ? (
                <h2>Ничего не найдено.</h2>
              ) : productsIsLoading ? (
                <>Загрузка...</>
              ) : category ? (
                products
                  .filter(
                    (item) =>
                      (item.category == category) &
                      item.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((item) => (
                    <div className="col-4" key={item.id}>
                      <Card
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        discount={item.discount}
                        price={item.price}
                        image={item.photo}
                      />
                    </div>
                  ))
              ) : (
                products
                  .filter((item) =>
                    item.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((item) => (
                    <div className="col-4" key={item.id}>
                      <Card
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        discount={item.discount}
                        price={item.price}
                        image={item.photo}
                      />
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

Catalog.propTypes = {
  categories: PropTypes.array,
  categoriesIsLoading: PropTypes.bool,
  categoriesError: PropTypes.any,
};

export default Catalog;
