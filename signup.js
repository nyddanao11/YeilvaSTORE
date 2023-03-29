function signUp() {
  let username = document.getElementById('username').value.trim();
  let password = document.getElementById('password').value.trim();
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let address = document.getElementById('address').value.trim();
  let city = document.getElementById('city').value.trim();
  let province = document.getElementById('province').value.trim();
  let zip = document.getElementById('zip').value.trim();
  let phone = document.getElementById('phone').value.trim();

  // check if all fields are filled
  if (!username || !password || !name || !email || !address || !city || !province || !zip || !phone) {
    alert('Please fill out all fields');
    return;
  }

  // check email format
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // check phone number format
  if (!isValidPhoneNumber(phone)) {
    alert('Please enter a valid phone number');
    return;
  }

  let user = {
    username: username,
    password: password,
    name: name,
    email: email,
    address: address,
    city: city,
    province: province,
    zip: zip,
    phone: phone
  };

  localStorage.setItem('user', JSON.stringify(user));

  // Redirect to another page
  window.location.href = 'index.html';
}

function isValidEmail(email) {
  // check email format using regular expression
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
  // check phone number format using regular expression
  const phoneRegex = /^(09|\+639)\d{9}$/;
  return phoneRegex.test(phone);
}

