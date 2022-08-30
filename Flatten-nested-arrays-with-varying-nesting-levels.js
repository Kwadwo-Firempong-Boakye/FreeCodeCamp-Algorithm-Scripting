// Flatten a nested array. You must account for varying levels of nesting.
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

function steamrollArray(arr) {
	let flatArr = [];
	let focusedArr;
	let depth = 0;
	let checkArray = (focus) => {
		if (!Array.isArray(focus)) {
			flatArr.push(focus);
		} else if (focus.length > 1) {
			focus.forEach((subItem) => {
				checkArray(subItem);
			});
		} else {
			focusedArr = focus[depth];
			checkArray(focusedArr);
		}
	};

	arr.forEach((item) => {
		checkArray(item);
	});

	return flatArr.filter((item) => item != undefined);
}

///SOLUTION USING STING MANIPULATION

function steamrollArray2(arr) {
    console.log(typeof arr[1])
    return arr
    .join()
    .replace(",,",",")
    .split(",")
    .map((item) => {
      if (item == "[object Object]"){
        return {};
      } else if (isNaN(item)){
        return item
      } else {
        return +item;
      }
    })
  }

  //ELEGANT RECURSION

  function steamrollArray3(val,flatArr=[]) {
    val.forEach(item => {
      if (Array.isArray(item)) steamrollArray3(item, flatArr);
      else flatArr.push(item);
    });
    return flatArr;
  }

