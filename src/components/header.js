import React from "react";

import { Icon } from "antd";

// Styles
import './header.scss';

const Header = () => <div className="Header">
  <div className="Header-logo">
    <img src={'https://experience-dtv.tbxnet.com/images/logo.png?_v=0.3.6'}></img>
  </div>
  <div className="Header-menu">
    <div className="Header-menu-item">
      Inicio
    </div>
    <div className="Header-menu-item">
      Peliculas
    </div>
    <div className="Header-menu-item">
      Series
    </div>
    <div className="Header-menu-item">
      Deportes
    </div>
    <div className="Header-menu-item">
      Kids
    </div>
    <div className="Header-menu-item">
      En Vivo
    </div>
    <div className="Header-menu-item">
      Por Canal
    </div>
    <div className="Header-menu-search">
      <Icon type="search" />
    </div>
  </div>
</div>

export default Header;