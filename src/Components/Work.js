import {
  faHouseFloodWater,
  faTruck,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Work = () => {
  const workInforData = [
    {
      image: <FontAwesomeIcon icon={faHouseFloodWater} />,
      tittle: "Feito como se fosse em casa",
      text: "Todos os nossos donuts são preparados com carinho e atenção aos detalhes, como se fossem feitos em casa. Utilizamos receitas tradicionais e técnicas artesanais para criar donuts frescos e saborosos, que lembram os melhores momentos em familia.",
    },
    {
      image: <FontAwesomeIcon icon={faUtensils} />,
      tittle: "Ingredientes selecionados",
      text: "Escolhemos a dedo os melhores ingredientes para garantir que nossos donuts sejam sempre frescos e deliciosos. usamos apenas produtos de alta qualidade, desde a farinha até os recheios, para proporcionar  a você uma experiência gustativa excepcional",
    },
    {
      image: <FontAwesomeIcon icon={faTruck} />,
      tittle: "Entrega em toda cidade",
      text: "Levamos nossos donuts diretamente até você, em qualquer lugar da cidade. Nossa equipe de entregas garante que seu pedido chegue rápido e em perfeitas condições, para que você possa desfrutar de nossos donuts fresquinhos e saborosos, onde quer que esteja.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nosso Trabalho</p>
        <h1>Como servimos você</h1>
        <p className="primary-text">
          Nossa Missão é proporcionar a você uma experiência única e delicosa.
          Desde a seleção cuidadosa dos ingredientes até a entrega no seu
          endereço, cada etapa do nosso processo é pensada para garantir que
          você receba os melhores donuts da cidade. Estamos comprometidos com a
          qualidade e a satisfação de nossos clientes.
        </p>
      </div> 
      <div className="work-section-bottom">
        {workInforData.map((data) => (
          <div className="work-section-info" key={data.tittle}>
            <div className="info-boxes-img-container">{data.image}</div>
            <h2>{data.tittle}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
