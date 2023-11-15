function toggleMode() {
  const html = document.documentElement // pegando o html
  html.classList.toggle("ligth-mode") // trocando a class
  const img = document.querySelector("#profile img") // query  pesquisa pelo seletor
  if (html.classList.contains("ligth-mode")) {
    // html.classList.contains.remove("dark-mode")
    img.setAttribute("src", "./assets/avatar2.jpg")
  } else {
    img.setAttribute("src", "./assets/avatar.jpg")
    //  html.classList.add("ligth-mode")
  }
}
