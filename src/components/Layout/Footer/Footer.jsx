import Logo from "@ui/Logo";
import "@styles/components/footer.scss";
import InstagramBtn from "@ui/InstagramBtn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_Logo">
          <Logo />
        </div>
        <div className="row row_footer_nav">
          <div className="col-3 col-info">
            <h3>Информация</h3>
            <ul>
              <li>
                Все права защищены Все права защищены © 2024 интернет-магазин
                ItMarket Кыргызстан.
              </li>
              <li>
                УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом
                реестре 158299
              </li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>
          <div className="col-3 col-menu">
            <h3>Меню</h3>
            <ul>
              <li>
                <Link to="/">Главная</Link>
                <span></span>
                <Link to="catalog">Каталог</Link>
                <span></span>
                <Link to="catalog">Товары в наличии</Link>
              </li>
              <li>
                <Link to="catalog">Скидки</Link>
                <span></span>
                <Link to="catalog">Популярное</Link>
              </li>
              <li>
                <Link to="delivery">Доставка</Link>
                <span></span>
                <Link to="services">Услуги</Link>
              </li>
              <li>
                <Link to="contacts">Контакты</Link>
                <span></span>
                <Link to="cart">Корзина</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 col-contacts">
            <h3>Контакты</h3>
            <ul>
              <li>г. Ош</li>
              <li>ТЦ &quot;Корона&quot;, 1 этаж </li>
              <li>+996 (779) 740-794</li>
            </ul>
          </div>
          <div className="col-3 col-social">
            <div className="social">
              <a
                href="https://www.instagram.com/itmarket_osh/"
                target="__blank"
              >
                <InstagramBtn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
