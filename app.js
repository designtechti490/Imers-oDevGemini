function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML =
      "<p>Nada foi encontrado. Você precisa digitar o nome de um artista, música ou álbum.</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let nome = "";
  let musica = "";
  let genero = "";
  let lancamento = "";
  let album = "";
  let letra = "";
  let tags = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    nome = dado.nome.toLowerCase();
    musica = dado.musica.toLowerCase();
    genero = dado.genero.toLowerCase();
    album = dado.album.toLowerCase();
    letra = dado.letra.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (
      nome.includes(campoPesquisa) ||
      musica.includes(campoPesquisa) ||
      genero.includes(campoPesquisa) ||
      lancamento.includes(campoPesquisa) ||
      album.includes(campoPesquisa) ||
      letra.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Cria um novo elemento HTML para cada resultado
      resultados += `
      <div class="item-resultado">
        <div class="music-card">
          <img src="${dado.capaAlbum}" alt="Capa do álbum" class="album-cover" />
          <h2>${dado.musica}</h2>
          <p>Artista: <span class="artist">${dado.nome}</span></p>
          <p>Álbum: <span class="album">${dado.album}</span></p>
          <p>Ano: <span class="year">${dado.lancamento}</span></p>
          <p>Gênero: <span class="genre">${dado.genero}</span></p>
          <p>Letra:</p>
          <p class="lyrics">${dado.letra}</p>
          <div class="streaming-links">
            <a href="${dado.links.spotify}" target="_blank"
                ><img alt="spotify" weight="48" height="48" src="assets/spotify.svg"/></a>
            <a href="${dado.links.appleMusic}" target="_blank"
                ><img alt="apple-music" weight="48" height="48" src="assets/apple-music.svg"/></a>
            <a href="${dado.links.deezer}" target="_blank"
                ><img alt="deezer" weight="48" height="48" src="assets/deezer.svg"/></a>
            <a href="${dado.links.youtubeMusic}" target="_blank"
                ><img alt="youtube-music" weight="48" height="48" src="assets/youtube-music.svg" /></a>
          </div>
        </div>
      </div>
      `;
    }
  }

  if(!resultados) {
   resultados = "<p>Nada foi encontrado</p>";
  }

  section.innerHTML = resultados;
}
