import "@styles/pages/Sections/popular-categories.scss";
import Laptop from "@images/laptoppng.parspng.com-4.png";
import Phone from "@images/kindpng_4225211.png";
import CategoryCard from "./CategoryCard/CategoryCard";

const PopularCategories = () => {
  const categories = [
    { title: "Ноутбуки", image: Laptop },
    { title: "Смартфоны", image: Phone },
  ];

  return (
    <section className="popular-categories">
      <div className="container">
        <div className="section-title">
          <h2>
            Категории
          </h2>
        </div>
        <div className="row">
          {categories.map((item, id) => (
            <div className="col-4" key={id}>
              <CategoryCard title={item.title} image={item.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
