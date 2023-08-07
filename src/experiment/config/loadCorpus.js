import i18next from "i18next";
import "../i18n";
import { sentenceList } from "../i18n";


const csvAssets = {
  practice: sentenceList[i18next.language].corpusPractice,
  lab: sentenceList[i18next.language].corpusLab,
  ai: sentenceList[i18next.language].corpusAI,
  tosrec: sentenceList[i18next.language].corpusTOSREC,
};

// function to transform .csv for practice sentences
const transformCSVp = (csvInput) => csvInput.reduce((accum, row) => {
  const newRow = {
    sentence: row.sentence,
    answer: row.answer,
    correct_response: row.correctresponse
  };
  accum.push(newRow);
  return accum;
}, []);

// function to transform .csv for lab/amy's sentences + anya's ai sentences
const transformCSVlab = (csvInput) => csvInput.reduce((accum, row) => {
  const newRow = {
    sentence: row.sentence,
    direction: row.direction,
    answer: row.answer,
    difficulty: row.difficulty,
    itemId: row.itemId,
  };
  accum.push(newRow);
  return accum;
}, []);

// function to transform .csv for tosrec sentences
const transformCSVt = (csvInput) => csvInput.reduce((accum, row) => {
  const newRow = {
    sentence: row.sentence,
    grade: row.grade,
    direction: row.direction,
    answer: row.answer,
    itemId: row.itemId,
  };
  accum.push(newRow);
  return accum;
}, []);

const shuffle = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    // use "destructuring assignment" syntax
    // eslint-disable-next-line no-param-reassign
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// eslint-disable-next-line import/prefer-default-export
export const corpus = {
  practice: transformCSVp(csvAssets.practice),
  lab: transformCSVlab(csvAssets.lab),
  ai: shuffle(transformCSVlab(csvAssets.ai)).slice(0,130),
  tosrec1: transformCSVt(csvAssets.tosrec).filter((row) => row.grade === 1),
  tosrec2: transformCSVt(csvAssets.tosrec).filter((row) => row.grade === 2),
  tosrec3: transformCSVt(csvAssets.tosrec).filter((row) => row.grade === 3),
  tosrec4: transformCSVt(csvAssets.tosrec).filter((row) => row.grade === 4),
  tosrec5: transformCSVt(csvAssets.tosrec).filter((row) => row.grade === 5),
  tosrec6: transformCSVt(csvAssets.tosrec).filter((row) => row.grade === 6),
  tosrec7: transformCSVt(csvAssets.tosrec).filter((row) => row.grade === 7),
  tosrec8: transformCSVt(csvAssets.tosrec).filter((row) => row.grade === 8),
};
