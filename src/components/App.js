import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = 'b7eb15bcb7b94f27b87d3926aeee45ac';


class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: null
    }

    this.recipeSearch = this.recipeSearch.bind(this);

  }

  recipeSearch(term) {
    const url = 'https://api.spoonacular.com/recipes/search?';

    const params = {
      part: 'snippet',
      apiKey: API_KEY,
      query: term,
      number: 5
    };

    axios
      .get(url, {
        params: params
      })
      .then(response => {
        this.setState({
          recipes: response
        });
        console.log(this.state);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className= "row">
          <div className= "col-md-6 offset-md-3">
            <SearchBar recipeSearch= {this.recipeSearch}/>
          </div>
        </div>
        <div className= "row">
          <div className= "col-md-6 offset-md-3">
            <RecipesList recipes={this.state.recipes}/>
          </div>
        </div>
      </div>

    )
  }

}

export default App
