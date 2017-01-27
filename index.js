/**
 * Shorten number to thousands, millions, billions, etc.
 * http://en.wikipedia.org/wiki/Metric_prefix
 * http://stackoverflow.com/a/28608086
 *
 * @param {number} num Number to shorten.
 * @param {number} [digits=0] The number of digits to appear after the decimal point.
 * @returns {string|number}
 *
 * @example
 * shortenLargeNumber(12543, 1)
 * // returns '12.5k'
 *
 * @example
 * shortenLargeNumber(-12567)
 * // returns '-13k'
 *
 * @example
 * shortenLargeNumber(51000000)
 * // returns '51M'
 *
 * @example
 * shortenLargeNumber(651)
 * // returns 651
 *
 * @example
 * shortenLargeNumber(0.12345)
 * // returns 0.12345
 */
const shortenLargeNumber(num = 0, digits = 1) {
  const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  let decimal;

  for (let i = units.length - 1; i >= 0; i--) {
    decimal = Math.pow(1000, i + 1);

    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i];
    }
  }

  return num;
};

export const sln = shortenLargeNumber
export default shortenLargeNumber;
