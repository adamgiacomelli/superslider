import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools'

import SuperSlider from './components/SuperSlider'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>SuperSlider</h1>
        </header>
        <SuperSlider/>
        <DevTools />
      </div>
    );
  }
}

export default App;
