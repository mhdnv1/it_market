import PropTypes from "prop-types";
import "@styles/pages/Sections/discounts.scss";

const DiscountCard = ({
  title,
  discount,
  description,
  newPrice,
  oldPrice,
  image,
}) => {
  return (
    <div className="discount-card card">
      <div className="row">
        <div className="col-6">
          <div className="card-img">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="col-6">
          <span className="percent">{discount}%</span>
          <h4>{title}</h4>
          <p>{description}</p>
          <small>{oldPrice} сом.</small>
          <h3>
            <b>{newPrice} сом.</b>
          </h3>
        </div>
      </div>
    </div>
  );
};

DiscountCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  discount: PropTypes.number,
  description: PropTypes.string.isRequired,
  newPrice: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
};

export default DiscountCard;
