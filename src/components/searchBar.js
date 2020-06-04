import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
          Submit
      </button>
    </span>
  </form>
    );
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
  event.preventDefault();

  this.props.onFormSubmit(this.state.term);
  this.setState({ term: '' });
}

}

export default SearchBar;
