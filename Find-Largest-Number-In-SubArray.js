/*
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/


function largestOfFour(arr) {
    //Create variables to store final array and largest number comparator.
    let arrayOfLargestNumbers = [];
    let largestNumber = Number.NEGATIVE_INFINITY;
  
    //loop through main array and sub array; assign largest number found to largestNumber variable.
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] > largestNumber){
          largestNumber = arr[i][j];
        }
      }

      //push largest number to final array and reset largestNumber variable to negative infinity.
      arrayOfLargestNumbers.push(largestNumber);
      largestNumber = Number.NEGATIVE_INFINITY;
    }

    //return solution.
    return arrayOfLargestNumbers;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);