/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/


function confirmEnding(str, target) {

    //confirm the presence of target inside str using the indexOf(search-value, search-index-to-start) method.
    //also let indexOf method begin searching at the point in the string, where the length of the target has been subtracted from the length of the string.
    
    let testIndex = str.indexOf(target, str.length - target.length);
  
    // If your check does not present a negative number, then voila! Target is at the end of str.
    if (testIndex >= 0){
      return true;
    } else {
      return false
    }
  }