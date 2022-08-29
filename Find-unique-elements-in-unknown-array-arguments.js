function uniteUnique(arr, ...arr2) {
	//for the first argument, filter only unique value (check if indexof == lastindexof);
	//push into comparison array to compare with other arguments

	let firstArg = arr.filter((item, i, a) => {
		if (a.indexOf(item) == a.lastIndexOf(item)) {
			return item;
		} else {
			a.splice(a.lastIndexOf(item), 1);
			return item;
		}
	});

	let compareArr = [...firstArg];

	//iterate through the other arguments
	//for each argument use "includes" to check if argument elements exist in comparison array
	//if they do not, push element to comparison array

	for (let i = 0; i < arr2.length; i++) {
		arr2[i].forEach((item) => {
			if (!compareArr.includes(item)) {
				compareArr.push(item);
			}
		});
	}

	return compareArr;
}

uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));

//CLEANER ELEGANT SOLUTION
function uniteUnique2() {
	return [...arguments]
		.flat()
		.filter((item, ind, arr) => arr.indexOf(item) === ind);
}

uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]);
