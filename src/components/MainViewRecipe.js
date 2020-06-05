import React, {
  Component
} from 'react';

import axios from 'axios';
import SpeechListener from './SpeechListener'

const API_KEY = "60f93be48a35421c9e3831a72dfb4251"

class MainViewRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: null,
      ingredientsLoaded: false,
      stepsLoaded: false,
      current: null
    }

    this.setCurrentStep = this.setCurrentStep.bind(this)

  }

  setCurrentStep(newCurrent) {
    this.setState( { current: newCurrent} )
  }

  getRecipeSteps(recipeId) {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${API_KEY}`;

    axios
      .get(url, {
        // params: params
      })
      .then(response => {
        console.log('got response');
        console.log(response.data[0].steps);

        this.setState({
          stepsLoaded: true,
          steps: this.parseSteps(response.data[0].steps)
        });

      })
      .catch(error => {
        console.error(error);
      });
  }

  getRecipeIngredients(recipeId) {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/ingredientWidget.json?apiKey=${API_KEY}`;

    axios
      .get(url, {
        // params: params
      })
      .then(response => {
        console.log('got response');
        console.log(response);

        this.setState({
          ingredientsLoaded: true,
          ingredients: this.parseIngredients(response.data.ingredients)
        });

      })
      .catch(error => {
        console.error(error);
      });

  }

  parseIngredients(ingredients) {
    return ingredients.map( ingredient => {
      var unit;
      if(ingredient.amount.us.value % 1 !== 0) {
        if(Number(ingredient.amount.us.value.toFixed(1)) === Number(ingredient.amount.us.value.toFixed(2))) {
          unit = ingredient.amount.us.value.toFixed(1);
        } else {
          unit = ingredient.amount.us.value.toFixed(2);
        }
      } else {
        unit = ingredient.amount.us.value;
      }
      if(ingredient.amount.us.unit === 'c') {
        return `${unit} cup(s) ${ingredient.name}`;
      } else {
        return `${unit} ${ingredient.amount.us.unit} ${ingredient.name}`;
      }
    })
  }

  parseSteps(steps) {
    return steps.map(step=> {
      console.log(step);
      step.step = step.step.split('.').join('. ');
      step.step = step.step.split(' ').map(word => {
        console.log(word);
        if(word === 'F.') {
          console.log("FOUND F");
          return "Farenheit.";
        } else return word;
      }).join(' ');
      return step;
    })
  }

  componentDidMount() {
    this.getRecipeSteps(this.props.recipeId);
    this.getRecipeIngredients(this.props.recipeId);
  }

  render() {
    const { ingredientsLoaded, stepsLoaded, steps } = this.state;
    return (
        (ingredientsLoaded & stepsLoaded) ?
        <div>
          <div >
            <div className="row main-view-row mt-3 ingredients-col">
              <div className="col-md-3 display-pane">
              <ol className="list-group recipe-container container d-flex mb-3 p-3 rounded shadow">
              <h2 className="mainView-subtitle">Ingredients</h2>

                {
                  this.state.ingredients.map(ingredient => (
                    <li className="list-group-item" id={ingredient.name} key={ingredient.name}>
                      <h4>{ingredient}</h4>
                    </li>
                  ))
                }

              </ol>
              </div>

              <div className="col-md-8 display-pane instructions-col">
                <ol className="list-group recipe-container container d-flex mb-3 p-3 rounded shadow">
                  <h2 className="mainView-subtitle">Instructions</h2>
                    <div className="instructions-container">
                      {
                      this.state.steps.map(item => (
                        (item.number === this.state.current + 1) ?
                          <li className="list-group-item current-step" id={item.number} key={item.number}>
                            <h3>{item.number}) {item.step}</h3>
                          </li> :
                          <li className="list-group-item" id={item.number} key={item.number}>
                            <h3>{item.number}) {item.step}</h3>
                          </li>
                      ))
                      }
                  </div>
                </ol>
              </div>
            </div>
          </div>
          <SpeechListener setCurrentStep={this.setCurrentStep} steps={this.state.steps.map(item => item.step)}/>
        </div> :
        <h1>Loading ... </h1>
    )
  }
}

export default MainViewRecipe
