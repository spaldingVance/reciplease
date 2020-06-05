import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainViewRecipe from './MainViewRecipe'
import RecipesList from './RecipesList'
import SearchBar from './SearchBar'

const Router = ({recipes, recipeSearch}) => (
  <Switch>
    <Route path='/recipes/:id' render={(routerProps) => (
      <MainViewRecipe recipes={recipes} recipeId={parseInt(routerProps.match.params.id, 10)}/>
    )}/>

    <Route path='/' render={(routerProps) => (
      <div className = "container search-bar" >
        <div className = "row my-3" >
          <div className = "col-md-6 offset-md-3 " >
            <SearchBar recipeSearch = {
              recipeSearch
            }/>
          </div>
        </div>
        <div className = "row" >
          <div className = "col-md-6 offset-md-3" >
            <RecipesList recipes = { recipes }/>
          </div>
        </div>
      </div>
    )}/>
  </Switch>
)

export default Router
