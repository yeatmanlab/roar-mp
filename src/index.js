/* eslint-disable func-names */
// npm run serve:dev
/* eslint-disable object-shorthand */
import { initJsPsych } from 'jspsych';
import surveyText from '@jspsych/plugin-survey-text';
import jsPsychPreload from '@jspsych/plugin-preload';
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
import jsPsychAudioKeyboardResponse from '@jspsych/plugin-audio-keyboard-response';

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

console.log(responseModality);
console.log(enableButtons);
console.log((() => !enableButtons)());
console.log((() => enableButtons)());
console.log(pipeline);


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


// ---------Create trials---------

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


// ---------Prepare the main timeline---------
import { enterFullscreen } from './experiment/trials/fullScreen';
import { introductionTrials, ifKeyboardInstrutions, ifButtonInstrutions, prePractice } from './experiment/trials/introduction';
import { PracticeProcedure, createMotionCohProcedure } from './experiment/trials/practice';
import { IBI1, IBI2, IBI3, IBI4, IBI5, IBIEnd } from './experiment/trials/ibi';


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

timeline.push(enterFullscreen); // TODO: add proper "do you want to enter fullscreen" message


timeline.push(introductionTrials);
timeline.push(ifKeyboardInstrutions);
timeline.push(ifButtonInstrutions);
timeline.push(prePractice);


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


import store from "store2";
import { initConfig } from "./experiment/config/config";
import { buildExperiment } from "./experiment/experiment";
import { waitFor } from "./experiment/experimentHelpers";



class RoarMP {
    constructor(firekit, gameParams, userParams, displayElement) {
      // TODO: Add validation of params so that if any are missing, we throw an error
      this.gameParams = gameParams;
      this.userParams = userParams;
      this.firekit = firekit;
      this.displayElement = displayElement;
    }
  
    async init() {
      await this.firekit.startRun();
      const config = await initConfig(
        this.firekit,
        {...this.gameParams, ...this.userParams},
        this.displayElement,
      );
      store.session.set("config", config);
      return buildExperiment(config);
    }
  
    async run() {
      const { jsPsych, timeline } = await this.init();
      jsPsych.run(timeline);
  
      await waitFor(() => this.firekit.run.completed === true);
    }
  }

export default RoarMP