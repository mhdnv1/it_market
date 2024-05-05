import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "@store/products";
import "@styles/pages/Catalog/catalog.scss";
import "@styles/pages/Home/Sections/products.scss";
import Card from "@components/Card/Card";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Loader from "@components/Loader/Loader";
import CategorySelect from "@components/CategorySelect/CategorySelect";

const Catalog = () => {
  const {
    data: products,
    isLoading: productsIsLoading,
    error: productsError,
  } = useGetProductsQuery();

  const { category } = useParams();
  const search = useSelector((state) => state.search.search);
  console.log(products);
  return (
    <main>
      <section className="catalog">
        <div className="catalog">
          <div className="container">
            <h1>Каталог</h1>
            <CategorySelect path="catalog"/>
            {search && (
              <h2 className="search_result">Результаты по поиску: {search}</h2>
            )}
            <div className="row">
              {productsError ? (
                <h2>Ничего не найдено.</h2>
              ) : productsIsLoading ? (
                <Loader />
              ) : category ? (
                [...products]
                  .reverse()
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
                [...products]
                  .reverse()
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
