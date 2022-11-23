/*
    Write a function which will reverse the vowels in a string.
    Any characters which are not vowels should remain in their original position,
    i.e. only swap pairs of vowels - but they may not be at matching indexes!

    For example:
    "Tomatoes" => "Temotaos"
*/

function reverseVowels(reverseMe) {
    const arr = reverseMe.split("");

  let left = 0, right = arr.length;

  const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']

  while (left < right) {
    if (vowels.indexOf(arr[left]) === -1) {
      left++;
      continue;
    }
    if (vowels.indexOf(arr[right]) === -1) {
      right--;
      continue;
    }

    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr.join("")
    
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.reverseVowels = reverseVowels