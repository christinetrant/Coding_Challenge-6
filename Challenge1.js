// **Question 1**: Clean the room function: given an input of `[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]`, make a function that organizes these into individual array that is ordered. For example `answer(ArrayFromAbove)` should return: `[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]`. Bonus: Make it so it organizes strings differently from number types. i.e. `[1, "2", "3", 2]` should return `[[1,2], ["2", "3"]]`

// // let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
// let array = [1,2,45,391,2,1,20,20];
// // 1. sort array in ascending order:
// // NOT SURE IF THIS MATTERS?!
// array = array.sort((a, b) => a-b);
// let newArr = [];

// for(let j=0; j<array.length; j++) {
// 	// Check array to add similar value to array
// 	let tempArr = [];
// 	for(let i=0; i<array.length; i++) {
// 		let currentValue = array[0];
// 		if(currentValue === array[i]) {
// 			tempArr.push(currentValue);	
// 		}
// 	}
// 	// return tempArr
// 	console.log('tempArr', tempArr);
// 	// Add our temporarily created array with set of duplicates to the new array
// 	newArr.push(tempArr)

// 	// Then need to remove those numbers from original array
// 	array.splice(0, tempArr.length)
// 	console.log('array', array);
// 	console.log('new array', newArr);

// 	// If number isn't matching just add to array
// 	array.concat(newArr)
// }



// let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let testarray = [1,2,45,391,2,1,20,20];
// 1. sort array in ascending order:
// NOT SURE IF THIS MATTERS?!
	
function cleanFunction(array) {	
	array = array.sort((a, b) => a-b);
	let newArr = [];

	for(let j=0; j<array.length; j++) {
		// Check array to add similar value to array
		let tempArr = [];
		for(let i=0; i<array.length; i++) {
			let currentValue = array[0];
			if(currentValue === array[i]) {
				tempArr.push(currentValue);	
			}
		}
		// return tempArr
		console.log('tempArr', tempArr);
		// Add our temporarily created array with set of duplicates to the new array
		newArr.push(tempArr)

		// Then need to remove those numbers from original array
		array.splice(0, tempArr.length)
		console.log('array', array);
		console.log('new array', newArr);

		
	}
	// If number isn't matching just add to array
	array =	array.concat(newArr)
	console.log('final', array);
}