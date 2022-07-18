function repeatStringNumTimes(str, num) {
    let repeatedString  =  "";
    if(num > 0){
      for(let i  = 1; i <= num; i++){
        repeatedString += str;
      }
    }
    return repeatedString
  }
  
  repeatStringNumTimes("abc", 3);