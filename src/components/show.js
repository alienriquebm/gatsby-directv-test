import React from 'react';

import { Tag } from 'antd';

// Styles
import './show.scss';

const Show = () => (
  <div className="Show">
    <div className="Show-image">
      <img
        src={`https://unity-img.tbxapis.com/v0/images/
      9d29a3723e9925c375478e2c88cac95f/content/5ae4c013b4b91c26c2ac4114/
      ffdfdaaedc80e8a5ec11411d96d2f47a/img.jpg?_v=0.3.6`}
        alt="Directv"
      />
    </div>
    <div className="Show-info">
      <div className="Show-info-title">
        <h1>THE WALKING DEAD</h1>
      </div>
      <div className="Show-info-seasons">9 TEMPORADAS</div>
      <div className="Show-info-genere">
        Género:
        <div className="Show-info-genere-generes">
          <Tag color="white">DRAMA</Tag>
          <Tag color="white">HORROR</Tag>
          <Tag color="white">SUSPENSO</Tag>
          <Tag color="white">...</Tag>
        </div>
      </div>
      <div className="Show-info-classification">Clasificación: RTV-14</div>
      <div className="Show-info-description">
        Luego de despertar de un coma en un hospital abandonado, el oficial de policía Rick Grimes
        se da cuenta que el mundo que conocía no existe más, devastado por una epidemia zombie de
        proporciones apocalípticas. En los alrededores, en las afueras de Atlant...
      </div>
    </div>
    <div className="Show-avaliableon">
      <div className="Show-avaliableon-title">
        {`DISPONIBLE EN `}
        <Tag color="white">FOX</Tag>
      </div>
      <div className="Show-avaliableon-button">Miralo en DIRECTV Play</div>
      <div className="Show-avaliableon-avaliableuntil">
        {`Disponible Hasta: `}
        <span> 08/09/2020</span>
      </div>
      <div className="Show-avaliableon-image">
        <img
          src="https://experience-dtv.tbxnet.com/images/disponible/foxmas.png?_v=0.3.6"
          alt="Show"
        />
      </div>
    </div>
  </div>
);

export default Show;
