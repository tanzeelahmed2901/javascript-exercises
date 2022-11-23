/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/

function isSortedAndHow(nums) {
    let isAscending
    let isDescending
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i + 1] == undefined) {
        break;
      }
      if (nums[i] < nums[i + 1]) {
        isAscending = true
      } else if (nums[i] > nums[i + 1]) {
        isDescending = true
      }
    }
  
    return isAscending && isDescending ? "no" : isAscending ? "yes, ascending" : "yes, descending"
  }

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow