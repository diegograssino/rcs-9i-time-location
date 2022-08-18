// 1- Seleccionar los elementos que necesite

const button = document.getElementById("colors")
const actualURL = document.getElementById("actualURL")
const replace = document.getElementById("replace")

// 1.bis- Escuchar los eventos relacionados que se disparen
// Si no me hace falta escuchar un evento SEGURAMENTE voy a tener que ejecutar una funcion por lo menos una vez al principio de la carga

button.addEventListener("click", () => suspense())
replace.addEventListener("click", () => replaceURL())

const changeColor = () => {
  const COLORS = ["red", "white", "blue", "violet", "yellow"]

  setInterval(() => {
    const random = Math.floor(Math.random() * 5)
    button.style.backgroundColor = COLORS[random]
  }, 2000);

}

const suspense = () => {
  const originalText = button.innerText
  button.innerText = "Cargando ..."
  setTimeout(() => {
    button.innerText = originalText
  }, 2000);
}

const showURL = () => {
  actualURL.innerText = location.href
}

const replaceURL = () => {
  // location.replace("https://www.google.com")
  location.href = "https://www.bing.com"
}

changeColor()
showURL()
// (function (arguments) {
  // changeColor()
// })()
