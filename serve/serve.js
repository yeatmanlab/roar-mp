import ROARMP from "../src/index"
import { RoarAppkit, initializeFirebaseProject } from '@bdelab/roar-firekit';
import { roarConfig } from "./firebaseConfig.js";
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth'

// Import necessary for async in the top level of the experiment script
import "regenerator-runtime/runtime.js";

//@ts-ignore
const queryString = new URL(window.location).search;
const urlParams = new URLSearchParams(queryString);
const pid = urlParams.get('participant') || null;
const studyId = urlParams.get('studyId') || null;
const classId = urlParams.get('classId') || null;
const schoolId = urlParams.get('schoolId') || null;
const labId = urlParams.get('labId') || null;
const userMode = urlParams.get('mode') || "default";
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