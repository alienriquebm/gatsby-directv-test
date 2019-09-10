import React, { useState } from "react";

import Top from '../components/top';
import Header from '../components/Header';
import Show from '../components/Show';

import { Button } from "antd";

// Styles
import 'antd/dist/antd.css';
import './index.scss';


const Home = () => {
  const [count, setCount] = useState(0);
  return (<div className="Index">
    <div style={{ color: 'white' }}>
      Current count (hooks test): {count}
    </div>
    <Button onClick={() => setCount(count + 1)}>Add</Button>
    <Top />
    <Header />
    <Show />
  </div>);
};

export default Home;