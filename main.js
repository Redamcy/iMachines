//navigatgion button icon change on click
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);

    }
});

//swap images funcation

function imageShow0() {
    document.getElementById('image-hide0').style.display = 'block';
    document.getElementById('image-hide1').style.display = 'none';
    document.getElementById('image-hide2').style.display = 'none';
}
function imageShow1() {
    document.getElementById('image-hide1').style.display = 'block';
    document.getElementById('image-hide0').style.display = 'none';
    document.getElementById('image-hide2').style.display = 'none';
}

function imageShow2() {
    document.getElementById('image-hide2').style.display = 'block';
    document.getElementById('image-hide0').style.display = 'none';
    document.getElementById('image-hide1').style.display = 'none';
}

//validate function

const form = document.getElementById('form');
const username = document.getElementById('name');
const phonenumber = document.getElementById('number');
const email = document.getElementById('email');
const messagearea = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputGroup = element.parentElement;
    const errorDisplay = inputGroup.querySelector('.error')

    errorDisplay.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success')
}

const setSuccess = element => {
    const inputGroup = element.parentElement;
    const errorDisplay = inputGroup.querySelector('.error');

    errorDisplay.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const messageareaValue = messagearea.value.trim();
    const phonenumberValue = phonenumber.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address')
    } else {
        setSuccess(email);
    }

    if (phonenumberValue === '') {
        setError(phonenumber, 'Phone number is required');
    } else if (phonenumberValue.length < 8) {
        setError(phonenumber, 'Please enter a valid phone number');
    } else {
        setSuccess(phonenumber);
    }

    if (messageareaValue === '') {
        setError(messagearea, 'Message is required');
    } else {
        setSuccess(messagearea);
    }

};


