// Каталог
import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "@store/product";
import "@styles/pages/Catalog/catalog.scss";
import "@styles/pages/Home/Sections/products.scss";
import Card from "@components/Card/Card";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Catalog = ({ categories, categoriesIsLoading, categoriesError }) => {
  const { data, isLoading, error } = useGetProductsQuery();
  console.log(categories);
  useEffect(() => {
    console.log(categoriesIsLoading);
  }, [categoriesIsLoading]);
  const { category } = useParams();
  return (
    <main>
      <section className="catalog">
        <div className="catalog">
          <div className="container">
            <h1>Каталог</h1>
            <div className="category_select">
              {categoriesError ? (
                <h2>Ничего не найдено.</h2>
              ) : categoriesIsLoading ? (
                <>Загрузка...</>
              ) : (
                categories.map((item) => (
                  <Link key={item.id} to={item.id}>
                    <button>{item.name}</button>
                  </Link>
                ))
              )}
            </div>
            <div className="row">
              {error ? (
                <h2>Ничего не найдено.</h2>
              ) : isLoading ? (
                <>Загрузка...</>
              ) : category ? (
                data
                  .filter((item) => item.category == category)
                  .map((item) => (
                    <div className="col-4" key={item.id}>
                      <Card
                        title={item.title}
                        description={item.description}
                        discount={item.discount}
                        price={item.price}
                        image={item.photo}
                      />
                    </div>
                  ))
              ) : (
                data.map((item) => (
                  <div className="col-4" key={item.id}>
                    <Card
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
