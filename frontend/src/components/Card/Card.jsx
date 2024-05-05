import PropTypes from "prop-types";
import "@styles/pages/Home/Sections/discounts.scss";
import { Link } from "react-router-dom";

const Card = ({ title, discount, description, price, image, id }) => {
  const summaryDiscount = price * (discount / 100);
  if (discount <= 0 || discount == undefined || discount == null) {
    discount = false;
  }

  return (
    <div className="discount-card card">
      <Link to={`/product/${id}`}>
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
      </Link>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  discount: PropTypes.number,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default Card;
