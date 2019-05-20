import React from "react";
import Button from "./components/Button";
import { Input } from "./components/input";
import { Clearbutton } from "./components/Clearbutton";
import "./App.css";
import * as math from "mathjs";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
    //this.addToInput = this.addToInput.bind(this);
  }
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };
  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  };

  render() {
    return (
      <div className="app">
        <div className="calcwrap">
          <Input input={this.state.input} />
          <div className="row">
            <Clearbutton handleClear={() => this.setState({ input: "" })}>
              AC
            </Clearbutton>
            <Button handleClick={this.addToInput}>%</Button>
            <Button handleClick={this.addToInput}>(</Button>
            <Button handleClick={this.addToInput}>)</Button>
          </div>
          <div className="row">
            <Button handlClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
