// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let cipher = alphabet.map((item,i,a) => {
      let overflow = 13;
      if(i + overflow <= 25){
        return a[i+overflow];
      } else {
        return a[i-overflow];
      }
    });
    let secret = [];
    let cipherRegex = /[A-Z]/
    
    let arrStr = str.split("")
    arrStr.forEach((item, i) => {
      if (cipherRegex.test(item)) {
        let alphaIndex = alphabet.indexOf(item)
        secret.push(cipher[alphaIndex]);
      } else {
        secret.push(item);
      }
    })
    return (secret.join(""))
    
  }
  
  rot13("SERR PBQR PNZC");