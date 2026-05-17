// FORMULÁRIO
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("E-mail inválido!");
        return;
    }

    document.getElementById("msg").innerText = "Mensagem enviada com sucesso!";

    this.reset();
});


// TEMA CLARO/ESCURO
function alternarTema() {
    document.body.classList.toggle("dark");
}