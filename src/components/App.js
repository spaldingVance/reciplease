import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList'
import {
  Route
} from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router'
import './fonts.css';

const API_KEY = 'b7eb15bcb7b94f27b87d3926aeee45ac';


class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [{
          "id": 495020,
          "title": "Pumpkin Spice Breakfast Shake",
          "readyInMinutes": 10,
          "servings": 1,
          "sourceUrl": "http://ohmyveggies.com/recipe-pumpkin-spice-breakfast-shake/",
          "openLicense": 0,
          "image": "Pumpkin-Spice-Breakfast-Shake-495020.jpg"
        },
        {
          "id": 678487,
          "title": "Breakfast Sandwich with Egg, Avocado, Tomato, and Swiss Cheese",
          "readyInMinutes": 5,
          "servings": 1,
          "sourceUrl": "http://www.fortheloveofcooking.net/2015/09/breakfast-sandwich-with-egg-avocado-tomato-and-swiss-cheese.html",
          "openLicense": 0,
          "image": "Breakfast-Sandwich-with-Egg--Avocado--Tomato--and-Swiss-Cheese-678487.jpg"
        }, ,
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
        },
        {
          "id": 550998,
          "title": "Salad for breakfast? Oh yeah! Breakfast Quinoa Salad",
          "readyInMinutes": 45,
          "servings": 3,
          "sourceUrl": "http://thehealthyfoodie.com/2012/07/09/salad-for-breakfast-oh-yeah-breakfast-quinoa-salad/",
          "openLicense": 0,
          "image": "salad-for-breakfast-oh-yeah-breakfast-quinoa-salad-550998.jpg"
        },
        {
          "id": 626324,
          "title": "Dr. Oz Keepin’ it Smooth High Protein Breakfast Smoothie",
          "readyInMinutes": 6,
          "servings": 2,
          "sourceUrl": "http://www.blenderbabes.com/lifestyle-diet/dairy-free/dr-oz-keepin-it-smooth-high-protein-breakfast-smoothie-recipes/",
          "openLicense": 0,
          "image": "Dr--Oz-Keepin-it-Smooth-High-Protein-Breakfast-Smoothie-626324.jpg"
        },
        {
          "id": 495555,
          "title": "Mexican Chocolate Breakfast Shake",
          "readyInMinutes": 10,
          "servings": 1,
          "sourceUrl": "http://ohmyveggies.com/recipe-mexican-chocolate-breakfast-shake/",
          "openLicense": 0,
          "image": "Mexican-Chocolate-Breakfast-Shake-495555.jpg"
        },
        {
          "id": 676275,
          "title": "Chocolate Peanut Butter Banana Breakfast Shake",
          "readyInMinutes": 5,
          "servings": 2,
          "sourceUrl": "http://www.cookingclassy.com/2015/02/chocolate-peanut-butter-banana-breakfast-shake/",
          "openLicense": 0,
          "image": "Chocolate-Peanut-Butter-Banana-Breakfast-Shake-676275.jpg"
        },
        {
          "id": 678594,
          "title": "90-Second Pumpkin Pie Breakfast Quinoa",
          "readyInMinutes": 2,
          "servings": 1,
          "sourceUrl": "http://www.simplyquinoa.com/90-second-pumpkin-pie-breakfast-quinoa/",
          "openLicense": 0,
          "image": "90-Second-Pumpkin-Pie-Breakfast-Quinoa-678594.jpg"
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
      number: 10
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
    return ( <
      Route path = '/'
      render = {
        () => ( <
          Router recipes = {
            this.state.recipes
          }
          recipeSearch = {
            this.recipeSearch
          }
          />
        )
      }
      />
    )
  }
}

export default App
