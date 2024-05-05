import Image from "@images/image_62-transformed.png";
import "@styles/pages/Contacts/contacts.scss";

const Contacts = () => {
  return (
    <main>
      <section>
        <div className="contacts-page">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h1 className="title">Контакты</h1>
                <ul>
                  <li>
                    <a href="tel:+996779740794">+996 (779) 740-794</a>
                  </li>
                  <li>г. Ош</li>
                  <li>ТЦ &quot;Корона&quot;, 1 этаж</li>
                </ul>
              </div>
              <div className="col-6">
                <img src={Image} alt="contacts image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
