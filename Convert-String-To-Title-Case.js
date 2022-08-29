/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/


function titleCase(str) {
//First set the string to lowercase & convert the string into an array
 let lowerCaseStr = str.toLowerCase();
 let lowerCaseArr = lowerCaseStr.split(" ");
 
//Next create storage variables for your new title-cased-string(s)
 let titleCaseStr = "";
 let finalStr="";
 
 //This deals with words. Loop through the outer-array to set the first index (index 0) of each array element to uppercase & add it to the storage variable
 for(let i = 0; i < lowerCaseArr.length; i++){
   titleCaseStr += lowerCaseArr[i][0].toUpperCase();

//This deals with letters. Loop through the inner-array to add the second index onwards( index 1 - index infinity) to the storage variable.
   for(let j = 1; j < lowerCaseArr[i].length; j++){
     titleCaseStr += lowerCaseArr[i][j];
   }

//Add a space between each word at the end of each inner loop.
   titleCaseStr += " ";
 }
 
 //slice of the last space after the last word and return the final variable.
 finalStr = titleCaseStr.slice(0, titleCaseStr.length-1);
 return finalStr;
}

titleCase("I'm a little tea pot");