module.exports = function solveEquation(equation) {
	let arrEequation = equation.split(' ');
	let a = +arrEequation[0];
	let b = +(arrEequation.slice(3,5)).join('');
	let c = +arrEequation.slice(7).join('');
	let discriminant = (b * b) - (4 * a * c);
	let x1, x2, result;
	x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	result = (x1 < x2)? [Math.round(x1),Math.round(x2)]:[Math.round(x2),Math.round(x1)] ;
	return result;
};
