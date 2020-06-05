import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList'
import { Route } from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router'
import './fonts.css';

const API_KEY = 'b7eb15bcb7b94f27b87d3926aeee45ac';


class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [
        {
          "id": 495020,
          "title": "Pumpkin Spice Breakfast Shake",
          "readyInMinutes": 10,
          "servings": 1,
          "sourceUrl": "http://ohmyveggies.com/recipe-pumpkin-spice-breakfast-shake/",
          "openLicense": 0,
          "image": "Pumpkin-Spice-Breakfast-Shake-495020.jpg"
        },
        {
          "id": 694990,
          "title": "Quick Breakfast Taco",
          "readyInMinutes": 15,
          "servings": 1,
          "sourceUrl": "http://www.eatingwell.com/recipes/quick_breakfast_taco.html",
          "openLicense": 0,
          "image": "quick-breakfast-taco-694990.jpg"
        },
        {
          "id": 505163,
          "title": "Healthy Gluten-Free Breakfast Sandwich + a Yoga Challenge",
          "readyInMinutes": 5,
          "servings": 1,
          "sourceUrl": "http://www.queenofquinoa.me/2014/01/gluten-free-breakfast-sandwich-yoga-challenge/",
          "openLicense": 0,
          "image": "Healthy-Gluten-Free-Breakfast-Sandwich-+-a-Yoga-Challenge-505163.jpg"
        },
        {
          "id": 569542,
          "title": "My Favorite Breakfast Smoothie {a.k.a. Super Food Smoothie!}",
          "readyInMinutes": 45,
          "servings": 4,
          "sourceUrl": "http://www.melskitchencafe.com/my-favorite-healthy-breakfast-smoothie-a-k-a-super-food-smoothie/",
          "openLicense": 0,
          "image": "My-Favorite-Breakfast-Smoothie-{a-k-a--Super-Food-Smoothie}-569542.jpg"
        },
        {
          "id": 720583,
          "title": "Quinoa Breakfast Tacos with Kale + Butternut Squash",
          "readyInMinutes": 25,
          "servings": 4,
          "sourceUrl": "http://www.simplyquinoa.com/quinoa-breakfast-tacos-with-kale-butternut-squash/",
          "openLicense": 0,
          "image": "quinoa-breakfast-tacos-with-kale-+-butternut-squash-720583.jpg"
        }
      ]
    }

    this.recipeSearch = this.recipeSearch.bind(this);

  }

  recipeSearch(term) {
    const url = 'https://api.spoonacular.com/recipes/search?';

    const params = {
      apiKey: API_KEY,
      query: term,
      number: 5
    };

    axios
      .get(url, {
        params: params
      })
      .then(response => {
        console.log('got response');
        console.log(response);

        this.setState({
          recipes: response.data.results
        });
        console.log(this.state);
        this.render();
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <Route path='/' render={() => (
        <Router recipes={this.state.recipes} recipeSearch={this.recipeSearch}/>
      )}/>
    )
  }
}

export default App
