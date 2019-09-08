import React from "react"

import Top from '../components/top';
import Header from '../components/Header';
import Show from '../components/Show';

// Styles
import 'antd/dist/antd.css';
import './index.scss';

export default () => <div className="Index">
  <Top />
  <Header/>
  <Show/>
</div>
