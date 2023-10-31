const loginBlock = document.querySelector('.login-block');
const authBlock = document.querySelector('.auth-block');
const successBlock = document.querySelector('.logged-block');
const recoveryBlock = document.querySelector('.password-recovery-block');
const changeBlock = document.querySelector('.change-password-block');

const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');

const loginInputReg = document.querySelector('#loginReg');
const emailInputReg = document.querySelector('#emailReg');
const passwordInputReg = document.querySelector('#passwordReg');

let users = [];

function login() {
    let login = loginInput.value;
    let password = passwordInput.value;

    if (login !== '' && password !== '') {
        const user = users.find(user => (user.name === login || user.email === login) && user.password === password);
        
        if (user) {
            loginBlock.style.display = 'none';
            successBlock.style.display = 'flex';

            loginInput.value = '';
            passwordInput.value = '';
            
            console.log('Login successful');
            alert('Login successful');
        } else {
            console.log('Login failed. Invalid email or login or password.');
            alert('Login failed. Invalid email or login or password.');
        }
    } else {
        console.log('Please enter email or login and password.');
        alert('Please enter email or login and password.');
    }
}

function registrate() {
    let login = loginInputReg.value;
    let email = emailInputReg.value;
    let password = passwordInputReg.value;

    if (login !== '' && email !== '' && password !== '') {
        const isDuplicate = users.some(user => user.email === email || user.name === login);

        if (isDuplicate) {
            console.log('Registration failed. Username or email is already in use.');
        } else {
            users.push({ name: login, email: email, password: password });

            authBlock.style.display = 'none';
            loginBlock.style.display = 'flex';

            console.log('Registration successful');
            console.log(users);

            loginInputReg.value = '';
            emailInputReg.value = '';
            passwordInputReg.value = '';
        }
    } else {
        console.log('Please fill in all the registration fields.');
    }
}

function changePassword() {
    let email = document.getElementById('emailChange').value;
    let oldPassword = document.getElementById('oldPasswordInput').value;
    let newPassword = document.getElementById('newPasswordInput').value;

    if (email !== '' && oldPassword !== '' && newPassword !== '') {
        const userIndex = users.findIndex(user => user.email === email);

        if (userIndex !== -1 && users[userIndex].password === oldPassword) {
            users[userIndex].password = newPassword;
            console.log('Password changed successfully');
            document.getElementById('emailChange').value = '';
            document.getElementById('oldPasswordInput').value = '';
            document.getElementById('newPasswordInput').value = '';
        } else {
            console.log('Password change failed. Invalid email or old password.');
        }
    } else {
        console.log('Please fill in all the fields.');
    }
}

function passwordRecovery() {
    let email = document.getElementById('emailRecovery').value;

    if (email !== '') {
        const user = users.find(user => user.email === email);

        if (user) {
            console.log(`Password recovery email sent to ${email}`);
        } else {
            console.log('Password recovery failed. User not found with the provided email.');
        }
    } else {
        console.log('Please enter your email for password recovery.');
    }
}


function showReg() {
    loginBlock.style.display = 'none';
    authBlock.style.display = 'flex';
}

function signout() {
    successBlock.style.display = 'none';
    loginBlock.style.display = 'flex';
}

function showRecovery() {
    loginBlock.style.display = 'none';
    recoveryBlock.style.display = 'flex';
}

function showChange() {
    loginBlock.style.display = 'none';
    changeBlock.style.display = 'flex';
}