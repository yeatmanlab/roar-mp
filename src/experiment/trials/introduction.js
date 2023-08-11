import { initJsPsych } from 'jspsych';
import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';
import videoKeyboardResponse from '@jspsych/plugin-video-keyboard-response';
import { pressKey } from '@jspsych/test-utils';
import 'jspsych/css/jspsych.css';
import 'regenerator-runtime/runtime';
import { mediaAssets } from '../loadassets';

const jsPsychForURL = initJsPsych();
const language = jsPsychForURL.data.getURLVariable('language') || 'en';
const responseModality =
  jsPsychForURL.data.getURLVariable('responseModality') || 'touch';
export const enableButtons = responseModality === 'touch' ? true : false;
let buttonClicked = false;

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

export const welcome = {
  type: htmlKeyboardResponse,
  on_start: () => (document.body.style.backgroundColor = 'gray'),
  stimulus:
    '<p style="font-size:48px; color:green;">Welcome to honey hunt! </p>',
  choices: 'NO_KEYS',
  trial_duration: 500,
};

// ---------Create instructions - interactive---------
const introTrialData = [{ stimulus: mediaAssets.video.honeyHuntIntro1 }, { stimulus: mediaAssets.video.honeyHuntIntro2 }]

export const introTrialsMapped = introTrialData.map(trial => (
  {
    type: videoKeyboardResponse,
    stimulus: () => [trial.stimulus],
    choices: 'NO_KEYS',
    trial_ends_after_video: true,
    trial_duration: null,
    width: 1238,
    height: 800,
  }));

const intro3 = {
  type: videoKeyboardResponse,
  stimulus: [mediaAssets.video.honeyHuntIntro3],
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
  stimulus: [mediaAssets.video.honeyHuntIntro4],
  choices: ['l'],
  response_allowed_while_playing: true,
  response_ends_trial: true,
  trial_duration: null,
  trial_ends_after_video: true,
  width: 1238,
  height: 800,
};

const keyboard_instructions = []
keyboard_instructions.push(intro3)
keyboard_instructions.push(intro4)

export const ifKeyboardInstrutions = {
  timeline: keyboard_instructions,
  conditional_function: () => !enableButtons,
}

const introButton3 = {
  type: videoKeyboardResponse,
  stimulus: [mediaAssets.video.honeyHuntIntroButton3],
  choices: ['l'],
  response_allowed_while_playing: true,
  response_ends_trial: true,
  trial_duration: null,
  trial_ends_after_video: true,
  width: 1238,
  height: 800,
  on_load: loadPracticeDivs,
};


const introButton4 = {
  type: videoKeyboardResponse,
  stimulus: [mediaAssets.video.honeyHuntIntroButton4],
  choices: ['a'],
  response_allowed_while_playing: true,
  response_ends_trial: true,
  trial_duration: null,
  trial_ends_after_video: true,
  width: 1238,
  height: 800,
  on_load: loadPracticeDivs,
};
const button_instructions = [];
button_instructions.push(introButton3);
button_instructions.push(introButton4);

export const ifButtonInstrutions = {
  timeline: button_instructions,
  conditional_function: () => enableButtons,
};

export const intro5 = {
  type: videoKeyboardResponse,
  stimulus: () => [mediaAssets.video.honeyHuntIntro5],
  choices: 'ALL_KEYS',
  response_allowed_while_playing: true,
  response_ends_trial: true,
  trial_duration: null,
  trial_ends_after_video: false,
  on_load: loadSpaceBarTapDiv,
  width: 1238,
  height: 800,
};
