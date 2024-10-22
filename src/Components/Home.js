import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi";
import BannerImage from "../Assets/home-banner-image.png";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="imagem de fundo do home Container" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Seu Donut Favorito Entrega Em Sua Casa
          </h1>
          <p className="primary-text">
            Diversos sabores deliciosos pra adoçar seus melhores momentos. Peça
            já o seu e receba um mimo surpresa.
          </p>
          <button className="secondary-button">
            Faça seu pedido <FiArrowRight />
          </button>
          <p className="primary-text">
            Ou venha comer connosco em um ambiente climatizado e aconchegante
            com varias opções para seu pedido
          </p>
        </div>

        <div className="home-image-section">
          <div className="home-primary-image">
            <img src={BannerImage} alt="Donuts" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
