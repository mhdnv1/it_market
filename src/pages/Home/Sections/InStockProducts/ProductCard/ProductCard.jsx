import { BiCartAdd } from "react-icons/bi";
import PropTypes from "prop-types";
import "@styles/pages/Home/Sections/products.scss"

const ProductCard = ({ title, description, newPrice, image }) => {
  return (
    <div className="products-card card">
      <div className="row">
        <div className="col-6">
          <div className="card-img">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="col-6">
          <h4>{title}</h4>
          <p>{description}</p>
          <h3>
            <b>{newPrice} сом.</b>
          </h3>
          <button className="add-to-cart">
            <BiCartAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  newPrice: PropTypes.number.isRequired,
};

export default ProductCard;
