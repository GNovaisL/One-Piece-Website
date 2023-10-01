const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
let i = 0;

botoes.forEach((botao, indice)  => {
    botao.addEventListener("click", () => {
        const botao_selecionado = document.querySelector(".botao.selecionado");
        botao_selecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const personagem_selecionado = document.querySelector(".personagem.selecionado");
        personagem_selecionado.classList.remove("selecionado");
        
        personagens[indice].classList.add("selecionado");
    })
});