import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Router = ({recipes, }) => {
  <Switch>
    <Route path='/recipes/:id' render={(routerProps) => {
      <MainViewRecipe recipes={recipes}/>
    }}/>

    <Route path='/' render={(routerProps) => {
      <RecipesList recipes={recipes}/>
    }}/>
  </Switch>
}
