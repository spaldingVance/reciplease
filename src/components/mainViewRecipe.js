import React, {
  Component
} from 'react';

import axios from 'axios';
import SpeechListener from './SpeechListener'

const API_KEY = "b7eb15bcb7b94f27b87d3926aeee45ac"

class MainViewRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: null,
      isLoaded: false
    }

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
          isLoaded: true,
          steps: this.parseSteps(response.data[0].steps)
        });

      })
      .catch(error => {
        console.error(error);
      });
  }

  parseSteps(steps) {
    return steps.map(step=> {
      console.log(step);
      step.step = step.step.split('.').join('. ');
      return step;
    })
  }

  componentDidMount() {
    this.getRecipeSteps(this.props.recipeId);
  }

  render() {
    const { isLoaded, steps } = this.state;
    return (
        isLoaded ?
        <div>
          <h1>Main View Recipe</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-9 offset-md-3 display-pane">
                <ol className="list-group recipe container d-flex mb-3 p-3 rounded shadow">
                  {
                    this.state.steps.map(item => (
                      <li className="list-group-item" id={item.number} key={item.number}>
                        <h3>{item.number}) {item.step}</h3>
                      </li>
                    ))
                  }
                </ol>
              </div>
            </div>
          </div>
          <SpeechListener steps={this.state.steps.map(item => item.step)}/>
        </div> :
        <h1>Loading ... </h1>
    )
  }
}

export default MainViewRecipe
