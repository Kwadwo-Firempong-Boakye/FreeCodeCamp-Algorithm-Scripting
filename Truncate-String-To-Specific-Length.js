/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/


//Using the slice method on str and ternary operator
function truncateString(str, num) {
    let slicedStr = "";
    return (str.length > num) ? slicedStr = str.slice(0, num) + "..." : str
  }

  truncateString("A-tisket a-tasket A green and yellow basket", 8);


  //Using splice method

  function truncateString2(str, num) {
    //convert str to an array because splice method only works on arrays
    let strArr = [...str];
    //use splice on new array to truncate array and store in new spliced array variable
    let splicedStrArr = strArr.splice(0, num);
    //loop through spliced array to re-assemble to new string or use toString() method if the string is longer than the set limit num
    let splicedStr = ""
    if(str.length > num){
        for(let i = 0; i < splicedStrArr.length; i++){
        splicedStr += splicedStrArr[i];
        }
    } else {
        return str;
    }
    //create final string by adding "..." to splicedStr
    let finalStr = splicedStr + "...";
    return finalStr;
  }

  truncateString("A-tisket a-tasket A green and yellow basket", 8);

