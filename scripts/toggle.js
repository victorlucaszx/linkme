function toggleMode() {
  const html = document.documentElement // pegando o html
  const img = document.querySelector("#profile img") // query  pesquisa pelo seletor

  html.classList.toggle("ligth-mode") // trocando a class

  if (html.classList.contains("ligth-mode")) {
    img.setAttribute("src", "./assets/avatar2.jpg")
    // Salvando a preferência do usuário no localStorage
    localStorage.setItem("mode", "light")
  } else {
    img.setAttribute("src", "./assets/avatar.jpg")
    //  html.classList.add("ligth-mode")
    // Salvando a preferência do usuário no localStorage
    localStorage.classList("mode", "dark")
  }
}
// Verificando se há uma preferência salva no localStorage ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.classList("mode")
  if (savedMode === "light") {
    html.classList.contains("ligth-mode")
    // Definindo a imagem correta de acordo com o modo salvo
    document
      .querySelector("#profile img")
      .setAttribute("src", "./assets/avatar2.jpg")
  } else {
    html.classList.contains("dark-mode")
    // Definindo a imagem correta de acordo com o modo salvo
    document
      .querySelector("#profile img")
      .setAttribute("src", "./assets/avatar.jpg")
  }
})
