import "@styles/pages/Home/Sections/popular-products.scss";
import ProductCard from "../InStockProducts/ProductCard/ProductCard";
import { useGetProductsQuery } from "@store/product";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  return (
    <section className="popular-products">
      <div className="container">
        <div className="section-title">
          <h2>
            Популярное{" "}
            <Link>
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
                  <ProductCard
                    title={item.model}
                    description={item.description}
                    newPrice={item.price}
                    image={item.img}
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
