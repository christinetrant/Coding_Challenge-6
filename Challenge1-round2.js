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

let arrayFind = (arr => {

	arr.forEach((item) => {
		let currentValue = arr[0];
		if(currentValue === item) {
			tempArr.push(currentValue);	
		}
		currentValue = arr[i]
	})
	// Add to a new array
	if(tempArr.length>1) {
		return newArr.push(tempArr)
	} else {
		return newArr = newArr.concat(tempArr)
	}



})



// Check if value repeats in array
let checkDuplicates = (arr) =>{
	arr.forEach((item) => {
	if(arr.length>0) {
		arrayFind(arr)
	// Before we clear tempArr need to remove those values from original array
	arr = arrayRemove(arr, tempArr[0]);
	// clear tempArr
	tempArr = [];
		console.log(newArr);
	}
})

}



