'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString) {
    return result;
  }

  const rules = sourceString.split(';');

  for (const rule of rules) {
    const trimmedRule = rule.trim();

    if (!trimmedRule) {
      continue;
    }

    const [property, value] = trimmedRule.split(':').map((item) => item.trim());

    if (property && value) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
