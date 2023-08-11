import store from "store2";
import { getUserDataTimeline } from '../trials/getUserData';
import _omitBy from "lodash/omitBy.js";
import _isNull from "lodash/isNull.js";
import _isUndefined from "lodash/isUndefined.js";
import { jsPsych } from "../jsPsych";
import { RoarScores } from "../scores";

// Add this function to create random pid used for demo version later // TO DO: Make a random ID for the demo mode
const makePid = () => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  // eslint-disable-next-line max-len
  for (let i = 0; i < 16; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)); }
  return text;
};

export const initStore = () => {
  if (store.session.has("initialized") && store.local("initialized")) {
    return store.session;
  }
  store.session.set("practiceIndex", 0);
  // Counting variables
  store.session.set("currentBlockIndex", 0);
  store.session.set("trialNumBlock", 0); // counter for trials in block
  store.session.set("trialNumTotal", 0); // counter for trials in experiment
  store.session.set("demoCounter", 0);
  store.session.set("nextStimulus", null);
  store.session.set("response", "");
  store.session.set("dataCorrect", "");
  store.session.set("keyResponse", "");
  store.session.set("gradeKeyResponse", []);
 store.session.set("currentCorpus", []);

  // variables to track current state of the experiment
  store.session.set("currentTrialCorrect", true); // return true or false
  store.session.set("coinTrackingIndex", 0);

  store.session.set("initialized", true);

  return store.session;
};


export const initConfig = async (firekit, params, displayElement) => {
  const cleanParams = _omitBy(_omitBy(params, _isNull), _isUndefined);

  const { userMode,
    pid, 
    labId, 
    taskVariant, 
    userMetadata, 
    urlParams,
    consent,
    language,
    skipInstructions,
    grade,
  } = cleanParams

  let prefix = null;
  if (pid) {
    prefix = pid.split("-")[0];
    if ((prefix === pid) || (taskVariant !== 'school')) {
      prefix = null;
    }
  }

  const config = {
    pid,
    labId,
    userMode,
    taskVariant: taskVariant || 'pilot',
    consent: consent || true,
    userMetadata: {grade: grade},
    startTime: new Date(),
    urlParams: urlParams,
    firekit,
    language,
    skipInstructions: skipInstructions || true,
    displayElement: displayElement || null,
  };

  if (config.pid !== null) {
    await config.firekit.updateUser({ assessmentPid: config.pid, ...userMetadata });
  }

  return config;
}

export const initRoarJsPsych = (config) => {
  if (config.displayElement) {
    jsPsych.opts.display_element = config.displayElement
  }

  // Extend jsPsych's on_finish and on_data_update lifecycle functions to mark the
  // run as completed and write data to Firestore, respectively.
  const extend = (fn, code) =>
      function () {
        // eslint-disable-next-line prefer-rest-params
        fn.apply(fn, arguments);
        // eslint-disable-next-line prefer-rest-params
        code.apply(fn, arguments);
      };

  jsPsych.opts.on_finish = extend(jsPsych.opts.on_finish, () => {
    config.firekit.finishRun();
    if (config.experimentFinished) {
      config.experimentFinished()
    }
  });

  const roarScores = new RoarScores();
  jsPsych.opts.on_data_update = extend(jsPsych.opts.on_data_update, (data) => {
    if (data.save_trial) {
      config.firekit.writeTrial(
        data,
        roarScores.computedScoreCallback.bind(roarScores),
      );
    }
  });

  // Add a special error handler that writes javascript errors to a special trial
  // type in the Firestore database
  window.addEventListener('error', (e) => {
    const { msg, url, lineNo, columnNo, error } = e;

    config.firekit?.writeTrial({
      assessment_stage: 'error',
      lastTrial: jsPsych.data.getLastTrialData().trials[0],
      message: String(msg),
      source: url || null,
      lineNo: String(lineNo || null),
      colNo: String(columnNo || null),
      error: JSON.stringify(error || null),
      timeStamp: new Date().toISOString(),
    });
  });

  initStore(config);
};

export const initRoarTimeline = (config) => {
  const beginningTimeline = {
    timeline: getUserDataTimeline,
    on_timeline_finish: async () => {
      // eslint-disable-next-line no-param-reassign
      config.pid = config.pid || makePid();
      await config.firekit.updateUser({ assessmentPid: config.pid, labId: config.labId, ...config.userMetadata });
    },
  };

  return beginningTimeline;
};

