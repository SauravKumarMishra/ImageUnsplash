import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { text: "" };

  onInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <div className='ui segment'>
        <form
          className='ui form'
          onSubmit={(event) => this.onFormSubmit(event)}
        >
          <div className='field'>
            <label htmlFor='image'>Image Search:</label>
            <input
              type='text'
              value={this.state.text}
              id='image'
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
