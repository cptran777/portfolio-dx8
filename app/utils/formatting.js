/*
 * The formatting utils are functions that are used to assist in the formatting
 * of information
 */

const capitalize = function(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export default {
  capitalize
};
