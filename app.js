function pesquisar() {
    // Obtém a seção HTML onde os resultados serão renderizados
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
   
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nenhuma item pesquisado</p>"
    return
  }
  campoPesquisa = campoPesquisa.toLowerCase ()
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      if (titulo.includes(campoPesquisa) || descricao.includes (campoPesquisa) || tags.includes (campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="https://www.youtube.com/watch/v=06imqa2hIMo" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="Descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
      console.log(dado.titulo.includes(campoPesquisa)) 
      // Constrói o HTML para cada item de resultado, formatando o título, descrição e link
     
    }
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui o HTML gerado para a seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }

// console.log(dados);

