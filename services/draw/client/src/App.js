import React, { Component } from 'react';
import MaterialContainer from './components/MaterialContainer';
import DrawApp from './components/DrawApp';

class App extends Component {
  render() {
    return (
      <MaterialContainer>
        <DrawApp />
      </MaterialContainer>
    );
  }
}

export default App;
