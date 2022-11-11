import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import BaseLayout from './layouts/BaseLayout';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers';
function App() {
  return (
    <BrowserRouter>
      <Routers />
      {/* <BaseLayout /> */}
    </BrowserRouter>
  );
}

export default App;
