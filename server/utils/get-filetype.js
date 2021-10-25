/**
 * gets filetype from full filename
 *
 * @param {string} fileName
 * @returns {string} - file type as string
 */
module.exports = function (fileName) {
  const split = fileName.split('.');
  return split[split.length - 1];
};
