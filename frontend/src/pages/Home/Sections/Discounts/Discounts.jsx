import "@styles/pages/Home/Sections/discounts.scss";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useGetProductsQuery } from "@store/products";
import Card from "../../../../components/Card/Card";

const Discounts = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  return (
    <section className="discounts">
      <div className="container">
        <div className="section-title">
          <h2>
            Скидки <span>%</span>{" "}
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
              .filter((item) => item.discount > 0)
              .sort(() => Math.random() - 0.5)
              .slice(0, 4)
              .map((item) => (
                <div className="col-4" key={item.id}>
                  <Card
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    image={item.photo}
                    discount={item.discount}
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
