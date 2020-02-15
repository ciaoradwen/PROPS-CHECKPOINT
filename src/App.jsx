import React from 'react';

import './App.css';
import Wrapper from './Props/Wrapper'
import Photo from './Props/Photo'
import Tittle from './Props/Tittle'
// import 
function App() {
  return (
    <div className="App">
      <Wrapper>
        <h1>test</h1>
        <Photo imagePath="/jewjpg.jpg" /> 
          <Tittle small={true}>Radouan ++++</Tittle>
          <Tittle style={{color: 'blue', fontWeight: 'bold'}}>Ahmed ++++</Tittle>

      
      </Wrapper>
   
    </div>
  );
}

export default App;
