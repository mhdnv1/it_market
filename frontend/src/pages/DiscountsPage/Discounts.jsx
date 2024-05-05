import { Link, useParams } from "react-router-dom";
import { useGetCategoriesQuery, useGetProductsQuery } from "@store/products";
import "@styles/pages/Catalog/catalog.scss";
import "@styles/pages/Home/Sections/products.scss";
import Card from "@components/Card/Card";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Loader from "@components/Loader/Loader";

const Discounts = () => {
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
  const search = useSelector((state) => state.search.search);
  return (
    <main>
      <section className="discounts">
        <div className="catalog">
          <div className="container">
            <h1>
              Скидки! <span className="percent">%</span>
            </h1>
            <h3 className="categories_title">Категории:</h3>
            <div className="category_select">
              <Link to="/discounts/">
                <button>Все скидки</button>
              </Link>
              {categoriesError ? (
                ""
              ) : categoriesIsLoading ? (
                <Loader />
              ) : (
                categories.map((item) => (
                  <Link key={item.id} to={`/discounts/${item.id}`}>
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
                <Loader />
              ) : category ? (
                products
                  .filter(
                    (item) =>
                      item.discount &
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
                  .filter(
                    (item) =>
                      item.discount &
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

Discounts.propTypes = {
  categories: PropTypes.array,
  categoriesIsLoading: PropTypes.bool,
  categoriesError: PropTypes.any,
};

export default Discounts;
