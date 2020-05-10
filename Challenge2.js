// **Question 2**: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: `answer([1,2,3], 4)` should return `[1,3]`

let array = [5, 6, 2, 2, 3, 4];
let sum = [];
let findTwoNumbers = (arr, target) => {
	let firstNum, numsToFind;
	
for(item of arr) {
// for(let j=0; j<arr.length; j++) {
	firstNum = item;
	arr.map(() => {
		// console.log('value', value);
		// console.log('i', i);
		// console.log('arr[0]', arr[0]);
		numToFind = target-firstNum;

	})

	// let secondNum = arr.filter(num => num === numToFind);
	let secondNum = arr.includes(numToFind)

	console.log('second', secondNum)
	if(secondNum === true) {
		console.log('number exists')
		sum.push(firstNum);
		console.log('sum1', sum)
		sum.push(numToFind);
		console.log('sum2', sum)
		return sum;
	} else {
		console.log('no matches')
		firstNum = item++
		// sum = [];
	}
}

	
}