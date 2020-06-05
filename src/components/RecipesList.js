import React from 'react';
import { Link } from 'react-router-dom'

const image_url_start = "https://spoonacular.com/recipeImages/"

const RecipesList = ({ recipes }) => (

  <div className="recipes-container">
    <h1>Recipes</h1>
    <div className="list-group ">
      {
        recipes.map(recipe => (
          <div className="list-group-item recipe container d-inline-flex flex-wrap mb-3 p-3 border rounded side-view shadow" key={recipe.id}>

            <Link to={`/recipes/${recipe.id}`}>
              <img src={image_url_start + recipe.image} className="img-fluid img-thumbnail" alt="Responsive image"/>
              <h3>{recipe.title}</h3>
              <h5>Ready in {recipe.readyInMinutes} minutes</h5>
            </Link>
          </div>
        ))
      }
    </div>
  </div>
)

export default RecipesList;
