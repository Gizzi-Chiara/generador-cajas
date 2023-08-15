import './App.css';
import React, {useState} from 'react';
import Formulario from './Components/Formulario';
import Cajas from './Components/Cajas';

const App = (props) => {
  const [currentColor, setCurrentColor] = useState([]);

  const changeToNewColor = (newColor) => {
    setCurrentColor([...currentColor, newColor]);
  }

  return (
    <div className="App">
      <Formulario newColor={changeToNewColor}/>
      <Cajas colors={currentColor}/>
    </div>
  );
}

export default App;
