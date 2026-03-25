const img = document.getElementById("cat");
const erro = document.getElementById("erro");

fetch("https://api.thecatapi.com/v1/images/search")
  .then(response => response.json())
  .then(data => {
    img.src = data[0].url;
  })
  .catch(() => {
    erro.textContent = "Erro ao carregar imagem 😿";
  });