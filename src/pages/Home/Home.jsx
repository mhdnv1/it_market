// Главная страница
import React from "react";
import { useGetProductsQuery } from "../../store/product";

const Home = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  console.log(data);
  return (
    <div className="home">
      <h2>Home</h2>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
