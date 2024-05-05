import "@styles/pages/Home/Sections/popular-categories.scss";
import CategoryCard from "./CategoryCard/CategoryCard";
import { useGetCategoriesQuery } from "@store/products";

const PopularCategories = () => {
  const { data, isLoading, error } = useGetCategoriesQuery();

  return (
    <section className="popular-categories">
      <div className="container">
        <div className="section-title">
          <h2>Категории</h2>
        </div>
        <div className="row">
          {error ? (
            <h2>Ничего не найдено.</h2>
          ) : isLoading ? (
            <>Загрузка...</>
          ) : (
            data.map((item, i) => (
              <div className="col-4" key={i}>
                <CategoryCard
                  title={item.name}
                  image={item.image}
                  category={item.id}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
