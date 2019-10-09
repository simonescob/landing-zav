import React from 'react';
import './css/App.css';

import Form from "./components/Form";
import Background from './components/Background';
import Carousel from './components/Carousel';
import Head from './components/Head';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      
      <Head/>

      <Background>
        <Form/>
        <Carousel/>
      </Background>

      <Content/>

      <Footer/>
      
    </div>
  );
}

export default App;
