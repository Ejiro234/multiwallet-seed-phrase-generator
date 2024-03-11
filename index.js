const _ = require("lodash");
const { getWordList } = require("seed-phrase-wordlist");

function generatePassPhrase() {
  try {
    return {
      12: _.sampleSize(getWordList(), 12),
      18: _.sampleSize(getWordList(), 18),
      24: _.sampleSize(getWordList(), 24),
    };
  } catch (error) {
    return error;
  }
}

module.exports = { generatePassPhrase };
