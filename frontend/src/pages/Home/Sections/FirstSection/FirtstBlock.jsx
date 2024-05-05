import "@styles/pages/Home/Sections/first-block.scss";
import FirstSectionImg from "@images/gaming-laptops-og-image.webp";
import { Link } from "react-router-dom";

const FirtstBlock = () => {
  return (
    <section className="first-block">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="furniture">
              <h1>Ноутбуки на любой вкус!</h1>
              <ul>
                <li>
                  <span>Игровые - мощные для игр</span>
                </li>
                <li>
                  <span>Ультрабуки - компактные для несложных задач </span>
                </li>
                <li>
                  <span>Бюджетные - для учебы и работы</span>
                </li>
              </ul>
              <Link to="/catalog">
                <button className="button__orange">Перейти в каталог</button>
              </Link>
            </div>
          </div>
          <div className="col-8">
            <img src={FirstSectionImg} alt="notebooks" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirtstBlock;
