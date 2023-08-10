import store from "store2";
import { generateAssetObject, createPreloadTrials } from "@bdelab/roar-utils";
import { jsPsych } from './jsPsych';

import { initRoarJsPsych, initRoarTimeline } from "./config/config";
import assets from '../../assets.json'
// Import necessary for async in the top level of the experiment script
import 'regenerator-runtime/runtime';

const bucketURI = 'https://storage.googleapis.com/roar-mp' // TODO: separate buckets into "spanish" and "english" variants

export let mediaAssets = generateAssetObject(assets, bucketURI)
export let preloadTrials = createPreloadTrials(assets, bucketURI).default