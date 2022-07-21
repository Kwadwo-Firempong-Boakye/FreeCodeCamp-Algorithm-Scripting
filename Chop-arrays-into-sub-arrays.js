/*
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.
*/


function chunkArrayInGroups(arr, size) {
    //First copy a mutable version of the array using the spread operator
    let arrCopy = [...arr];
    //Create an empty array to hold the new sub-arrays
    let arrGroups = [];
    //Create a variable for the number of loops needed. 
    //Dividing the array length by the size needed will give you the loop count.
    let iterations = (arr.length / size);
    
    //Push a spliced copy of the array into a new array.
    //This will change the array into a newer spliced one each time.
    for(let i=0; i < iterations; i++){
      arrGroups.push(arrCopy.splice(0, size))
    }
    return arrGroups;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)