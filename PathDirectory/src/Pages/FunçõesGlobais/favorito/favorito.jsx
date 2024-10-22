import React, { useState } from 'react';
import '../favorito/favorito.css';

function StarButton() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked); // Alterna o estado entre "true" e "false"
    };

  return (
    <div>
    <button
      className={`starButon ${clicked ? 'clicked' : ''}`} // Adiciona a classe 'clicked' quando clicado
      onClick={handleClick}
    ></button>
  </div>
  );
}

export default StarButton;
