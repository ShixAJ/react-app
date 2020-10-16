import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // tags: ["tag1", "tag2", "tag3"],
  };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this); //to bind event handlers to have access to the object (this)
  //   }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          // the key is important for React to uniquely identify each element in this list. Helps react find what changed in the state quickly to update the dom
          // each key should be unique in a list
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //   handleIncrement() {
  //     console.log("Increment Clicked", this);
  //   }

  handleIncrement = (product) => {
    this.setState({ count: this.state.count + 1 });
    console.log("Increment Clicked", this);
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && <p>Please Create a New Tag</p>}
        {this.renderTags()}
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
