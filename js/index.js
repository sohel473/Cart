// UI element
let product = document.querySelector('#products');
let cart = document.querySelector('#cart');
let clear_cart = document.querySelector('#clear_cart_btn');

// event listeners
product.addEventListener('click', addProduct);
cart.addEventListener('click', removeProduct);
clear_cart.addEventListener('click', clearCart);

// functions

function addProduct(e) {
	if (e.target.tagName == 'BUTTON') {
		let productName = e.target.parentElement.firstChild.textContent;
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(productName + ' '));
		let button = document.createElement('button');
		button.innerHTML = 'Remove';
		li.appendChild(button);
		cart.appendChild(li);
	}
}

function removeProduct(e) {
	if (e.target.tagName == 'BUTTON') {
		let product = e.target.parentElement;
		product.remove();
	}
}

function clearCart(e) {
	cart.innerHTML = '';
}
