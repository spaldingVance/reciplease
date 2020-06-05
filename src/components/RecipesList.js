import React from 'react';
import { Link } from 'react-router-dom'

const image_url_start = "https://spoonacular.com/recipeImages/"

const RecipesList = ({ recipes }) => (

  <div className="recipes-container">
    <div className="list-group ">
      {
        recipes.map(recipe => (
            <div className="list-group-item recipe container flex-wrap mb-3 p-3 border rounded side-view shadow" key={recipe.id}>

              <Link to={`/recipes/${recipe.id}`}>
                <h3>{recipe.title}</h3>
                <div className="image-scaling">
                  <img src={image_url_start + recipe.image} className="img-fluid img-thumbnail mb-2 mx-auto d-block" alt="Responsive image"/>
                  <h5>Ready in {recipe.readyInMinutes} minutes</h5>
                </div>
              </Link>
            </div>
        ))
      }
    </div>
  </div>
)

export default RecipesList;
