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
      <form className="form d-inline shadow-sm">
        <div className="input-group mt-3 mb-3 ">
          <div className="input-group-prepend ">
            <div className="input-group-btn">
              <button type="button" className="btn btn-outline-primary search-button shadow-sm" onClick={this.handleClick}>
                Search
                  </button>
                </div>
              </div>
              <input className="input-group form-control ml-sm-2 search-bar shadow-sm" value={this.state.term} onChange={this.onInputChange} />
          </div>
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
