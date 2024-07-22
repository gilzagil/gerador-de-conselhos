const titulo = document.querySelector(".advice-id");
const descricao = document.querySelector(".advice-description")
const botao = document.querySelector(".advice-update")

async function buscaConselho() {
    try {
        const url = "https://api.adviceslip.com/advice";
        const resposta = await fetch(url);
        const objeto_json = await resposta.json();       //tranforma no formato json
        const numId = objeto_json.slip.id;
        const conselho = `"${objeto_json.slip.advice}"`;
      
        titulo.innerText = numId;
        descricao.innerText = conselho;
    }
    catch (erro) {
        alert("Erro ao acessar a API")
    }
}

botao.addEventListener("click", buscaConselho);
