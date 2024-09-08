//console.log(dados);
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Oops, sua busca está vazia! Digite algo para pesquisar...</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""

    let nome = ""
    let resumo = ""
    let jogosFisicos = ""
    let jogosDigitais = ""
    
    for (let dado of dados) {
        nome = String(dado.nome).toLowerCase()
        resumo = String(dado.resumo).toLowerCase()
        jogosFisicos = String(dado.jogosFisicos).toLowerCase()
        jogosDigitais = String(dado.jogosDigitais).toLowerCase()

        if(nome.includes(campoPesquisa) || resumo.includes(campoPesquisa) || jogosFisicos.includes(campoPesquisa) || jogosDigitais.includes(campoPesquisa)){        
        resultados += `
        <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.nome}</a>
        </h2>
        <p class="descricao-meta">${dado.resumo}</p>
        <h4>Jogos Físicos recomendados</h4>
        <p class="descricao-meta">${dado.jogosFisicos}</p>
        <h4>Jogos Digitais recomendados</h4>
        <p class="descricao-meta">${dado.jogosDigitais}</p>
        </div>
    `;}
    }

    if (!resultados) {
        resultados = `
            <div class="mensagem-nao-encontrada">
                <p>Oops... Parece que não encontramos essa soft skill, você pode buscar por palavras similares ou nos enviar sugestões para aumentar a base de conhecimento via Discord ou GitHub</p>
            </div>
        `;
    }
    
    section.innerHTML = resultados
}


