import { generateAssetObject, createPreloadTrials } from "@bdelab/roar-utils";
import assets from '../../assets.json'
import 'regenerator-runtime/runtime';

const bucketURI = 'https://storage.googleapis.com/roar-mp' // TODO: separate buckets into "spanish" and "english" variants

export let mediaAssets = generateAssetObject(assets, bucketURI)