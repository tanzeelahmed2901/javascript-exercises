/*
    You will be given a sequence of letters.
    When an uppercase and lowercase of the same letter touch, they destroy each other.
    After they have been removed, the process continues until there are no more letters reacting

    For example:
    "xYyZZX" => "xZZX"
    "aBbA" => ""
*/

function react(sequence) {
    //Loop through array and check each letter with the consecutive letter. Have a variable isUpperCase to see if the letter is upper/lowercase.
    //array[i] == array[i].toUpperCase() will see if the letter is uppercase or not, isUpperCase variable is true if it is.
    //do the same for array[i+1] as this is the consecutive letter.
    //IF Condition
    //  - Both letters are the same so array[i] == array [i+1] - Convert both to uppercase and compare them
    //  - One letter is upper case and one is lower case - Use the IsUpperCase variable to distinguish
    //
    let arr = sequence.split('')
    let finished = false;

    while(!finished){
        
        finished = true
        
        if(arr.length == 0){
            finished = true
        }

        for(let i=0; i<arr.length-1;i++){
            if (arr[i].toUpperCase() === arr[i+1].toUpperCase()){
                if(arr[i] !== arr[i+1]) {
                    finished = false
                    arr.splice(i,2)
                    break

                }
            }
        }
    }

    return arr.join('')
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.react = react
