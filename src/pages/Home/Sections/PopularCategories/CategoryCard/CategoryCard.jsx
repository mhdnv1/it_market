import PropTypes from "prop-types";
import "@styles/pages/Sections/popular-categories.scss";


const CategoryCard = ({ title, image }) => {
  return (
    <div className="category-card card">
      <div className="row">
        <div className="col-6">
          <div className="card-img">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="col-6">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default CategoryCard;
