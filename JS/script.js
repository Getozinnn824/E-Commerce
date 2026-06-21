function ornament(){
   const img= document.createElement("img")
   img.src = "../CSS/img/ornament.png"
   img.width = "200px";
   img.alt= "imagem"
}
window.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");
    const mensagem = document.getElementById("mensagem");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const senha = document.getElementById("senha").value.trim();

        if (!nome || !senha) {
            mensagem.textContent = "Preencha todos os campos.";
            return;
        }

        mensagem.textContent = "Cadastro realizado com sucesso!";
        form.reset();
    });

});