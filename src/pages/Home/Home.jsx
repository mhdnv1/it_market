// Главная страница
import React from "react";
import { useGetProductsQuery } from "../../store/product";
import FirtstBlock from "./Sections/FirstSection/FirtstBlock";

const Home = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  return (
    <main>
      <div className="home">
        <FirtstBlock />
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
    </main>
  );
};

export default Home;
