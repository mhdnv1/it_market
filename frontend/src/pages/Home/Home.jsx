// Главная страница
import Discounts from "./Sections/Discounts/Discounts";
import FirtstBlock from "./Sections/FirstSection/FirtstBlock";
import InStockProducts from "./Sections/InStockProducts/InStockProducts";
import PopularCategories from "./Sections/PopularCategories/PopularCategories";
import "@styles/pages/Home/home.scss"
import PopularProducts from "./Sections/PopularProducts/PopularProducts";

const Home = () => {
  return (
    <main>
      <div className="home">
        <FirtstBlock />
        <PopularCategories/> 
        <Discounts/>
        <InStockProducts/>
        <PopularProducts title="Популярное"/>
      </div>
    </main>
  );
};

export default Home;
