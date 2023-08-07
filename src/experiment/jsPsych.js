import { initJsPsych } from "jspsych";
import i18next from "i18next";
import './i18n.js';
import store from "store2";


// ROAR apps communicate with the participant dashboard by passing parameters
// through the URL. The dashboard can be made to append a "gameId"
// parameter, e.g., https://my-roar-app.web.app?gameId=1234.
// Similarly, at the end of the assessment the ROAR app communicates with the
// dashboard to let it know that the participant has finished the assessment.
// The dashboard expects a game token, "g", and a completion
// status, "c", e.g., https://reading.stanford.edu/?g=1234&c=1. Here we inspect
// the "gameId" parameter that was passed through the URL query string and
// construct the appropriate redirect URL.


// Redirects users to proper page based on parameters
const redirect = () => {
    const config = store.session.get('config')

    if (config.gameToken === null) {
        if (config.taskVariant === "school") {
        window.location.href = `https://reading.stanford.edu?g=1265&c=1`;
        } else {
        window.location.href = `https://roar.stanford.edu`; }
    } else {
        // Else, redirect back to the dashboard with the game token that
        // was originally provided
        window.location.href = `https://reading.stanford.edu/?g=${config.gameToken}&c=1`;
    }
};

export const jsPsych = initJsPsych({
  show_progress_bar: false,
  auto_update_progress_bar: false,
  message_progress_bar: `${i18next.t('progressBar')}`,
  on_finish: () => {
    redirect();
  },
});