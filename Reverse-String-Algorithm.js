function reverseString(str) {
    let arrStr = [...str];
    let newStr = "";
    for(let i = arrStr.length-1; i >= 0; i--){
      newStr += arrStr[i];
    }
    return newStr;
  }

  reverseString("hello");