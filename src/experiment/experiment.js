// npm run serve:dev
import { jsPsych } from './jsPsych';
import 'jspsych/css/jspsych.css';
import 'regenerator-runtime/runtime';
import jsPsychPavlovia from '../jsPsychPavlovia';
import '../css/custom.css';
import store from 'store2';
import { initRoarJsPsych, initRoarTimeline } from './config/config';

// Set up all experiment related info here
import { preloadTrials, PracticeProcedure, createMotionCohProcedure, mediaAssets } from './experimentHelpers';
import { pid } from '../../serve/serve';
import 'regenerator-runtime/runtime';

// Audio files

// ---------Prepare the main timeline---------
import { enterFullscreen } from './trials/fullScreen';
import { welcome, introTrialsMapped, ifKeyboardInstrutions, ifButtonInstrutions, intro5 } from './trials/introduction';
import { trialsMapped, IBIEnd } from './trials/ibi';


export function buildExperiment(config) {
  store.session.set("buttonClicked", false);
  
  initRoarJsPsych(config);
  const initialTimeline = initRoarTimeline(config);
  const timeline = [preloadTrials, ...initialTimeline.timeline]
  const isOnPavlovia = window.location.href.includes('run.pavlovia.org');
  if (isOnPavlovia) {
    const pavloviaInit = {
      type: jsPsychPavlovia,
      command: 'init',
    };
    timeline.push(pavloviaInit);
  }

  timeline.push(welcome);
  timeline.push(introTrialsMapped[0]);
  timeline.push(introTrialsMapped[1]);
  timeline.push(ifKeyboardInstrutions);
  timeline.push(ifButtonInstrutions);
  timeline.push(intro5);
  timeline.push(PracticeProcedure);
  timeline.push(trialsMapped[0]);
  timeline.push(createMotionCohProcedure(0));
  timeline.push(trialsMapped[1]);
  timeline.push(createMotionCohProcedure(1));
  timeline.push(trialsMapped[2]);
  timeline.push(createMotionCohProcedure(2));
  timeline.push(trialsMapped[3]);
  timeline.push(createMotionCohProcedure(3));
  timeline.push(trialsMapped[4]);
  timeline.push(createMotionCohProcedure(4));
  timeline.push(IBIEnd);

  /* finish connection with pavlovia.org */
  if (isOnPavlovia) {
    const pavloviaFinish = {
      type: jsPsychPavlovia,
      command: 'finish',
      pid,
    };
    timeline.push(pavloviaFinish);
  }
  return {timeline, jsPsych}
};

  // const taskInfo = {
  //   taskId: 'honey-hunt',
  //   taskName: 'Honey Hunt',
  //   variantName: language === 'en' ? 'default' : 'default-es',
  //   taskDescription:
  //     "In this game participants are on a trip to the moon and galaxy of stars are on their way pushing them to the left or right. To advance, participants are asked to report which way the galaxy of stars moving. They can move towards the left or right and participants need to determine which way the stars are going by pressing 'a' for left and 'l' for right.",
  //   variantDescription: 'Default',
  //   blocks: [
  //     {
  //       blockNumber: 1,
  //       trialMethod: '96% coherence',
  //       corpus: 'RDK',
  //     },
  //     {
  //       blockNumber: 2,
  //       trialMethod: 'repeat',
  //       corpus: 'RDK',
  //     },
  //     {
  //       blockNumber: 3,
  //       trialMethod: 'repeat',
  //       corpus: 'RDK',
  //     },
  //     {
  //       blockNumber: 4,
  //       trialMethod: 'repeat',
  //       corpus: 'RDK',
  //     },
  //     {
  //       blockNumber: 5,
  //       trialMethod: 'repeat',
  //       corpus: 'RDK',
  //     },
  //   ],
  // };