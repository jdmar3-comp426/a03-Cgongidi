import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let getSum = array.reduce(function (total, cur) {return total + cur;})
    return getSum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let half = Math.floor(array.length / 2),
    sort = [...array].sort((a, b) => a - b);
    let median = array.length % 2 !== 0 ? sort[half] : (sort[half - 1] + sort[half]) / 2;   
    return median
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    const statisticsObj = new Object();
    let mean = getSum(array)/array.length;
    let variance = variance(array, mean);
    statisticsObj.length = array.length;
    statisticsObj.sum = getSum(array);
    statisticsObj.mean = mean;
    statisticsObj.median = getMedian(array);
    statisticsObj.min = array[0];
    statisticsObj.max = array[array.length-1];
    statisticsObj.variance = variance(array, mean);
    statisticsObj.standard_deviation = Math.sqrt(variance);
    return obj;
}

