// **Question 1**: Clean the room function: given an input of `[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]`, make a function that organizes these into individual array that is ordered. For example `answer(ArrayFromAbove)` should return: `[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]`. Bonus: Make it so it organizes strings differently from number types. i.e. `[1, "2", "3", 2]` should return `[[1,2], ["2", "3"]]`

let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let array2 = [1, "2", "3", 2];
// Create a new array so we don't tamper with original
let newArr = [];
// We will need a temporary array to store instances of matching values
let tempArr = [];
let strArr = [];
let numArr = [];

// Find matching values in array
let arrayFind = (arr => {
	arr.forEach((item) => {
		let currentValue = arr[0];
		if(currentValue === item) {
			tempArr.push(currentValue);	
		}
		currentValue = arr[i]
	})
	// Add to a new array - if it has more than 1 item add as an array otherwise concatenate single element onto array
	if(tempArr.length>1) {
		return newArr.push(tempArr);
	} else {
		return newArr = newArr.concat(tempArr);
	}
})

// Remove from array function
// SO ONCE WE KNOW MATCHING ITEM e.g. tempArr[0] we can filter and remove:
let arrayRemove = (arr, value) => { 
	return arr.filter((item) => { 
		// return all elements that are not in tempArr
		return item != value; 
	});
}

// Check if value repeats in array
let cleanArray = (arr) =>{
	// sort array in ascending order:
	arr = arr.sort((a, b) => a-b);
	arr.forEach((item) => {
		if(arr.length>0) {
			arrayFind(arr);
			// Before we clear tempArr need to remove those values from original array
			arr = arrayRemove(arr, tempArr[0]);
			// clear tempArr
			tempArr = [];
			// console.log(newArr);
		}
	})
	// return newArr;
}

// initial function
const init = (arr => {
	// clear newArr for when init is called to start fresh.
	newArr = [];
	// get string types in one array
	strArr = arr.filter(item => {
		return typeof item === 'string';
	})
	// get number types in one array
	numArr = arr.filter(item => {
		return typeof item === 'number';
	})
	// if there are both types of arrays run cleanArray on both arrays and then push into newArr
	if((numArr.length>1) && (strArr.length>1)) {
		cleanArray(numArr);
		cleanArray(strArr);
		newArr = [];
		newArr.push(numArr);
		newArr.push(strArr);
		return newArr;
		// if there is only a number array run cleanArray and return newArr
	} else if((numArr.length>1) && !(strArr.length>1)) {
		cleanArray(numArr);
		return newArr;
		// if there is only a number array run cleanArray and return newArr
	} else if(!(numArr.length>1) && (strArr.length>1)) {
		cleanArray(strArr);
		return newArr;
	}
})

// return new organised array
init(array);