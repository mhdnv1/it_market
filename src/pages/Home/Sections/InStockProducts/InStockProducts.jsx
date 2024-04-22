import { useGetProductsQuery } from "@store/product";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";
import "@styles/pages/Home/Sections/products.scss";

const InStockProducts = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  return (
    <section className="in-stock-products">
      <div className="container">
        <div className="section-title">
          <h2>
            Товары в наличии{" "}
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
              .filter((item) => item.type == "phone" || item.type == "laptop")
              .sort(() => Math.random() - 0.5)
              .slice(0, 12)
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

export default InStockProducts;
