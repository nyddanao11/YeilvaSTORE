
function signUp() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let province = document.getElementById('province').value;
    let zip = document.getElementById('zip').value;
    let phone = document.getElementById('phone').value;

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

