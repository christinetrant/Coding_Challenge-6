const body = document.querySelector('body');
const input = document.getElementById('input');
let inputValue = document.getElementById('input').value;
const button = document.getElementById('button');
var output = document.getElementsByClassName('output')[0];

console.log(body)
console.log(inputValue);
console.log(button);
console.log(inputValue.length);

const convertAfterClick = ()  => {
	if(inputValue.length > 0) {
		console.log('clicked btn');
	}
const convertAfterEnter = (event) => {
	if(inputValue.length > 0 && event.which === 13) {
		console.log('entered')
	}
}

// EVENT LISTENERS
input.addEventListener('focus', function() {
	this.select();
})
input.addEventListener("keypress", convertAfterEnter);
button.addEventListener("click", convertAfterClick);





