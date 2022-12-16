/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('myCart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.querySelector('tbody');
  tbody.textContent = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
 let tbody = document.querySelector('tbody');
  // TODO: Find the table body
  for(let i = 0; i < state.cart.items.length; i++){
    let trElement = document.createElement('tr');
    tbody.appendChild(trElement);
    let tdRemoveElement = document.createElement('td');
    tdRemoveElement.classList.add('delete-box');
    tdRemoveElement.id = i;
    let tdQuantityElement = document.createElement('td');
    let tdItemElement = document.createElement('td');
    tdItemElement.innerText = state.cart.items[i].product;
    tdQuantityElement.innerText = state.cart.items[i].quantity;
    tdRemoveElement.innerText = 'x';
    trElement.appendChild(tdRemoveElement);
    trElement.appendChild(tdQuantityElement);
    trElement.appendChild(tdItemElement);
  }
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  if(event.target.classList.contains('delete-box')){
    state.cart.removeItem(parseInt(event.target.id));
    state.cart.saveToLocalStorage();
    renderCart();
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
