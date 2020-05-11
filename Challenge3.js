// **Question 3**: Write a function that converts HEX to RGB. Then Make that function autodect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. 
// Bonus: Release this tool as a npm package.

// HEX
// 6 digits #rrggbb
// 00 to FF
// 0123456789ABCDEF
// If any one of the three color values is less than 10 hex (16 decimal), it must be represented with a leading zero so that the triplet always has exactly six digits.

// https://en.wikipedia.org/wiki/Web_colors

// RGB
// (rr, gg, bb) 
// 0 to 255


// Dec -> 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
// Hex -> 0 1 2 3 4 5 6 7 8 9 A  B  C  D  E  F

// E.g. C9 to dec:
// work from right to left (reverse? decrement length - 1)
// 9 = 9 * (16**0) = 9
// C = 12 * (16**1) = 192
// 192+9 = 201


// Find red - 
let input = 'rgb(255, 0, 1)'
// let input = '#fF0000';

let array = [];



// array = input.split('');
// let newArr = [];
// for(let i = 0; i<array.length; i++) {
// 	let temp = parseInt(array[i]);
// 	newArr.push(temp)
// 	console.log(array[i]);
// }


// RGB to HEX
// const RgbToHex = (arr) => {
	let tempStr = input;
	if(tempStr.includes('rgb(')) {
		tempStr = tempStr.replace('rgb(', '');
		if(tempStr.includes(')')) {
			tempStr = tempStr.replace(')', '')
		}
	}
	array = tempStr.split(',');
	// ["255", " 0", " 0"]
	array = array.map((item) => {
	  return parseInt(item);
	})
	// [255, 0, 0]

// work out what hex value should be - first char is division, second is remainder
let tempr = []
// array = array.map(item => {
	let hexTwo;
	// if(array[0]>9) {
		let hexOne = array[0] / 16;
		while(hexTwo>9) {
		hexTwo = array[0] % 16;
	}
		console.log('/', hexOne, '%', hexTwo)

		hexOne.toString();
		hexTwo.toString();
		console.log('hexOne', hexOne)
		console.log('hexTwo', hexTwo)

		let hex = hexOne+hexTwo;
		console.log('hex', hex)

		tempr.push(hex);
		console.log(tempr)
		// return tempr;
	// }
// })


// NEed this for end of rgb to hex to add extra zero to digit less than 9 
// 
	// array = array.map((item) => {
	// 	// console.log(item)
	// 	if(item<10) {
	// 		item = item.toString();
	// 		item = '0' + item;
	// 		//item = parseInt(item);
	// 		return item;
	// 	} else {
	// 		return item;
	// 	}
	// })




	let newArr = [];
	for(let i = 0; i<array.length; i++) {
		let temp = parseInt(array[i]);
		newArr.push(temp)
		console.log(array[i]);
	}



// }



arr = input.split('');
	// ["#", "f", "f", "0", "0", "0", "0"]
	// Check if includes #
	if(arr.includes('#')) {
		// if true get index of # so we can remove it:
		const hashIndex = arr.indexOf('#');
		// Need to change in case it is not at zero
		arr.splice(hashIndex, 1);		
	}






// initial Function
const init = () => {
	let array = [];

	// Need to figure out if hex or rgb:
	if(input.includes('#') || input.length = 6 ) {
		hexToRgb(input);
	} else if(input.includes(',') || input.includes('rgb')) {
		RgbToHex(input);
	} else {
		console.log('No recognised HEX or RGB value detected')
	}
}
init();


// HEX to RGB
const hexToRgb = (arr) => {
	// split input into an array:
	arr = input.split('');
	// ["#", "f", "f", "0", "0", "0", "0"]
	// Check if includes #
	arr.includes('#');
	// if true get index of # so we can remove it:
	const hashIndex = arr.indexOf('#');
	// Need to change in case it is not at zero
	arr.splice(hashIndex, 1);
	// array now equals
	// ["f", "f", "0", "0", "0", "0"]

	arr = arr.map(item => {
		switch(item.toLowerCase()) {
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				return parseInt(item)
				break;
			case 'a':
				return item = 10;
				break;
			case 'b':
				return item = 11;
				break;
			case 'c':
				return item = 12;
				break;
			case 'd':
				return item = 13;
				break;
			case 'e':
				return item = 14;
				break;
			case 'f':
				item = 15;
				return item;
				break;
			default:
				return 'No hex identified'
				break;
		}
	})

	// turn hex values in rgb values:
	let tempArr = [];

	for(let i = 0; i<arr.length+1; i++) {	
		let tempNum;
		tempNum = (arr[0] * (16**1)) + (arr[1] * (16**0));
		tempArr.push(tempNum);
		arr.splice(0,2);
	}
	arr = arr.concat(tempArr);
	tempArr = [];
	console.log(`Hex value ${input} into rgb values are: rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`)
	return rgb = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`

}