/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 
because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/


function getIndexToIns(arr, num) {
    //First sort the array- in ascending order - with a comparator method
    let sortedArr = arr.sort(function(a,b){return a - b});
    
    //Next Loop through the array to find the index(i) where the num variable is less than or equal to the value at that index.
    //Return the index number
    for(let i = 0; i < sortedArr.length; i++){
      if(num <= sortedArr[i]){
        return i;
      }
    }
    //If nothing returns above then num must be bigger than all the numbers.
    //So just return the array length.
    return sortedArr.length;
  }
  
  getIndexToIns([40, 60], 50);