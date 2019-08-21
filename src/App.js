import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: 'Clue Mediator'
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  render() {
    return (
      <div style={{ width: 500, margin: 50 }}>
        <h3>Parent Component</h3>
        <hr />
        Input: <input value={this.state.inputVal} onChange={this.onInputChange} />
        <Child elementValue={this.state.inputVal} />
      </div >
    );
  }
}

export default App;