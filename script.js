let cardcontainer = document.querySelector(".card-container");
let dados = [];
let caixaBusca = document.querySelector("#caixa-busca");

caixaBusca.addEventListener("input", () => {
    let termoBusca = caixaBusca.value.toLowerCase();
    let dadosFiltrados = dados.filter(item => {
        return item.nome.toLowerCase().includes(termoBusca) ||
               item.descricao.toLowerCase().includes(termoBusca);
    });
    renderizarCards(dadosFiltrados);
});

async function iniciarBusca() {
    let resposta = await fetch('data.json');
    dados = await resposta.json();
    renderizarCards(dados);
}

function renderizarCards(itensParaRenderizar) {
    cardcontainer.innerHTML = ""; // Limpa os cards existentes
    for (let item of itensParaRenderizar) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <h2>${item.nome}</h2>
            <p>Ano de criação: ${item.ano_criacao}</p>
            <p>Resumo: ${item.descricao}</p>
            <p>Criador: ${item.criador}</p>
            <div>
                <p>Paradigmas:</p>
                <ul>
                    ${item.paradigmas.map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
            <a href="${item.url}" target="_blank">Saiba mais</a>
        `;
        cardcontainer.appendChild(article);
    }
}
