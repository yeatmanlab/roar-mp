/* eslint-disable func-names */
/* eslint-disable object-shorthand */
import { initJsPsych } from 'jspsych';
import surveyText from '@jspsych/plugin-survey-text';
import fullScreen from '@jspsych/plugin-fullscreen';
import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';
import videoKeyboardResponse from '@jspsych/plugin-video-keyboard-response';
import jsPsychRdk from '@jspsych-contrib/plugin-rdk';
import jsPsychPreload from '@jspsych/plugin-preload';
import { pressKey } from '@jspsych/test-utils';
import 'jspsych/css/jspsych.css';
import 'regenerator-runtime/runtime';
import { RoarFirekit } from '@bdelab/roar-firekit';

import introVideo1 from './video/Honey_Hunt_Intro_1.mp4';
import introVideo2 from './video/Honey_Hunt_Intro_2.mp4';
import introVideo3 from './video/Honey_Hunt_Intro_3.mp4';
import introVideo4 from './video/Honey_Hunt_Intro_4.mp4';
import introButtonVideo3 from './video/Honey_Hunt_Intro_Button_3.mp4';
import introButtonVideo4 from './video/Honey_Hunt_Intro_Button_4.mp4';
import introVideo5 from './video/Honey_Hunt_Intro_5.mp4';
import endVideo from './video/Honey_Hunt_End.mp4';
import levelUpVideo1 from './video/Honey_Hunt_Level_Up_1.mp4';
import levelUpVideo2 from './video/Honey_Hunt_Level_Up_2.mp4';
import levelUpVideo3 from './video/Honey_Hunt_Level_Up_3.mp4';
import levelUpVideo4 from './video/Honey_Hunt_Level_Up_4.mp4';
import levelUpVideo5 from './video/Honey_Hunt_Level_Up_5.mp4';

import introVideo1Es from './video/Spanish_Honey_Hunt_Intro_1.mp4';
import introVideo2Es from './video/Spanish_Honey_Hunt_Intro_2.mp4';
import introVideo3Es from './video/Spanish_Honey_Hunt_Intro_3.mp4';
import introVideo4Es from './video/Spanish_Honey_Hunt_Intro_4.mp4';
import introButtonVideo3Es from './video/Spanish_Honey_Hunt_Intro_Button_3.mp4';
import introButtonVideo4Es from './video/Spanish_Honey_Hunt_Intro_Button_4.mp4';
import introVideo5Es from './video/Spanish_Honey_Hunt_Intro_5.mp4';
import endVideoEs from './video/Spanish_Honey_Hunt_End.mp4';
import levelUpVideo1Es from './video/Spanish_Honey_Hunt_Level_Up_1.mp4';
import levelUpVideo2Es from './video/Spanish_Honey_Hunt_Level_Up_2.mp4';
import levelUpVideo3Es from './video/Spanish_Honey_Hunt_Level_Up_3.mp4';
import levelUpVideo4Es from './video/Spanish_Honey_Hunt_Level_Up_4.mp4';
import levelUpVideo5Es from './video/Spanish_Honey_Hunt_Level_Up_5.mp4';

import { rootDoc } from './firebaseConfig';
import jsPsychPavlovia from './jsPsychPavlovia';

import treeLeft from './img/tree-left.png';
import treeRight from './img/tree-right.png';
import './css/custom.css';

// Audio files
import feedbackCorrect from './audio/feedbackCorrect.mp3';
import feedbackIncorrect from './audio/feedbackIncorrect.mp3';

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

const videos =
  language === 'es'
    ? {
        introVideo1: introVideo1Es,
        introVideo2: introVideo2Es,
        introVideo3: introVideo3Es,
        introVideo4: introVideo4Es,
        introButtonVideo3: introButtonVideo3Es,
        introButtonVideo4: introButtonVideo4Es,
        introVideo5: introVideo5Es,
        endVideo: endVideoEs,
        levelUpVideo1: levelUpVideo1Es,
        levelUpVideo2: levelUpVideo2Es,
        levelUpVideo3: levelUpVideo3Es,
        levelUpVideo4: levelUpVideo4Es,
        levelUpVideo5: levelUpVideo5Es,
      }
    : {
        introVideo1,
        introVideo2,
        introVideo3,
        introVideo4,
        introButtonVideo3,
        introButtonVideo4,
        introVideo5,
        endVideo,
        levelUpVideo1,
        levelUpVideo2,
        levelUpVideo3,
        levelUpVideo4,
        levelUpVideo5,
      };

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

const enableButtons = responseModality === 'touch' ? true : false;
let buttonClicked = false;
let firekit;

// console.log(responseModality);
// console.log(enableButtons);
// console.log((() => !enableButtons)());
// console.log((() => enableButtons)());
// console.log(pipeline);

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

if (participantId !== null) {
  const minimalUserInfo = { id: participantId, schoolId, studyId };

  firekit = new RoarFirekit({
    rootDoc,
    userInfo: minimalUserInfo,
    taskInfo,
  });

  await firekit.startRun();
}

const jsPsych = initJsPsych({
  on_finish: () => {
    redirect(redirectTo);
  },
});

const preload = {
  type: jsPsychPreload,
  video: [
    videos.introVideo1,
    videos.introVideo2,
    videos.introVideo3,
    videos.introVideo4,
    videos.introVideo5,
    videos.endVideo,
    videos.levelUpVideo1,
    videos.levelUpVideo2,
    videos.levelUpVideo3,
    videos.levelUpVideo4,
    videos.levelUpVideo5,
  ],
};

const preloadAudio = {
  type: jsPsychPreload,
  audio: [feedbackCorrect, feedbackIncorrect],
};

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

const ifGetPid = {
  timeline: [getPid],
  conditional_function: function () {
    return !participantId;
  },
  on_timeline_finish: async () => {
    const minimalUserInfo = { id: participantId, schoolId, classId, studyId };

    firekit = new RoarFirekit({
      rootDoc,
      userInfo: minimalUserInfo,
      taskInfo,
    });

    await firekit.startRun();
  },
};

// Add a special error handler that writes javascript errors to a special trial
// type in the Firestore database
window.addEventListener('error', (e) => {
  const { msg, url, lineNo, columnNo, error } = e;

  firekit?.writeTrial({
    task: 'error',
    lastTrial: jsPsych.data.getLastTrialData().trials[0],
    message: String(msg),
    source: url || null,
    lineNo: String(lineNo || null),
    colNo: String(columnNo || null),
    error: JSON.stringify(error || null),
    timeStamp: new Date().toISOString(),
  });
});

const welcome = {
  type: htmlKeyboardResponse,
  on_start: () => (document.body.style.backgroundColor = 'gray'),
  stimulus:
    '<p style="font-size:48px; color:green;">Welcome to honey hunt! </p>',
  choices: 'NO_KEYS',
  trial_duration: 500,
};

// ---------Create instructions - interactive---------
const intro1 = {
  type: videoKeyboardResponse,
  stimulus: [videos.introVideo1],
  choices: 'NO_KEYS',
  trial_ends_after_video: true,
  trial_duration: null,
  width: 1238,
  height: 800,

};

//interactive training 2
const intro2 = {
  type: videoKeyboardResponse,
  stimulus: [videos.introVideo2],
  choices: 'NO_KEYS',
  trial_ends_after_video: true,
  trial_duration: null,
  width: 1238,
  height: 800,
};

const keyboard_instructions = [];

const intro3 = {
  type: videoKeyboardResponse,
  stimulus: [videos.introVideo3],
  choices: ['a'],
  response_allowed_while_playing: true,
  response_ends_trial: true,
  trial_duration: null,
  trial_ends_after_video: true,
  width: 1238,
  height: 800,
};
keyboard_instructions.push(intro3);

const intro4 = {
  type: videoKeyboardResponse,
  stimulus: [videos.introVideo4],
  choices: ['l'],
  response_allowed_while_playing: true,
  response_ends_trial: true,
  trial_duration: null,
  trial_ends_after_video: true,
  width: 1238,
  height: 800,
};
keyboard_instructions.push(intro4);

const ifKeyboardInstrutions = {
  timeline: keyboard_instructions,
  conditional_function: () => !enableButtons,
};

const loadSpaceBarTapDiv = () => {
  const video = document.getElementById(
    'jspsych-video-keyboard-response-stimulus'
  );

  if (document.getElementById('space-bar-tap') === null) {
    const tapDiv = document.createElement('div');
    tapDiv.id = 'space-bar-tap';
    tapDiv.onclick = () => {
      buttonClicked = true;
      pressKey(' ');
    };
    video.insertAdjacentElement('afterend', tapDiv);
  }
};

const loadPracticeDivs = () => {
  const video = document.getElementById(
    'jspsych-video-keyboard-response-stimulus'
  );

  if (document.getElementById('rdk-practice-image-left') === null) {
    const leftImg = document.createElement('div');
    leftImg.id = 'rdk-practice-image-left';
    leftImg.onclick = () => {
      buttonClicked = true;
      pressKey('a');
    };
    video.insertAdjacentElement('afterend', leftImg);
  }

  if (document.getElementById('rdk-practice-image-right') === null) {
    const rightImg = document.createElement('div');
    rightImg.id = 'rdk-practice-image-right';
    rightImg.onclick = () => {
      buttonClicked = true;
      pressKey('l');
    };
    video.insertAdjacentElement('afterend', rightImg);
  }
};

const button_instructions = [];

const introButton3 = {
  type: videoKeyboardResponse,
  stimulus: [videos.introButtonVideo3],
  choices: ['l'],
  response_allowed_while_playing: true,
  response_ends_trial: true,
  trial_duration: null,
  trial_ends_after_video: true,
  width: 1238,
  height: 800,
  on_load: loadPracticeDivs,
};
button_instructions.push(introButton3);

const introButton4 = {
  type: videoKeyboardResponse,
  stimulus: [videos.introButtonVideo4],
  choices: ['a'],
  response_allowed_while_playing: true,
  response_ends_trial: true,
  trial_duration: null,
  trial_ends_after_video: true,
  width: 1238,
  height: 800,
  on_load: loadPracticeDivs,
};
button_instructions.push(introButton4);

const ifButtonInstrutions = {
  timeline: button_instructions,
  conditional_function: () => enableButtons,
};

const intro5 = {
  type: videoKeyboardResponse,
  stimulus: [videos.introVideo5],
  choices: [' '],
  response_allowed_while_playing: true,
  response_ends_trial: true,
  trial_duration: null,
  trial_ends_after_video: false,
  on_load: loadSpaceBarTapDiv,
  width: 1238,
  height: 800,
};

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
    leftImg.src = treeLeft;
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
    rightImg.src = treeRight;
    if (enableButtons) {
      rightDiv.onclick = () => {
        buttonClicked = true;
        pressKey('l');
      };
    }
    contentDiv.insertAdjacentElement('afterend', rightDiv);
  }
};

const removeImages = () => {
  const rightImg = document.getElementById('rdk-image-right');
  const leftImg = document.getElementById('rdk-image-left');
  if (rightImg !== null) {
    rightImg.parentNode.removeChild(rightImg);
  }
  if (leftImg !== null) {
    leftImg.parentNode.removeChild(leftImg);
  }
};

// Multitudes users were having an issue with the fixation cross centering
// We're still not sure why but for now, we hard-code a correction only for
// multitudes users.
let aperture_center_x = window.outerWidth / 2;
let aperture_center_y = window.outerHeight / 2;
if (pipeline === 'multitudes') {
  aperture_center_x = 1920 / 2;
  aperture_center_y = 1080 / 2;
}

// ---------Create trials---------
function rdkWriteTrial(data) {
  // eslint-disable-next-line no-param-reassign, eqeqeq
  data.accuracy = data.correct_choice == data.response;
  data.schoolId = schoolId;
  data.classId = classId;
  data.participant = participantId;
  data.condition = jsPsych.timelineVariable('condition');
  data.buttonClicked = buttonClicked;
  firekit.writeTrial(data);
  buttonClicked = false;

  playFeedbackAudio(data.accuracy)
}

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

// Copied camelCase from preload.js
export const camelCase = (inString) =>
  inString.replace(/_([a-z])/g, (g) => g[1].toUpperCase());

// Copied preloadObj2contentObj from preload.js
const preloadObj2contentObj = (preloadObj) => {
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

// Copied audioBlocks from preload.js
const audioBlocks = {
  3: [feedbackCorrect, feedbackIncorrect],
};

// Automatically populate the audioContent object with the audio files
// Copied audioContent from preload.js
export const audioContent = preloadObj2contentObj(audioBlocks);

const playFeedbackAudio = (responseIsCorrect) => {
  if (responseIsCorrect) {
    new Audio(audioContent.feedbackCorrect).play()
  } else {
    new Audio(audioContent.feedbackIncorrect).play()
  }
}


// Inter block interval image
const IBI1 = {
  type: videoKeyboardResponse,
  stimulus: [videos.levelUpVideo1],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  trial_duration: null,
  on_load: () => {
    removeImages();
    loadSpaceBarTapDiv();
  },
  width: 1238,
  height: 800,
};

const IBI2 = {
  type: videoKeyboardResponse,
  stimulus: [videos.levelUpVideo2],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  trial_duration: null,
  on_load: () => {
    removeImages();
    loadSpaceBarTapDiv();
  },
  width: 1238,
  height: 800,
};

const IBI3 = {
  type: videoKeyboardResponse,
  stimulus: [videos.levelUpVideo3],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  trial_duration: null,
  on_load: () => {
    removeImages();
    loadSpaceBarTapDiv();
  },
  width: 1238,
  height: 800,
};

const IBI4 = {
  type: videoKeyboardResponse,
  stimulus: [videos.levelUpVideo4],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  on_load: () => {
    removeImages();
    loadSpaceBarTapDiv();
  },
  width: 1238,
  height: 800,
};

const IBI5 = {
  type: videoKeyboardResponse,
  stimulus: [videos.levelUpVideo5],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  trial_duration: null,
  on_load: () => {
    removeImages();
    loadSpaceBarTapDiv();
  },
  width: 1238,
  height: 800,
};

const IBIEnd = {
  type: videoKeyboardResponse,
  stimulus: [videos.endVideo],
  response_allowed_while_playing: true,
  trial_ends_after_video: true,
  choices: [' '],
  trial_duration: null,
  on_load: () => {
    removeImages();
    loadSpaceBarTapDiv();
  },
  width: 1238,
  height: 800,
  on_finish: async () => {
    await firekit.finishRun();
  },
};

// ---------Prepare the main timeline---------
const PracticeProcedure = {
  timeline: [practiceBlock],
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
    timeline: [testBlock],
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

timeline.push(preload);
timeline.push(preloadAudio);
timeline.push(ifGetPid);

// store info about the experiment session:
timeline.push({
  type: fullScreen,
  fullscreen_mode: true,
  delay_after: 450
});

timeline.push(welcome);
timeline.push(intro1);
timeline.push(intro2);
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

// ---------Run the experiment---------
jsPsych.run(timeline);
