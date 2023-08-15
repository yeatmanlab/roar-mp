import ROARMP from "../src/index"
import { RoarAppkit, initializeFirebaseProject } from '@bdelab/roar-firekit';
import { roarConfig } from "./firebaseConfig.js";
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth'

// Import necessary for async in the top level of the experiment script
import "regenerator-runtime/runtime.js";

//@ts-ignore
export const queryString = new URL(window.location).search;
export const urlParams = new URLSearchParams(queryString);
export const pid = urlParams.get('participant') || null;
export const studyId = urlParams.get('studyId') || null;
export const classId = urlParams.get('classId') || null;
export const schoolId = urlParams.get('schoolId') || null;
export const labId = urlParams.get('labId') || null;
export const userMode = urlParams.get('mode') || "default";
export const redirectTo = urlParams.get('redirectTo') || null;
export const pipeline = urlParams.get('pipeline') || 'rc';
export const language = urlParams.get('language') || 'en';
export const responseModality = urlParams.get('responseModality') || 'touch';
export const enableButtons = responseModality === 'touch' ? true : false;

/* 4 modes
default: no-survey + story (if < grade 6) and no-story (if >= grade 6)
demo: survey + story all grades
story: no-survey + story all grades
nostory: no-survey + no-story all grades
 */
const taskVariant = urlParams.get('variant') || "pilot";
const consent = urlParams.get('consent') || true;
const grade = urlParams.get('grade') || null;
// TODO: change url parameters
const skipInstructions = urlParams.get('skip');

// @ts-ignore
const appKit = await initializeFirebaseProject(roarConfig.firebaseConfig, 'assessmentApp', 'none');

onAuthStateChanged(appKit.auth, (user) => {
  if (user) {
    const userInfo = {
      assessmentPid: pid,
      assessmentUid: user.uid,
      userMetadata: {
        classId,
        schoolId,
        districtId: '',
        studyId,
      },
    };

    const userParams = {
      pid,
      labId,
      grade,
    }

    const gameParams = {
      userMode,
      taskVariant,
      skipInstructions,
      consent,
    };

    const taskInfo = {
      taskId: 'mp',
      variantParams: gameParams,
    }

    const firekit = new RoarAppkit({
      firebaseProject: appKit,
      taskInfo,
      userInfo,
    })

    const roarApp = new ROARMP(firekit, gameParams, userParams);
    roarApp.run();

  }
});

await signInAnonymously(appKit.auth);