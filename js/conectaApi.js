async function listaVideos() {
  const conexao = await fetch(
    "https://my-json-server.typicode.com/ThiagoAugusto1806/AluraPlay-API/videos"
  );
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch(
    "https://my-json-server.typicode.com/ThiagoAugusto1806/AluraPlay-API/videos",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        titulo: titulo,
        descricao: `${descricao} mil visualizações`,
        url: url,
        imagem: imagem,
      }),
    }
  );
  if (!conexao.ok) {
    throw new Error("Não foi possivel enviar o video");
  }
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
  console.log(termoDeBusca);
  const conexao = await fetch(
    `https://my-json-server.typicode.com/ThiagoAugusto1806/AluraPlay-API/videos?q=${termoDeBusca}`
  );
  console.log(conexao);
  const conexaoConvertida = await conexao.json();
  console.log(conexaoConvertida);
  return conexaoConvertida;
}

export const conectaApi = {
  listaVideos,
  criaVideo,
  buscaVideo,
};
