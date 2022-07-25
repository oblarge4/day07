const namepageForm = document.querySelector(".form-namepage");
const namepageInput = document.querySelector(".form-namepage input");


function handleSubmitUsername(event){
    localStorage.setItem("username",namepageInput.value);
}

namepageForm.addEventListener("submit",handleSubmitUsername);