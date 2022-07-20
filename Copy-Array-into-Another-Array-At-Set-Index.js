/*
Slice and Splice
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/


//  SOLUTION 1

function frankenSplice(arr1, arr2, n) {
    //First create a temporary array to store a copy of the arr2 starting at point n
    let tempArr = arr2.slice(n);
    
    //Use the rest parameter to add arr1 to the beginning of the temporary array
    tempArr.unshift(...arr1);

    //Now use the rest parameter to add the remainder of the arr2 (the part before point n) to the temporary array
    tempArr.unshift(...arr2.slice(0,n));

    //Et Voila!
    return tempArr
  }


//  SOLUTION 2

  function frankenSplice(arr1, arr2, n) {
    //First make a copy of arr2 (the array you intend to copy into) and store in a temporary variable
    let tempArr = arr2.slice(0);

    //Use splice on your copy of arr2.
    //Set the start index to 0.
    //Set the end Index to the point n (the point you want to place arr1 at). This will make tempArr now just hold all the values before point n
    //Set 2 replace value.
    //The first being a copy of all arr2 value up to point n (the point you want to place arr1 at) using slice and the rest parameter.
    //The second being a copy of arr1 after n.
    //Et Voila!
    
    tempArr.splice(0,n,...arr2.slice(0,n),...arr1)
    return tempArr;
  
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))