/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/


function reverseString(str) {
    let arrStr = [...str];
    let newStr = "";
    for(let i = arrStr.length-1; i >= 0; i--){
      newStr += arrStr[i];
    }
    return newStr;
  }

  reverseString("hello");