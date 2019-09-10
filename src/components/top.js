import React from "react";

import { Button, Dropdown, Menu, Icon } from "antd";

// Styles
import './top.scss';

const menu = (
  <Menu>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);

const Top = () => <div className="Top">
  <div className="Top-donthave">
    ¿No tienes DIRECTV?
    <Button ghost>
      <a href="">Ver Ofertas</a>
    </Button>
  </div>
  <div className="Top-onlyclients">
    Sin costo adicional para clientes de DIRECTV
  </div>
  <div className="Top-help">
    ¿Qué es DIRECTV Play?
  </div>
  <div className="Top-actions">
    <div className="Top-actions-signin">
      <Button ghost>
        <a href="">Ingresar</a>
      </Button>
    </div>
    <div className="Top-actions-country">
      <Dropdown overlay={menu}>
        <Button>
          Perú <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  </div>
</div>

export default Top;