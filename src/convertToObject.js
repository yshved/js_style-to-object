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

  rules.forEach((rule) => {
    const trimmedRule = rule.trim();

    if (!trimmedRule) {
      return;
    }

    const [property, value] = trimmedRule.split(':').map((item) => item.trim());

    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
