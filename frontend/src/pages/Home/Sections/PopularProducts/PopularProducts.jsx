import "@styles/pages/Home/Sections/popular-products.scss";
import { useGetProductsQuery } from "@store/products";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Card from "../../../../components/Card/Card";

const PopularProducts = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  return (
    <section className="popular-products">
      <div className="container">
        <div className="section-title">
          <h2>
            Популярное{" "}
            <Link to="catalog">
              Все товары в категории <HiOutlineArrowLongRight />
            </Link>
          </h2>
        </div>
        <div className="row">
          {error ? (
            <h2>Ничего не найдено.</h2>
          ) : isLoading ? (
            <>Загрузка...</>
          ) : (
            [...data]
              .sort(() => Math.random() - 0.5)
              .slice(0, 4)
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
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
