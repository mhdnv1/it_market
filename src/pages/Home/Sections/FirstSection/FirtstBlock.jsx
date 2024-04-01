import "@styles/pages/Sections/first-block.scss";
import FirstSectionImg from "@images/gaming-laptops-og-image.webp";

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
              <button className="button__orange">Перейти в каталог</button>
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
