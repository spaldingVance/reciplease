import React, {
  Component
} from 'react';
//import Speech from '../react-speech/speech';

import Speech from "react-speech";

var converter = require('number-to-words');



var myText = null;
var speechButton = null;

class VoiceRecognition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      steps: this.props.steps,
      current: 0,
      speechButton: null
    }
  }

  componentDidMount() {
    this.props.stopListening();
    this.props.startListening();
  }

  componentDidUpdate() {
    let stepObj = {};

    for (let i = 0; i < this.state.steps.length; i++) {
      var key = 'step ' + converter.toWords(i + 1);
      stepObj[key] = this.state.steps[i];
    }

    let stepKeys = Object.keys(stepObj);
    console.log(this.props)

    if (this.props.transcript) {
      console.log(typeof this.props.transcript);
      console.log(this.props.transcript);
      var lowercaseTranscript = this.props.transcript.toLowerCase();
      var parsed = lowercaseTranscript.split(' ').map(word => {
        if (!isNaN(word)) {
          return converter.toWords(Number(word));
        } else {
          return word;
        }
      }).join(' ');
      console.log(parsed);
      stepKeys.forEach((key, index) => {
        if (parsed.includes(key)) {
          console.log('found a step request!');
          this.props.resetTranscript();
          this.props.stopListening();
          this.setState({
            current: index
          }, () => speechButton.play());
          this.props.setCurrentStep(index);
        }
      })
      if (parsed.includes('next step')) {
        this.props.resetTranscript();
        this.props.stopListening();
        var nextStepIndex = this.state.current + 1;
        this.setState({
          current: nextStepIndex
        }, () => speechButton.play());
        this.props.setCurrentStep(nextStepIndex);
      } else if (parsed.includes('previous step')) {
        this.props.resetTranscript();
        this.props.stopListening();
        var previousStepIndex = this.state.current - 1;
        this.setState({
          current: previousStepIndex
        }, () => speechButton.play());
        this.props.setCurrentStep(previousStepIndex);
      } else if (parsed.includes('current step')) {
        this.props.resetTranscript();
        this.props.stopListening();
        speechButton.play();
      }
    }
    if (!this.props.listening) {
      this.props.startListening();
    }
  }


  render() {
    return ( <
      div >
     <
      Speech text = {
        this.state.steps[this.state.current]
      }
      ref = {
        element => speechButton = element
      }
      voice="Google UK English Female"
      rate="0.85"
      /> <
      /div>
    )
  }
}

export default VoiceRecognition
