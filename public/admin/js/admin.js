
function login(userName, password) {
    console.log('user ', userName);
    console.log('pass ', password);

    if (!userName || userName == "") {
        console.log('Username is required');
    }
    else if (!password || password == "") {
        console.log('passoword is required');
    }
    else if (userName == "admin" && password == "admin") {
        console.log('Logging');
        window.open("http://localhost:3000/admin");
    }
    else {
        console.log('invalid username or password');
    }

}

