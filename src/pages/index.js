import React from "react"
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './index.scss';

export default () => <div className="Main">
  <Button type="primary">Primary</Button>
  <Button>Default</Button>
  <Button type="dashed">Dashed</Button>
  <Button type="danger">Danger</Button>
  <Button type="link">Link</Button>
</div>
