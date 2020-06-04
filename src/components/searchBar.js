import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className= "input-group mb-3">
        <div className="search-bar input-group-prepend">
          <span className= "input-group-text">Search</span>
        </div>
        <input className= "form-control" value={this.state.term}  onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
