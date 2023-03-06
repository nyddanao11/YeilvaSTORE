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


function addCartClicked(event){
    const button = event.target;
    const shopProducts = button.parentElement;
    const title = shopProducts.getElementsByClassName("product-title")[0].textContent;
     const price = shopProducts.getElementsByClassName("price")[0].textContent;
     const productImg = shopProducts.getElementsByClassName("product-img")[0].src;
     addProductToCart(title, price, productImg);
     updatetotal();
}
    

 function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");

    var colorSelect = document.getElementById("color-select");
    var sizeSelect = document.getElementById("size-select");
    var color = colorSelect.options[colorSelect.selectedIndex].value;
    var size = sizeSelect.options[sizeSelect.selectedIndex].value;

    for(var i = 0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title && cartItemsNames[i].getAttribute("data-color") == color && cartItemsNames[i].getAttribute("data-size") == size){
            alert("You have already added this item to cart");
            return;
        }
    }

    var cartBoxContent = ` 
        <img src="${productImg}" alt="" class="cart-img">      
        <div class="detail-box">
            <div class="cart-product-title" data-color="${color}" data-size="${size}">${title}</div>
            <div class="cart-price">${price}</div>
            <div>Color: ${color}</div>

            <div>Size: ${size}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>
    `;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
    updatetotal();
}


// function addProductToCart(title, price, productImg){
//     const cartShopBox = document.createElement("div");
//     cartShopBox.classList.add("cart-box");
//     const cartItems = document.getElementsByClassName("cart-content")[0];
//     const cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
//     for(let i = 0; i < cartItemsNames.length; i++){
//         if (cartItemsNames[i].textContent === title ){
//          alert("You have already add this item to cart");
//         return;   
//     }
  

//   }


// let cartBoxContent = ` 
//                         <img src="${productImg}" alt="" class="cart-img">      
//                          <div class="detail-box">
//                            <div class="cart-product-title">${title}</div>
//                             <div class="cart-price">${price}</div>

//                              <input type="number" value="1" class="cart-quantity">
//                          </div>
//                             <i class='bx bxs-trash-alt cart-remove'></i>
//                             `;
                         

// cartShopBox.innerHTML = cartBoxContent;
// cartItems.append(cartShopBox);
// cartShopBox
// .getElementsByClassName("cart-remove")[0]
// .addEventListener("click", removeCartItem);
// cartShopBox
// .getElementsByClassName("cart-quantity")[0]
// .addEventListener("change", quantityChanged);

// }


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


