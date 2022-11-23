/*
    Take every 2nd char from the string, then the other chars that are not every 2nd char, and concat them as new String.
    Do this n times

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "abababab", 1 => "bbbbaaaa"
    "abababab", 2 => "bbaabbaa"
    
*/

function encrypt(text, n) {

    if (!text || n <=0){
        return text;
    }

    while(n--){
        let ans = ''
        for (let i=1; i<text.length;i+=2){
            ans+=text[i]
        }

        for (let i = 0; i<text.length; i+=2){
            ans+=text[i]
        }
        text = ans;
    }
    return text
    
}

/*
    Now write a function to decrypt the encrypted strings

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "bbbbaaaa", 1 => "abababab"
    "bbaabbaa", 2 => "abababab"
*/

function decrypt(cipherText, n) {
    if (!cipherText || n <= 0) return cipherText;
  const ans = new Array(cipherText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = cipherText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = cipherText[j++];
    }
    cipherText = ans.join('');
  }
  return cipherText;
    
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.encrypt = encrypt
window.solutions.decrypt = decrypt