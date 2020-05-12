// **Question 2**: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: `answer([1,2,3], 4)` should return `[1,3]`

let array = [5, 6, 2, 2, 3, 4];

let findTwoNumbers = (arr, target) => {
	let firstNum, secondNum, numsToFind, sum;
		for(item of arr) {
			// sum is an empty array
			sum = [];
			// the first item in our array equals the first number
			firstNum = item;
			
			// subtract the first number from target to get the second number we need to look for
			arr.map(() => numToFind = target-firstNum)

			// check to see if the second number exists in array
			secondNum = arr.includes(numToFind)

			// if it exists then push both numbers into the sum array and return
			if(secondNum === true) {
				sum.push(firstNum);
				sum.push(numToFind);
				return sum;
			// otherwise first number equals the next value in array to try
			} else {
				firstNum = item++
				return `No numbers in this array add up to ${target}`
			}
		}	
}