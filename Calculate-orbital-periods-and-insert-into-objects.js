// According to Kepler's Third Law, the orbital period T
// of two point masses orbiting each other in a circular or elliptic orbit is:

// T = 2PI * Sqrt of (a-cubed / u)

// a is the orbit's semi-major axis
// μ=GM is the standard gravitational parameter
// G is the gravitational constant,
// M is the mass of the more massive body.

// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
	let copyArr = [...arr];

	const GM = 398600.4418;
	const u = GM;
	const earthRadius = 6367.4447;

	for (let i = 0; i < arr.length; i++) {
		const avgAlt = arr[i].avgAlt;
		const a = earthRadius + avgAlt;
		const orbitalPeriods = Math.round(2 * Math.PI * Math.sqrt((a * a * a) / u));

		delete copyArr[i].avgAlt;
		copyArr[i].orbitalPeriod = orbitalPeriods;
	}

	return copyArr;
}

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
