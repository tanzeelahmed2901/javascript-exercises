/*
    return the only unique number from an array.
    All numbers in the input array are present twice, except for one.

    Example:
    In the array [ 1, 8, 4, 4, 6, 1, 8 ], all numbers are present twice except 6
    You should return 6
*/

function findUnique(input) {

    // Iterate over every element
    for (let i = 0; i < input.length; i++) {
 
        // Initialize count to 0
        let count = 0;
 
        for (let j = 0; j < input.length; j++) {
 
            // Count the frequency
            // of the element
            if (input[i] == input[j]) {
                count++;
            }
        }
 
        // if the frequency of the
        // element is one
        if (count == 1) {
            return input[i];
        }
    }
 
    // if no element exist at most once
    return -1;
    
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.findUnique = findUnique