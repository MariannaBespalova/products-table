import React from "react";
import './App.css';
import GoodsList from "../src/components/GoodsList";
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <GoodsList />
      </div>
    )
  }
}

export default App;
