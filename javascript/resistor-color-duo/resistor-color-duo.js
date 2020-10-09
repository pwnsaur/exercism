const COLORS = [
	'black',
	'brown',
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'violet',
	'grey',
	'white',
];

export const decodedValue = colors => {
	let colorCode = '';
	for (const color of colors) {
		if (COLORS.includes(color) && colorCode.length < 2) {
			colorCode += COLORS.indexOf(color);
		}
	}
	return parseInt(colorCode);
};
