import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Logo = ({ onClick }) => {
  const styles = {
    border: "none",
    background: "transparent",
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const toTop = () => {
    if (window.scrollY > 0) {
      window.scroll({
        top: 0,
      });
    }
  };

  return (
    <button onClick={() => (handleClick(), toTop())} style={styles}>
      <Link to="/">
       <img style={{width:'100px' , height:'100px'}} src={logo} alt="logo" />
      </Link>
    </button>
  );
};

Logo.propTypes = {
  onClick: PropTypes.func,
};

export default Logo;
