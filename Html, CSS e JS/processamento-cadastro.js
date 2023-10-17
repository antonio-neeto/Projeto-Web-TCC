
const form = document.getElementById("form");
const usuario = document.getElementById("usuario");
const nomeCompleto = document.getElementById("nomeCompleto");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const curso = document.getElementById("curso");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputUsername();
});

function checkInputUsername() {
    const usuarioValue = usuario.value;

    if (usuarioValue === "") {
        errorInput(usuario, "Preencha um Usuário!");
    }
    else{
        const formItem = usuario.parentElement;
        formItem.classList = "textfield-cadastro"
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("span");

    textMessage.innerText = message; 
    formItem.className = "textfield-cadastro error";
}
