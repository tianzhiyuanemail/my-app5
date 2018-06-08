import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link ,Prompt } from 'react-router-dom';

const refCallback = (node)=>{
    console.info(node);
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Prompt
              when={false}
              message="你确定要离开当前页面吗？"
          />
          <Link to="/a"  innerRef={refCallback}>aaaaaaaaaaaaaaa</Link>
          <br/>
          <Link to={{
              pathname: '/b',
              search: '?sort=name',
              hash: '#the-hash',
              state: {
                  fromDashboard: true
              }
          }} innerRef={refCallback}>bbbbbbbbbbbbbb</Link>
      </div>
    );
  }
}

export default App;
