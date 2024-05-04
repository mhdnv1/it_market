import PropTypes from "prop-types";
import "@styles/pages/Home/Sections/discounts.scss";

const Card = ({ title, discount, description, price, image }) => {
  const summaryDiscount = price * (discount / 100);
  if (discount <= 0) {
    discount = false;
  }
  return (
    <div className="discount-card card">
      <div className="row">
        <div className="col-6">
          <div className="card-img">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="col-6">
          <span className="percent">{discount && discount + "%"}</span>
          <h4>{title}</h4>
          <p>{description}</p>
          <small>{discount && price + " " + "сом."}</small>
          <h3>
            {discount ? (
              <b>{price - summaryDiscount} сом.</b>
            ) : (
              <b>{price} сом.</b>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  discount: PropTypes.number,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
