let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
const cartTotalPrice = document.querySelector(".total-price");


var images = document.querySelectorAll("#myImage");

// Loop through the images and add a click event listener to each one
images.forEach(function(image) {
  image.addEventListener("click", function() {
    // Create a new window to display the enlarged image
    var win = window.open("", "ImageWindow", "width=800,height=600");

    // Create an image element for the enlarged image
    var enlargedImage = document.createElement("img");
    enlargedImage.src = image.src;

    // Add the image element to the new window
    win.document.body.appendChild(enlargedImage);
  });
});



cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};

if(document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}




function ready() {
    var removeCartButtons = document.getElementsByClassName("cart-remove");
     for (let i = 0; i < removeCartButtons.length; i++){
        let button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    var addCart = document.getElementsByClassName("add-cart");
    for(let i = 0; i < addCart.length; i++){
        let button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);

}


function buyButtonClicked(){
    alert("Your Order is placed");
    const cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
   
    updatetotal();
}



function removeCartItem(event){
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();

     var cartCount = document.getElementById("cart-count");
  var numCartItems = document.querySelectorAll(".cart-box").length;
  cartCount.innerHTML = numCartItems;
}

function quantityChanged(event) {
    const input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;

    }
     updatetotal();
}


function addCartClicked(e) {
  const button = e.target;
  const shopProducts = button.parentElement;
  const title = shopProducts.querySelector('.product-title').textContent;
  const price = shopProducts.querySelector('.price').textContent;
  const productImg = shopProducts.querySelector('.product-img').src;

  const colorSelect = shopProducts.querySelector('#color-select');
  const sizeSelect = shopProducts.querySelector('#size-select');
  const itemSelect = shopProducts.querySelector('#item-select');
  const color = colorSelect.options[colorSelect.selectedIndex].value;
  const size = sizeSelect.options[sizeSelect.selectedIndex].value;
  const item = itemSelect.options[itemSelect.selectedIndex].value;

  addProductToCart(title, price, productImg, color, size, item);
  updatetotal();
}

function addProductToCart(title, price, productImg, color, size, item) {
  const cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');
  const cartItems = document.querySelector('.cart-content');
  const cartItemsNames = cartItems.querySelectorAll('.cart-product-title');

  for (let i = 0; i < cartItemsNames.length; i++) {
    if (
      cartItemsNames[i].innerText === title &&
      cartItemsNames[i].getAttribute('data-color') === color &&
      cartItemsNames[i].getAttribute('data-size') === size &&
      cartItemsNames[i].getAttribute('data-item') === item
    ) {
      alert('You have already added this item to cart');
      return;
    }
  }

  // Create cart item object
  const cartItem = {
    title,
    price,
    productImg,
    color,
    size,
    item,
    quantity: 1,
  };

  // Get cart items from local storage
  let cartItemsList = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the added item already exists in the cart
  const itemIndex = cartItemsList.findIndex(
    (item) =>
      item.title === title &&
      item.price === price &&
      item.productImg === productImg &&
      item.size === size &&
      item.color === color &&
      item.item === item
  );

  // If the item exists in the cart, increase its quantity by 1
  if (itemIndex !== -1) {
    cartItemsList[itemIndex].quantity += 1;
  } else {
    // Otherwise, add the item to the cart
    cartItemsList.push(cartItem);
  }

  // Save cart items to local storage
  localStorage.setItem('cart', JSON.stringify(cartItemsList));

  const cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
      <div class="cart-product-title" data-color="${color}" data-size="${size}">
        ${title}
      </div>
      <div class="cart-price">${price}</div>
      <div>Color: ${color}</div>
      <div>Size: ${size}</div>
      <div>Item: ${item}</div>
      <input type="number" value="1" class="cart-quantity">
    </div>
    <i class='bx bxs-trash-alt cart-remove'></i>
  `;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.appendChild(cartShopBox);
  cartShopBox.querySelector('.cart-remove').addEventListener('click', removeCartItem);
  cartShopBox.querySelector('.cart-quantity').addEventListener('change', quantityChanged);
  updatetotal();
}


"use strict";

function displayUsername() {
  const usernameDisplay = document.getElementById('usernameDisplay');
  const username = getUsername();
  if (username !== null) {
    usernameDisplay.textContent = `Logged in as: ${username}`;
  }
  hideSignUpButton();
}

function hideSignUpButton() {
  const username = getUsername();
  const signUpButton = document.querySelector("#sign-up-btn");
  const signOutButton = document.querySelector("#sign-out-btn");

  if (username !== null) {
    // user is signed in
    signUpButton.style.display = "none";
    signOutButton.style.display = "block";
  } else {
    // user is not signed in
    signUpButton.style.display = "block";
    signOutButton.style.display = "none";
  }
}

function getUsername() {
  let signedInUser = null;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    if (key !== 'cart' && value.password !== undefined) {
      signedInUser = key;
      break;
    }
  }
  return signedInUser;
}

window.onload = displayUsername;



 // localStorage.clear();


function sendCheckoutConfirmation() {
  // Get user information from local storage
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const { username, name, email, address, city, province, zip, phone } = user;

  // Get cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Calculate total price
  let totalPrice = 0;
  for (let item of cartItems) {
    totalPrice += parseFloat(item.price) * item.quantity;
  }

  
  // Compose email body
  let body = `Checkout Confirmation\n\n`;
  body += `User Information:\n`;
  body += `Username: ${username}\n`;
  body += `Email: ${email}\n`;
  body += `Name: ${name}\n`;
  body += `Address: ${address}\n`;
  body += `City: ${city}\n`;
  body += `Province: ${province}\n`;
  body += `Zip: ${zip}\n`;
  body += `Phone: ${phone}\n\n`;
  body += `Cart Information:\n`;
  body += `Item\t\tPrice\tQuantity\tSize\tColor\n`;
  for (let item of cartItems) {
    body += `${item.title}\t${item.price}\t\t${item.quantity}\t${item.size}\t${item.color}\n`;
  }
  body += `Total Price: ₱${totalPrice}\n`;

  // Create the mailto link with the email body
  const mailtoLink = `mailto:yeilvastore@gmail.com?subject=Checkout Confirmation&body=${encodeURIComponent(body)}`;

  // Open the default email client with the mailto link
  window.open(mailtoLink);

  // Remove cart items from local storage after checkout confirmation is sent
  localStorage.removeItem('cart');
}





// sign out function
function signOut() {
  // clear the user's session data
  localStorage.removeItem("username");
  // redirect to homepage
  window.location.href = "index.html";
}

// add event listener to sign out button
document.getElementById("sign-out-btn").addEventListener("click", signOut);

// call checkLoggedIn() on page load
  // removesignupbtn();



function updatetotal(){
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for(var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("₱", ""));
    var quantity = quantityElement.value;
    total = total + (price * quantity);
  }
  total = Math.round(total * 100)/100;
  document.getElementsByClassName("total-price")[0].innerText = "₱" + total;

  var cartCount = document.getElementById("cart-count");
  var numCartItems = document.querySelectorAll(".cart-box").length;
  cartCount.innerHTML = numCartItems;
}


