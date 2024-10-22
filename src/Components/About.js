import { BsFillPlayCircleFill } from "react-icons/bs";
import AboutBackground from "../Assets/about-background1.jpg";
import AboutBackgroundImage from "../Assets/about-image.png";
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="imagem do donuts empilhados" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="Mão segurando um donut" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre Nós</p>
        <h1 className="primary-heading">
          É importante Conhecer Quem Alimenta Voce
        </h1>
        <p className="primary-text">
          Somos uma doceria local dedicada a trazer a voces os donuts mais
          deliciosos da cidade
        </p>
        <p className="primary-text">
          Nossa historia começou com uma paixão e desejo de criar um espaço onde
          amigos e familiares possam se reunir e desfrutar de momentos doces
          juntos
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Leia Mais</button>
        <button className="watch-video-button">
          <BsFillPlayCircleFill/> Assista Nosso Video
        </button>
        </div>
      </div>
    </div>
  );
};

export default About;
