let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

let newArr = [];
let tempArr = [];




// Remove from array function
// SO ONCE WE KNOW MATCHING ITEM e.g. tempArr[0] we can filter and remove:
let arrayRemove = (arr, value) => { 
	return arr.filter((item) => { 
		// return all elements that are not in tempArr
		return item != value; 
	});
}
// array = arrayRemove(array, tempArr[0]);





// Check if value repeats in array
let checkDuplicates = (arr) =>{
	array.forEach((item) => {
		let currentValue = arr[0];
		if(currentValue === item) {
			tempArr.push(currentValue);	
		}
		currentValue = arr[i]
	})
	// Add to a new array and clear tempArr
	newArr.push(tempArr)
	// Before we clear tempArr need to remove those values from original array
	array = arrayRemove(array, tempArr[0]);
	tempArr = [];
}



// for(let j = 0; j<array.length; j++) {
// array.forEach((item) => {
array.forEach((item) => {
	if(array.length>0) {
		checkDuplicates(array);
		console.log(newArr);
	}
})
