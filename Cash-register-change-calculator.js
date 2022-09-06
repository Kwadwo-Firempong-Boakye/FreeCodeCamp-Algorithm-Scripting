// Design a cash register drawer function checkCashRegister()
// that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	    Amount
// Penny	            $0.01 (PENNY)
// Nickel	            $0.05 (NICKEL)
// Dime	                $0.1 (DIME)
// Quarter	            $0.25 (QUARTER)
// Dollar	            $1 (ONE)
// Five Dollars	        $5 (FIVE)
// Ten Dollars	        $10 (TEN)
// Twenty Dollars	    $20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

function checkCashRegister(price, cash, cid) {
	let change = [];

	//determine TOTAL cash-in-drawer
	const totalCID = cid
		.map((item) => item[1])
		.reduce((a, b) => a + b)
		.toFixed(2);

	//determine change due
	const changeDue = cash - price;

	//create currency unit arrays
	cid.reverse();
	const standardCurrency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100].reverse();
	const currencyWorth = cid.map((item) => item[1]);
	const currencyCount = cid.map((item, i) =>
		Number((item[1] / standardCurrency[i]).toFixed())
	);
	const currencyName = cid.map((item) => item[0]);

	// console.log(currencyWorth)
	// console.log(currencyCount)
	// console.log(currencyName)

	//determine currencies of change with sub function
	const currenciesOfChange = (changeDue, currencyWorth) => {
		let remainder = changeDue;
		let notes = [];

		for (let i = 0; i < standardCurrency.length; i++) {
			if (standardCurrency[i] <= remainder && remainder > 0) {
				let ideal = Math.floor(remainder / standardCurrency[i]);

				if (currencyCount[i] >= ideal) {
					notes.push(currencyName[i], ideal * standardCurrency[i]);
					remainder = remainder % standardCurrency[i];
				} else if (currencyCount[i] != 0) {
					notes.push(currencyName[i], currencyCount[i] * standardCurrency[i]);
					remainder =
						(ideal - currencyCount[i]) * standardCurrency[i] +
						(remainder % standardCurrency[i]);
				}

				remainder = Number(remainder.toFixed(2));

				change.push(notes);
				notes = [];
			}
		}

		if (remainder != 0) {
			return { status: "INSUFFICIENT_FUNDS", change: [] };
		} else {
			let result = {};
			result.status = "OPEN";
			result.change = change;
			return result;
		}
	};

	// INITIATOR CONDITIONS
	if (changeDue > totalCID) {
		return { status: "INSUFFICIENT_FUNDS", change: [] };
	} else if (changeDue == totalCID) {
		return { status: "CLOSED", change: cid.reverse() };
	} else if (changeDue < totalCID) {
		return currenciesOfChange(changeDue, currencyWorth);
	}
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [
	["PENNY", 1.01],
	["NICKEL", 2.05],
	["DIME", 3.1],
	["QUARTER", 4.25],
	["ONE", 90],
	["FIVE", 55],
	["TEN", 20],
	["TWENTY", 60],
	["ONE HUNDRED", 100],
]);

