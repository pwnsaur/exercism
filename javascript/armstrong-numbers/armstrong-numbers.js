export const isArmstrongNumber = number => {
	return (
		number ===
		Array.from(String(number), Number)
			.map(x => x ** String(number).length)
			.reduce((a, b) => a + b)
	);
};
