import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Slide/slideShow.css"
import "../../../../public/Midias/Slide01.png"




const SlideShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    customPaging: i => (
        <div
          style={{
            width: "2px",
            height: "2px",
            color: "blue", // Cor personalizada para o texto
            //border: "1px blue solid", // Borda azul para o ponto
            borderRadius: '50%', // Ponto arredondado
            padding: '5px', // Ajuste de espaçamento
            cursor: 'pointer',
            backgroundColor: 'white',
          }}
        >
          
        </div>
      )
    
  };

  return (
    <div style={{ width: '770px', margin: '0 auto' }}>
      <Slider {...settings}>
        <div className="Slide">
          <img className='imagemg'  src= "../../../../public/Midias/Slide01.png" alt="Slide 1" />
        </div>
        <div className="Slide">
          <img src="https://via.placeholder.com/500x300?text=Slide+2" alt="Slide 2" />
        </div>
        <div className="Slide">
          <img src="https://via.placeholder.com/500x300?text=Slide+3" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SlideShow;
