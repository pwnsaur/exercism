export const isLeap = year => {
	const divides = n => year % n === 0;
	return divides(100) ? divides(400) : divides(4);
};
