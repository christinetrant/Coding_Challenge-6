const body = document.querySelector('body');
const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementsByClassName('output')[0];
const h3 = document.getElementById('color-output');











const outFunc = () => {
  const tooltip = document.getElementById("myTooltip");
  tooltip.textContent = "Copy";
  // h3.textContent = '';
}


// ---------- HEX TO RGB ---------- //
const hexToRgb = ((arr, color) => {
	let tempStr = color;
	// have an empty array to temporarily store items
	let tempArr = [];
	// split input into an array:
	arr = tempStr.split('');
	// ["#", "f", "f", "0", "0", "0", "0"]
	// Check if includes #
	if(arr.includes('#')) {
		// if true get index of # so we can remove it:
		const hashIndex = arr.indexOf('#');
		// Need to change in case it is not at zero
		arr.splice(hashIndex, 1);
	}
	// if input is a 3 letter hex
	if(arr.length===3) {
		arr = arr.map(item => item.concat(item));
		arr = arr.map(item => item.split('')).flat();
	}
	// array now equals
	// ["f", "f", "0", "0", "0", "0"]
	arr = arr.map(item => parseInt(item, 16));
	// turn hex values in rgb values:
	for(let i = 0; i<arr.length+1; i++) {	
		let tempNum;
		// take first 2 numbers in arr - mulitply first number by 16 power of 1, multiply second number by 16 power of 0.  Add results to get one number between 0 and 255
		tempNum = (arr[0] * (16**1)) + (arr[1] * (16**0));
		// Push above result into temp array
		tempArr.push(tempNum);
		// Remove the 2 numbers we used from the main array
		arr.splice(0,2);
	}
	// After looping through full array we have [255, 0, 0]
	// Add that number to end of main array
	arr = arr.concat(tempArr);
	// Empty temp Array
	tempArr = [];
	// Print out result
	output.textContent = `Hex value ${color} into rgb values are: rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
	h3.style.display = "block";
	h3.textContent = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
	// change input to the new value
	// input.value = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`
	// add event listener so value can be copied
	// h3.addEventListener('click', copyText, false);
	// h3.addEventListener('click', copyText);
	h3.addEventListener('mouseout', outFunc);
	input.blur();
	return rgb = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`
})

// ---------- RGB TO HEX ---------- //
const rgbToHex = ((arr, color) => {
	let tempStr = color;
	if(tempStr.includes('rgb(')) {
		tempStr = tempStr.replace('rgb(', '');
		if(tempStr.includes(')')) {
			tempStr = tempStr.replace(')', '')
		}
	} else if(tempStr.includes('(')) {
		tempStr = tempStr.replace('(', '');
		if(tempStr.includes(')')) {
			tempStr = tempStr.replace(')', '')
		}
	}
	arr = tempStr.split(',');
	// ["255", " 0", " 0"]
	arr = arr.map((item) => {
		return parseInt(item);
	})
	// [255, 0, 0]
	// work out what hex value should be - first char is division, second is remainder
	arr = (arr.map(item => {
		let hexOne = parseInt(item / 16);
		let hexTwo = parseInt(item % 16);
		return ([hexOne, hexTwo])
	})).flat();
	// Need to convert to Hex
	arr = arr.map(item => item.toString(16));
	// Add # and reduce array into a single string
	arr.unshift('#')
	arr = arr.join('');
	// Print out result!
	// h3.textContent = '';
  h3.style.display = "block";
	output.textContent = `rgb value ${color} into hex values are: ${arr}`;
	h3.textContent = arr;
	// input.value = arr;
	input.blur();
	// h3.addEventListener('click', copyText, false);
	// h3.addEventListener('click', copyText);
	h3.addEventListener('mouseout', outFunc);
	return hex = arr;
})


// ---------- Initial Function ---------- //
const init = (color) => {
	let array = [];
	// Need to figure out if hex or rgb:
	if(color.includes('#') || color.length === 6 || color.length === 3) {
		// console.log('Input is HEX');
		hexToRgb(array, color);
		return rgb;
	} else if(color.includes(',') || color.includes('rgb')) {
		// console.log('Input is RGB');
		rgbToHex(array, color);
		return hex;
	} else {
		console.log('No recognised HEX or RGB value detected')
	}
}



const clearInput = () => input.value = 'Enter a color';
const inputFocus = () => {
	input.select();
	h3.textContent = '';
  h3.style.display = "hidden";
}
const convertAfterClick = () => {
	let inputValue = document.getElementById('input').value;
	if(inputValue.length > 0) {
		init(inputValue);
	}
}

const convertAfterEnter = (event) => {
	let inputValue = document.getElementById('input').value;
	if(inputValue.length > 0 && event.which === 13) {
		init(inputValue);
	}
}

// EVENT LISTENERS
input.addEventListener('focus', inputFocus);
input.addEventListener("keypress", convertAfterEnter);
button.addEventListener("click", convertAfterClick);





// h3.addEventListener("click", myFunction);


h3.addEventListener("click", function(){

    var copy = document.getElementById("color-output");

    // set "#Color 1" with the hidden field so that you can call select on it
    var hiddenField = document.getElementById("copyText");
    hiddenField.value = copy.innerHTML;
    hiddenField.select();
    document.execCommand("copy");

    // alert("Copied the text: " + hiddenField.value);
    const tooltip = document.getElementById("myTooltip");
	  tooltip.textContent = "Copied: " + hiddenField.value;
	  clearInput();
}, false);



// const copyToClipboard = () => {
  /* Get the text field */
  // var copyText = h3.textContent;

  /* Select the text field */
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  // document.execCommand("copy");

  /* Alert the copied text */
  // alert("Copied the text: " + copyText);
// }


// const copyText = () => {
// 	const copyh3 = document.getElementById("color-output"); 
// 	// set the input with the hidden field so that you can call select on it
//   let hiddenField = document.getElementById("hidden-input");
//   hiddenField.value = copyh3.innerHTML;
//   hiddenField.select();
//   document.execCommand("copy");
//   // const tooltip = document.getElementById("myTooltip");
//   // tooltip.textContent = "Copied: " + hiddenField.value;
//   clearInput();
// }

// document.querySelector("#firstColorObject").addEventListener("click", function(){

//     var p1 = document.getElementById("p1");
    
//     // set "#Color 1" with the hidden field so that you can call select on it
//     var hiddenField = document.getElementById("copyText");
//     hiddenField.value = p1.innerHTML;
//     hiddenField.select();
//     document.execCommand("copy");
    
//     alert("Copied the text: " + hiddenField.value);

// }, false);