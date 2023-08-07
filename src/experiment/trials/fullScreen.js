import jsPsychFullScreen from '@jspsych/plugin-fullscreen';
import i18next from 'i18next';
import "../i18n";
  
// Enter full screen mode
export const enterFullscreen = {
  type: jsPsychFullScreen,
  fullscreen_mode: true,
  message: `<div>
              <h1>${i18next.t("fullScreenTrial.prompt")}</h1>
            </div>`,
  css_classes: ['jspsych-content-modified'],
  button_label: () => `${i18next.t("fullScreenTrial.buttonText")}`,
};