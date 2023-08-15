import { generateAssetObject, createPreloadTrials } from "@bdelab/roar-utils";
import assets from '../../assets.json'
// import { pipeline } from "../../serve/serve";
import { jsPsych } from './jsPsych';
import { pid, studyId, classId, schoolId, redirectTo, pipeline, language, responseModality, enableButtons } from '../../serve/serve';
import store from "store2";
import { pressKey } from '@jspsych/test-utils';
import jsPsychRdk from '@jspsych-contrib/plugin-rdk';
import jsPsychAudioKeyboardResponse from '@jspsych/plugin-audio-keyboard-response';


const bucketURI = 'https://storage.googleapis.com/roar-mp'
export let mediaAssets = generateAssetObject(assets, bucketURI)
export let preloadTrials = createPreloadTrials(assets, bucketURI).default

export const waitFor = (conditionFunction) => {
    const poll = (resolve) => {
      if (conditionFunction()) resolve();
      // eslint-disable-next-line no-unused-vars
      else setTimeout((_) => poll(resolve), 400);
    };
  
    return new Promise(poll);
};

let aperture_center_x = window.outerWidth / 2;
let aperture_center_y = window.outerHeight / 2;
// if (pipeline === 'multitudes') {
//   aperture_center_x = 1920 / 2;
//   aperture_center_y = 1080 / 2;
// }

export function rdkWriteTrial(data) {
  jsPsych.data.addDataToLastTrial({
    accuracy: data.correct_choice == data.response,
    schoolId: schoolId,
    classId: classId,
    participant: pid,
    condition: jsPsych.timelineVariable('condition'),
    buttonClicked: store.session("buttonClicked"),
    pipeline: pipeline,
    language: language,
    studyId: studyId,
    responseModality: responseModality,
  });
  // eslint-disable-next-line no-param-reassign, eqeqeq
  
  store.session.set("buttonClicked", false);
}

export const loadImages = () => {
  const contentDiv = document.getElementById('jspsych-content');

  const canvas = contentDiv.firstChild;
  canvas.width = window.outerWidth;
  canvas.height = window.outerHeight;

  if (document.getElementById('rdk-image-left') === null) {
    const leftDiv = document.createElement('div');
    const leftImg = document.createElement('img');
    leftDiv.appendChild(leftImg);
    leftDiv.id = 'rdk-div-left';
    leftImg.id = 'rdk-image-left';
    leftImg.src = mediaAssets.images["treeLeft"];
    if (enableButtons) {
      leftDiv.onclick = () => {
        store.session.set("buttonClicked", true);
        pressKey('a');
      };
    }
    contentDiv.insertAdjacentElement('afterend', leftDiv);
  }

  if (document.getElementById('rdk-image-right') === null) {
    const rightDiv = document.createElement('div');
    const rightImg = document.createElement('img');
    rightDiv.appendChild(rightImg);
    rightDiv.id = 'rdk-div-right';
    rightImg.id = 'rdk-image-right';
    rightImg.src = mediaAssets.images["treeRight"];
    if (enableButtons) {
      rightDiv.onclick = () => {
        store.session.set("buttonClicked", true);
        pressKey('l');
      };
    }
    contentDiv.insertAdjacentElement('afterend', rightDiv);
  }
};

const rdkConfig = {
  type: jsPsychRdk,
  /*
  * The Inter Trial Interval. You can either have no ITI, or change the display element
  * to be the same color as the stimuli background to prevent flashing between trials.
  */
  timing_post_trial: 1000,
  number_of_dots: 150, // Total number of dots in the aperture
  coherent_direction: jsPsych.timelineVariable('coherent_direction'),
  coherence: jsPsych.timelineVariable('coherence'),
  correct_choice: [jsPsych.timelineVariable('correct_choice')],
  RDK_type: 3, // The type of RDK used
  aperture_type: 1, // Circle
  aperture_center_x: aperture_center_x,
  aperture_center_y: aperture_center_y,
  aperture_width: 700, // Matches 14deg diameter
  choices: ['a', 'l'], // Choices available to be keyed in by participant
  fixation_cross: true,
  // not sure if this is the correct scale - do the virtual chin to calibrate
  fixation_cross_width: 30,
  fixation_cross_height: 30,
  fixation_cross_thickness: 7,
  dot_color: 'black',
  dot_radius: 3, // 3.4, matching 5 pixels from Elle's paper
  move_distance: 6, // Speed parameter 6 seems the calculated speed but visually is not appealing
  // Not sure where `dot_life` comes from 200ms is what we want the maximum dot life to be
  dot_life: 12,
  reinsert_type: 1,
  on_load: loadImages,
};

const testBlock = {
  ...rdkConfig,
  trial_duration: 6000, // Duration of each trial in ms
  on_finish: (data) => {
    data.blockType = 'test';
    rdkWriteTrial(data);
  },
};

// create practice block
const practiceBlock = {
  ...rdkConfig,
  trial_duration: 15000, // Duration of each trial in ms
  on_finish: (data) => {
    data.blockType = 'practice';
    rdkWriteTrial(data);
  },
};

// Create an array of 2 different trials (different conditions)
const practiceTrials = [
  {
    // Condition Practice
    correct_choice: 'l',
    coherent_direction: 0,
    coherence: 0.8,
    condition: '80% Right',
  },
  {
    // Condition Practice
    correct_choice: 'a',
    coherent_direction: 180,
    coherence: 0.8,
    condition: '80% Left',
  },
];
const practiceInfo = jsPsych.randomization.repeat(practiceTrials, 6);

const trials = [
  {
    // Condition 1
    correct_choice: 'a', // The correct answer for Condition 1
    coherent_direction: 180, // The coherent direction for Condition 1 (dots move left)
    coherence: 0.06,
    condition: '6% Left',
  },
  {
    // Condition 2
    correct_choice: 'l',
    coherent_direction: 0,
    coherence: 0.06,
    condition: '6% Right',
  },
  {
    // Condition 3
    correct_choice: 'a',
    coherent_direction: 180,
    coherence: 0.12,
    condition: '12% Left',
  },
  {
    // Condition 4
    correct_choice: 'l',
    coherent_direction: 0,
    coherence: 0.12,
    condition: '12% Right',
  },
  {
    // Condition 5
    correct_choice: 'a',
    coherent_direction: 180,
    coherence: 0.24,
    condition: '24% Left',
  },
  {
    // Condition 6
    correct_choice: 'l',
    coherent_direction: 0,
    coherence: 0.24,
    condition: '24% Right',
  },
  {
    // Condition 7
    correct_choice: 'a',
    coherent_direction: 180,
    coherence: 0.48,
    condition: '48% Left',
  },
  {
    // Condition 8
    correct_choice: 'l',
    coherent_direction: 0,
    coherence: 0.48,
    condition: '48% Right',
  },
  {
    // Condition 9
    correct_choice: 'a',
    coherent_direction: 180,
    coherence: 0.96,
    condition: '96% Left',
  },
  {
    // Condition 10
    correct_choice: 'l',
    coherent_direction: 0,
    coherence: 0.96,
    condition: '96% Right',
  },
];

const feedbackBlock = {
  type: jsPsychAudioKeyboardResponse,
  stimulus: function () {
    const lastTrialAccuracy = jsPsych.data
      .getLastTrialData()
      .values()[0].accuracy;

    if (lastTrialAccuracy) {
      return mediaAssets.audio.feedbackCorrect;
    } else {
      return mediaAssets.audio.feedbackIncorrect;
    }
  },
  choices: 'NO_KEYS',
  trial_ends_after_audio: true,
  data: {
    task: 'feedback',
  },
};

// --- Push main timeline ------
export const PracticeProcedure = {
  timeline: [practiceBlock, feedbackBlock],
  timeline_variables: practiceInfo,
  randomize_order: true,
  repetition: 1,
};

// Multiply based on how many trials you need and randomize the trial order
export const createMotionCohProcedure = (conditionToOmit) => {
  const repeats = new Array(trials.length).fill(2);
  if (conditionToOmit !== null) {
    repeats[conditionToOmit * 2] = 0;
    repeats[conditionToOmit * 2 + 1] = 0;
  }
  const trialInfo = jsPsych.randomization.repeat(trials, repeats);
  return {
    timeline: [testBlock, feedbackBlock],
    timeline_variables: trialInfo,
    randomize_order: true,
    repetition: 1,
  };
};