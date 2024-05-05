import PopularProducts from "@pages/Home/Sections/PopularProducts/PopularProducts";
import { useGetProductQuery } from "@store/products";
import "@styles/pages/Product/product.scss";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductQuery(id);
  console.log(data);
  console.log(id);

  return (
    <main>
      <section className="section-details">
        <div className="container">
          {error ? (
            <h1>Произошла ошибка, повторите запрос позднее</h1>
          ) : isLoading ? (
            <h1>Загрузка...</h1>
          ) : (
            <div className="row">
              <div className="col-6">
                <div className="product-image">
                  <img src={data.photo} alt={data.title} />
                </div>
              </div>
              <div className="col-6">
                <div className="details">
                  <div className="details-title">
                    <h2>{data.title}</h2>
                    <small>В наличии</small>
                    <div className="details-description">
                      {data.description.split("/").map((item, id) => (
                        <p key={id}>{item.trim()}</p>
                      ))}
                    </div>
                  </div>
                  <div className="details-price">
                    {data.discount > 0 && (
                      <div className="details-discount">
                        <b>{data.discount}%</b>
                        <p>{data.price} сом.</p>
                      </div>
                    )}
                    {data.discount > 0 ? (
                      <h2>
                        {data.price - data.price * (data.discount / 100)} сом.
                      </h2>
                    ) : (
                      <h2>{data.price} сом.</h2>
                    )}
                    <Link to="/contacts">
                      <button>Связаться с нами</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
          <div className="recomendations">
            <PopularProducts title="Вам также может понравиться: " />
          </div>
    </main>
  );
};

export default Product;
