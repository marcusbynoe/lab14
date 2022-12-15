/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
state.cart = new Cart([]);
state.cart.items = [];

// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in state.allProducts) {
    let option = document.createElement('option');
    option.value = state.allProducts[i].name;
    option.textContent = state.allProducts[i].name;
    selectElement.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  state.cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview(state.cart.items[state.cart.items.length -1]);

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let item = document.getElementById('items').value;
  console.log(item);
  // TODO: get the quantity
  let numItem = document.getElementById('quantity').value;
  // TODO: using those, add one item to the Cart
  state.cart.addItem(item, numItem);
  updateCounter();
  console.log(state.cart);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  total = state.cart.items.length;
  document.getElementById('itemCount').textContent = total;
  console.log(total)
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(item) {
  let p = item.product;
  let q = item.quantity;
  // TODO: Get the item and quantity from the form
  // state.cart.items[0].quantity;
  let contents = document.getElementById('cartContents');
  let elem = document.createElement('div');
  elem.textContent = `Product: ${p} Quantity: ${q}`;
  contents.appendChild(elem);
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
