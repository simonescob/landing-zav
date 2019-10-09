import React from 'react';
import './css/App.css';

import Form from "./components/Form";
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      
      <Background>
        <Form/>
      </Background>
      
    </div>
  );
}

export default App;
