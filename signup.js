
// const form = document.querySelector('.check-out');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
// });

function signUp() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let address = document.getElementById('address').value;
  let city= document.getElementById('city').value;
  let province = document.getElementById('province').value;
  let zip= document.getElementById('zip').value;
  let phone = document.getElementById('phone').value;
  
    
    if (localStorage.getItem(username) !== null) {
        alert('Username already exists!');
        return;
    }else{
    
     localStorage.setItem(username, JSON.stringify({
       "password": password,
       "name": name,
       "email": email,
       "address": address,
       "city": city,
       "province": province,
       "zip": zip,
       "phone": phone
     }));
    alert('Sign up successful!');
    displayUsername();
 }
}


// function signUp() {
//   let username = document.getElementById('username').value;
//   let password = document.getElementById('password').value;
//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let address = document.getElementById('address').value;
//   let city= document.getElementById('city').value;
//   let province = document.getElementById('province').value;
//   let zip= document.getElementById('zip').value;
//   let phone = document.getElementById('phone').value;


//     if (localStorage.getItem(username) !== null) {
//         alert('Username already exists!');
//         return;
//       }

//   let user = {
//     password,
//     name,
//     email,
//     address,
//     city,
//     province,
//     zip,
//     phone,
//     cartItems: JSON.parse(localStorage.getItem("cart")) || []
//   };

//   localStorage.setItem(username, JSON.stringify(user));

//   alert('Sign up successful!');
// }

// localStorage.clear();

// // Sign Up
// function signUp() {
//   let username = document.getElementById('username').value;
//   let password = document.getElementById('password').value;
//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let address = document.getElementById('address').value;
//   let city = document.getElementById('city').value;
//   let state = document.getElementById('state').value;
//   let zip = document.getElementById('zip').value;
//   let phone = document.getElementById('phone').value;

//   if (localStorage.getItem(username) !== null) {
//     alert('Username already exists!');
//     return;
//   }

//   let user = {
//     username: username,
//     password: password,
//     name: name,
//     email: email,
//     address: address,
//     city: city,
//     state: state,
//     zip: zip,
//     phone: phone
//   };

//   localStorage.setItem(username, JSON.stringify(user));

//   alert('Sign up successful!');
// }
