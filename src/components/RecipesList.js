import React from 'react';
import { Link } from 'react-router-dom'

const image_url_start = "https://spoonacular.com/recipeImages/"

const RecipesList = ({ recipes }) => (

  <div className="recipes-container">
    <h1>Recipes</h1>
    <ol className="list-group">
      {
        recipes.map(recipe => (
          <li className="list-group-item" key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
              <img width="200px" src={image_url_start + recipe.image}/>
              <h5>Ready in {recipe.readyInMinutes} minutes</h5>
            </Link>
          </li>
        ))
      }
    </ol>
  </div>
)

export default RecipesList;
