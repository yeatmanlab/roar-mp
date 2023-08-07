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

import introVideo1 from '../../video/Honey_Hunt_Intro_1.mp4';
import introVideo2 from '../../video/Honey_Hunt_Intro_2.mp4';
import introVideo3 from '../../video/Honey_Hunt_Intro_3.mp4';
import introVideo4 from '../../video/Honey_Hunt_Intro_4.mp4';
import introButtonVideo3 from '../../video/Honey_Hunt_Intro_Button_3.mp4';
import introButtonVideo4 from '../../video/Honey_Hunt_Intro_Button_4.mp4';
import introVideo5 from '../../video/Honey_Hunt_Intro_5.mp4';
import endVideo from '../../video/Honey_Hunt_End.mp4';
import levelUpVideo1 from '../../video/Honey_Hunt_Level_Up_1.mp4';
import levelUpVideo2 from '../../video/Honey_Hunt_Level_Up_2.mp4';
import levelUpVideo3 from '../../video/Honey_Hunt_Level_Up_3.mp4';
import levelUpVideo4 from '../../video/Honey_Hunt_Level_Up_4.mp4';
import levelUpVideo5 from '../../video/Honey_Hunt_Level_Up_5.mp4';

import introVideo1Es from '../../video/Spanish_Honey_Hunt_Intro_1.mp4';
import introVideo2Es from '../../video/Spanish_Honey_Hunt_Intro_2.mp4';
import introVideo3Es from '../../video/Spanish_Honey_Hunt_Intro_3.mp4';
import introVideo4Es from '../../video/Spanish_Honey_Hunt_Intro_4.mp4';
import introButtonVideo3Es from '../../video/Spanish_Honey_Hunt_Intro_Button_3.mp4';
import introButtonVideo4Es from '../../video/Spanish_Honey_Hunt_Intro_Button_4.mp4';
import introVideo5Es from '../../video/Spanish_Honey_Hunt_Intro_5.mp4';
import endVideoEs from '../../video/Spanish_Honey_Hunt_End.mp4';
import levelUpVideo1Es from '../../video/Spanish_Honey_Hunt_Level_Up_1.mp4';
import levelUpVideo2Es from '../../video/Spanish_Honey_Hunt_Level_Up_2.mp4';
import levelUpVideo3Es from '../../video/Spanish_Honey_Hunt_Level_Up_3.mp4';
import levelUpVideo4Es from '../../video/Spanish_Honey_Hunt_Level_Up_4.mp4';
import levelUpVideo5Es from '../../video/Spanish_Honey_Hunt_Level_Up_5.mp4';
const jsPsychForURL = initJsPsych();
const language = jsPsychForURL.data.getURLVariable('language') || 'en';


export const videos =
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

const intro2 = {
  type: videoKeyboardResponse,
  stimulus: [videos.introVideo2],
  choices: 'NO_KEYS',
  trial_ends_after_video: true,
  trial_duration: null,
  width: 1238,
  height: 800,
};

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

export const introductionTrials = {
  timeline: [welcome, intro1, intro2],
}



const keyboard_instructions = []
keyboard_instructions.push(intro3)
keyboard_instructions.push(intro4)

export const ifKeyboardInstrutions = {
  timeline: keyboard_instructions,
  conditional_function: () => !enableButtons,
}



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

export const ifButtonInstrutions = {
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

export const prePractice = {
  timeline: intro5,
}