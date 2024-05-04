import PropTypes from "prop-types";
import "@styles/pages/Home/Sections/popular-categories.scss";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ title, image, category }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`catalog/${category}`);
  };
  return (
    <div className="category-card card" onClick={handleNavigate}>
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
  category: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CategoryCard;
