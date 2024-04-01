import "@styles/pages/Sections/discounts.scss";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useGetProductsQuery } from "@store/product";
import DiscountCard from "./DiscountCard/DiscountCard";

const Discounts = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  return (
    <section className="discounts">
      <div className="container">
        <div className="section-title">
          <h2>
            Скидки <span>%</span>{" "}
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
              .filter((item) => item.type == "laptop")
              .slice(0, 4)
              .map((item) => (
                <div className="col-4" key={item.id}>
                  <DiscountCard
                    title={item.model}
                    description={item.description}
                    newPrice={item.price}
                    image={item.img}
                    discount="12"
                    oldPrice="10000"
                  />
                </div>
              ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Discounts;
