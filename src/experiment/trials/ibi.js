import i18next from "i18next";
import { mediaAssets } from "../experimentHelpers";
import videoKeyboardResponse from '@jspsych/plugin-video-keyboard-response';

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

const ibTrialData = [{ stimulus: mediaAssets.video.honeyHuntLevelUp1 },
  { stimulus: mediaAssets.video.honeyHuntLevelUp2 }, { stimulus: mediaAssets.video.honeyHuntLevelUp3 },
  { stimulus: mediaAssets.video.honeyHuntLevelUp4 }, { stimulus: mediaAssets.video.honeyHuntLevelUp5 }]

export const trialsMapped = ibTrialData.map(trial => (
  {
    type: videoKeyboardResponse,
    stimulus: () => [trial.stimulus],
    prompt: () => i18next.t("stimulusPrompt"),
    choices: [' '],
    response_allowed_while_playing: true,
    trial_duration: null,
    on_load: () => {
      removeImages();
      loadSpaceBarTapDiv();
    },
    width: 1238,
    height: 800,
  }));

export const IBIEnd = {
  type: videoKeyboardResponse,
  stimulus: () => [mediaAssets.video.honeyHuntEnd],
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
};