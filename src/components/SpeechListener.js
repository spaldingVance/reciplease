import React, { Component } from "react";
import SpeechRecognition, {finalTranscript, transcript, resetTranscript, stopListening} from "react-speech-recognition";

import VoiceRecognition from './VoiceRecognition'

var converter = require('number-to-words');




const SpeechListener = ({
  setCurrentStep,
  steps,
  finalTranscript,
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  stopListening,
  abortListening,
  startListening,
  listening
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      <VoiceRecognition setCurrentStep={setCurrentStep} steps={steps} transcript={finalTranscript} resetTranscript={resetTranscript} stopListening={stopListening} startListening={startListening} listening={listening}/>

    </div>
  );
};

export default SpeechRecognition(SpeechListener);
