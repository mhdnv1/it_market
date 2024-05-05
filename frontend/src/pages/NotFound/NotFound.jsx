import "@styles/pages/NotFound/not-found.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="not-found_main">
      <section className="not-found">
        <div className="container">
          <h1 className="notfound-text">Страница не найдена!</h1>
          <Link to="/" className="gotohome-button">
            <button>На главную</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
