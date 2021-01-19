/* Требования к задаче:
    Реализовать метод, который будет рисовать в консоли треугольник как показано в примере. */

function printTriangle() {
	for (let i = 1; i < 6; i++) {
        const array = new Array(i).fill('#')
        console.log(array.join(' '))
	}
}

printTriangle()