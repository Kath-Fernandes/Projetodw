document.addEventListener('DOMContentLoaded', function() {
    
    const formulario = document.getElementById('meuFormulario');

    formulario.addEventListener('submit', function(event) {
   
        event.preventDefault();


        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return; 
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido (exemplo@dominio.com).");
            return;
        }


        alert("Sucesso! " + nome + ", sua mensagem foi enviada.");


        formulario.reset();
        
        console.log("Formulário enviado e limpo com sucesso.");
    });
});
