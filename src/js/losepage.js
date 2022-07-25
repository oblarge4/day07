const gameReset = document.querySelector(".form-reset");

function reset(){
    localStorage.removeItem("username");
}

gameReset.addEventListener("submit",reset);
