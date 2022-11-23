/*
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

function sumTwoSmallestNumbers(nums) {

    let positiveArray = nums.filter((x)=> x >-1)
    let sortedArray = positiveArray.sort((a,b)=>a-b)
    return sortedArray[0]+sortedArray[1]
  
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.sumTwoSmallestNumbers = sumTwoSmallestNumbers