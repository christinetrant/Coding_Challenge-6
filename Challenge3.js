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


// Find red - rgb (255, 0, 0)
let input = '#fF0000';
let array = [];
// split input into an array:
array = input.split('');
// ["#", "f", "f", "0", "0", "0", "0"]
// Check if includes #
array.includes('#')
// true
// get index of # so we can remove it:
array.indexOf('#')
// 0
// remove # at i = zero and remove one value
array.splice(0, 1)
// array now equals
["f", "f", "0", "0", "0", "0"]

// need to change characters into numbers:
// LOWERCASE!









let parseNumbers = (arr => {
	array = arr.map(item => {
		// console.log(item)
		if(item === '0') {
			return parseInt(item)
		} else if(item === '1') {
			return parseInt(item)
		} else if(item === '2') {
			return parseInt(item)
		} else if(item === '3') {
			return parseInt(item)
		} else if(item === '4') {
			return parseInt(item)
		} else if(item === '5') {
			return parseInt(item)
		} else if(item === '6') {
			return parseInt(item)
		} else if(item === '7') {
			return parseInt(item)
		} else if(item === '8') {
			return parseInt(item)
		} else if(item === '9') {
			return parseInt(item)
		} else if(item.toLowerCase() === 'a') {
			return item = 10;
		} else if(item.toLowerCase() === 'b') {
			return item = 11;
		} else if(item.toLowerCase() === 'c') {
			return item = 12;
		} else if(item.toLowerCase() === 'd') {
			return item = 13;
		} else if(item.toLowerCase() === 'e') {
			return item = 14;
		} else if(item.toLowerCase() === 'f') {
			item = 15
			return item
		}
	})
})


let letterToNum = (arr => {
	array = arr.map(item => {
	
	})
})






switch (item) {
			case 'f':
				return item = 15;
				break;
		}