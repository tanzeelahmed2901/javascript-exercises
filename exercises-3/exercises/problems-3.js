/*
    The goal of this exercise is to convert a string to a new string where each character in the new string is "("
    if that character appears only once in the original string, or ")" if that character appears more than once in
    the original string. Ignore capitalization when determining if a character is a duplicate.

    For example:
    "recede"   =>  "()()()"
*/

function duplicateEncode(word) {
    let newString = '';
    const lowerCase = word.toLowerCase();
    [...lowerCase].forEach((e, i) => {
   if (lowerCase.indexOf(e) !== i) {
      newString += ')';
    } else if (lowerCase.lastIndexOf(e) !== i ) {
      newString += ')';
    } else newString += '(';
  });
  return newString;
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.duplicateEncode = duplicateEncode