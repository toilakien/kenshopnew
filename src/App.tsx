import React from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
// import 'antd/dist/antd.css';
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
