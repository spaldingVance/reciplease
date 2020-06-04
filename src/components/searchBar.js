import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  render() {
    return (
      <form className="input-group">
        <input
        className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="button" className="btn btn-secondary" onClick={this.handleClick}>
          Submit
      </button>
    </span>
  </form>
    );
  }

  handleClick() {
    this.props.recipeSearch(this.state.term);
    this.setState({ term: ''});
  }

  onInputChange(event) {
    console.log(event);
    this.setState({ term: event.target.value });
  }

}

export default SearchBar;
