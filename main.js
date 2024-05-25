const name = document.querySelector('input#rname');
const surname = document.querySelector('input#surname');
const howold = document.querySelector('input#old');
const resetButton = document.querySelector('.reset');
const sendButton = document.querySelector('.send');

function showOrHideErrorMessage(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
}

function checkAge() {
    if(howold <= 18){
        showOrHideErrorMessage(howold, 'Jesteś za młody/a');
    }
    else {
        showOrHideErrorMessage(howold, '');
    }
}


sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    checkAge();

})

resetButton.addEventListener('click', (e) => {
    e.preventDefault();
})


