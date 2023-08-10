// npm run serve:dev
import { mediaAssets, preloadTrials } from './loadassets';
import { initJsPsych } from 'jspsych';
import surveyText from '@jspsych/plugin-survey-text';
import 'jspsych/css/jspsych.css';
import 'regenerator-runtime/runtime';
import jsPsychRdk from '@jspsych-contrib/plugin-rdk';
import { pressKey } from '@jspsych/test-utils';

import { rootDoc } from '../firebaseConfig';
import jsPsychPavlovia from '../jsPsychPavlovia';
import '../css/custom.css';

// Audio files
import jsPsychAudioKeyboardResponse from '@jspsych/plugin-audio-keyboard-response';

// ---------Prepare the main timeline---------
import { enterFullscreen } from './trials/fullScreen';
import { introductionTrials, ifKeyboardInstrutions, ifButtonInstrutions, intro5 } from './trials/introduction';
import { IBI1, IBI2, IBI3, IBI4, IBI5, IBIEnd } from './trials/ibi';

// Copied camelCase from preload.js
export const camelCase = (inString) =>
  inString.replace(/_([a-z])/g, (g) => g[1].toUpperCase());

// Copied preloadObj2contentObj from preload.js
export const preloadObj2contentObj = (preloadObj) => {
  const contentArray = [].concat(...Object.values(preloadObj));
  return contentArray.reduce((o, val) => {
    const pathSplit = val.split('/');
    const fileName = pathSplit[pathSplit.length - 1];
    const key = fileName.split('.')[0].replace(/Es$/, '');
    // eslint-disable-next-line no-param-reassign
    o[camelCase(key)] = val;
    return o;
  }, {});
};

// Automatically populate the audioContent object with the audio files
// Copied audioContent from preload.js
const audioBlocks = {
  3: [mediaAssets.audio["feedbackCorrect"], mediaAssets.audio["feedbackIncorrect"]],
};

export const audioContent = preloadObj2contentObj(audioBlocks);


export function buildExperiment() {
  // Set up all experiment related info here
  const jsPsychForURL = initJsPsych();
  let participantId = jsPsychForURL.data.getURLVariable('participant') || null;
  let classId = jsPsychForURL.data.getURLVariable('classId') || null;
  let schoolId = jsPsychForURL.data.getURLVariable('schoolId') || null;
  const redirectTo = jsPsychForURL.data.getURLVariable('redirectTo') || null;
  const pipeline = jsPsychForURL.data.getURLVariable('pipeline') || 'rc';
  const language = jsPsychForURL.data.getURLVariable('language') || 'en';
  const studyId = jsPsychForURL.data.getURLVariable('studyId') || null;
  const responseModality =
  jsPsychForURL.data.getURLVariable('responseModality') || 'touch';

  const enableButtons = responseModality === 'touch' ? true : false;
  let buttonClicked = false;
  console.log(responseModality);
  console.log(enableButtons);
  console.log((() => !enableButtons)());
  console.log((() => enableButtons)());
  console.log(pipeline);

  const redirect = (redirectTo) => {
    if (redirectTo === 'refresh') {
      window.location.reload();
    } else {
      if (pipeline === 'multitudes') {
        window.location.reload();
      } else if (pipeline === 'rc') {
        window.location.href = 'https://reading.stanford.edu/?g=796&c=1';
      } else if (pipeline === 'school') {
        window.location.href = 'https://reading.stanford.edu/?g=796&c=1';
      } else if (pipeline === 'ucsfdc') {
        window.location.href = 'https://reading.stanford.edu/?g=796&c=1';
      }
    }
  };


  const taskInfo = {
    taskId: 'honey-hunt',
    taskName: 'Honey Hunt',
    variantName: language === 'en' ? 'default' : 'default-es',
    taskDescription:
      "In this game participants are on a trip to the moon and galaxy of stars are on their way pushing them to the left or right. To advance, participants are asked to report which way the galaxy of stars moving. They can move towards the left or right and participants need to determine which way the stars are going by pressing 'a' for left and 'l' for right.",
    variantDescription: 'Default',
    blocks: [
      {
        blockNumber: 1,
        trialMethod: '96% coherence',
        corpus: 'RDK',
      },
      {
        blockNumber: 2,
        trialMethod: 'repeat',
        corpus: 'RDK',
      },
      {
        blockNumber: 3,
        trialMethod: 'repeat',
        corpus: 'RDK',
      },
      {
        blockNumber: 4,
        trialMethod: 'repeat',
        corpus: 'RDK',
      },
      {
        blockNumber: 5,
        trialMethod: 'repeat',
        corpus: 'RDK',
      },
    ],
  };

const jsPsych = initJsPsych({
  on_finish: () => {
    redirect(redirectTo);
  },
});



const getPid = {
  type: surveyText,
  questions: [
    {
      prompt: 'Participant ID:',
      name: 'pid',
      placeholder: '0000',
      required: true,
    },
    {
      prompt: 'Class ID:',
      name: 'ClassId',
      placeholder: '0000',
      required: true,
    },
    {
      prompt: 'School ID',
      name: 'SchoolId',
      placeholder: '0000',
      required: true,
    },
  ],
  on_finish: (data) => {
    participantId = [
      data.response.SchoolId,
      data.response.ClassId,
      data.response.pid,
    ].join('-');
    classId = data.response.ClassId;
    schoolId = data.response.SchoolId;
  },
};


// ---------Create trials---------
let aperture_center_x = window.outerWidth / 2;
let aperture_center_y = window.outerHeight / 2;
if (pipeline === 'multitudes') {
  aperture_center_x = 1920 / 2;
  aperture_center_y = 1080 / 2;
}

function rdkWriteTrial(data) {
  jsPsych.data.addDataToLastTrial({
    accuracy: data.correct_choice == data.response,
    schoolId: schoolId,
    classId: classId,
    participant: participantId,
    condition: jsPsych.timelineVariable('condition'),
    buttonClicked: buttonClicked,
    pipeline: pipeline,
    language: language,
    studyId: studyId,
    responseModality: responseModality,
  });
  // eslint-disable-next-line no-param-reassign, eqeqeq
  
  buttonClicked = false;
}
const loadImages = () => {
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
        buttonClicked = true;
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
        buttonClicked = true;
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

// The test block where all the trials are nested. The properties here will
// trickle down to all trials in the timeline unless they have their own
// properties defined
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
      return audioContent.feedbackCorrect;
    } else {
      return audioContent.feedbackIncorrect;
    }
  },
  choices: 'NO_KEYS',
  trial_ends_after_audio: true,
  data: {
    task: 'feedback',
  },
};

// --- Push main timeline ------
const PracticeProcedure = {
  timeline: [practiceBlock, feedbackBlock],
  timeline_variables: practiceInfo,
  randomize_order: true,
  repetition: 1,
};

// Multiply based on how many trials you need and randomize the trial order
const createMotionCohProcedure = (conditionToOmit) => {
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

const timeline = [];

/* init connection with pavlovia.org */
const isOnPavlovia = window.location.href.includes('run.pavlovia.org');

if (isOnPavlovia) {
  const pavloviaInit = {
    type: jsPsychPavlovia,
    command: 'init',
  };
  timeline.push(pavloviaInit);
}

// FIRST DO:
// config, preload, jspsych instance, then come back to the trials
timeline.push(preloadTrials);

timeline.push(enterFullscreen); // TODO: add proper "do you want to enter fullscreen" message

timeline.push(getPid)
timeline.push(introductionTrials);
timeline.push(ifKeyboardInstrutions);
timeline.push(ifButtonInstrutions);
timeline.push(intro5);
timeline.push(PracticeProcedure);
timeline.push(IBI1);
timeline.push(createMotionCohProcedure(0));
timeline.push(IBI2);
timeline.push(createMotionCohProcedure(1));
timeline.push(IBI3);
timeline.push(createMotionCohProcedure(2));
timeline.push(IBI4);
timeline.push(createMotionCohProcedure(3));
timeline.push(IBI5);
timeline.push(createMotionCohProcedure(4));
timeline.push(IBIEnd);

/* finish connection with pavlovia.org */
if (isOnPavlovia) {
  const pavloviaFinish = {
    type: jsPsychPavlovia,
    command: 'finish',
    participantId,
  };
  timeline.push(pavloviaFinish);
}
console.log(timeline)
  return {timeline, jsPsych}
};
