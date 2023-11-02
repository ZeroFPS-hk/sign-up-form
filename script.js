const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password")

password.addEventListener("change", validatePasswordConfirm);
passwordConfirm.addEventListener("change", validatePasswordConfirm);

function validatePasswordConfirm(){
    password.value === passwordConfirm.value? passwordConfirm.setCustomValidity(""):passwordConfirm.setCustomValidity("Passwords do not match.");
}