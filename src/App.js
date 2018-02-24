import React, { Component } from 'react';
import { Button, Icon } from 'antd'
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Icon type="question" spin={true}></Icon>
      </div>
    );
  }
}

export default App;
