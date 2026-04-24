const email = "admin@exemplo.com";
const senha = "1234";

function verificarcredenciais() {
    const emailInput = document.getElementById("email").value;
    const senhaInput = document.getElementById("senha").value;

    if (emailInput === email) {
        alert("Email correto!");
        if (senhaInput === senha) {
            alert("Login bem-sucedido!");
            window.location.href = "index.html";
        } else
            alert("Senha incorreta!");
    } else
        alert("Email informado incorretamente");
}