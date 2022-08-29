// Given the array arr, iterate through and remove each element starting from the first element (the 0 index)
// until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
	let filteredArr = arr.filter((item, index) => {
		return func(item);
	});
	let finalArr = arr.slice(arr.indexOf(filteredArr[0]));

	return filteredArr.length == 0 ? [] : finalArr;
}

// dropElements([1, 2, 3], function(n) {return n < 3; });
//   console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))
