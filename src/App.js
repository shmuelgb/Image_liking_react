import "./App.css";
import React from "react";
import Counter from "./Components/Counter";

class App extends React.Component {
  state = { likes: 0, dislikes: 0, counter: 1 };

  handleNext = (like) => {
    if (like) {
      this.setState({ likes: this.state.likes + 1 });
    } else {
      this.setState({ dislikes: this.state.dislikes + 1 });
    }
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Counter type="likes" value={this.state.likes} />
          <Counter type="dislikes" value={this.state.dislikes} />
        </div>
        <img
          src={`https://picsum.photos/500/500?random=${this.state.counter}`}
          alt=""
        />
        <div className="buttons">
          <button onClick={() => this.handleNext(true)}>Like</button>
          <button onClick={() => this.handleNext(false)}>disLike</button>
        </div>
      </div>
    );
  }
}

export default App;
