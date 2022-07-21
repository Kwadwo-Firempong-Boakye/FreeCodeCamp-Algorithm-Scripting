/*
Return true if the string in the first element of the array,
contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true,
because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/


function mutation(arr) {
    //First turn both array elements into strings.
    //Remember that we are checking if all the characters in arr's second element are inside arr's first element
    let str0 = arr[0];
    let str1 = arr[1];
    
  //Create a loop to look through all the letters of str1(the string version of the second array element)
  //Use the RegExp Constructor to make the characters of str1, a regex value we can test for in str0
  //If any of the tests are not true, it means one or more of the characters in str1 is/are not in str0.
  //Hence Return false. Otherwise if nothing is false then, all of str1's characters are present in str return true
    for(let i = 0; i < str1.length; i++){
      if(new RegExp(str1[i], "i").test(str0) != true){
        return false;
      } 
    }
    return true;
  }
  
  mutation(["hello", "hey"]);