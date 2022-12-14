const quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
]

// Random quote of the day generator
const randomQuote = () => {
  document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
}

randomQuote()

// Part 1
const shortenPageTitle = () => {
  let newPageTitle = document.getElementById("main-title")  
  newPageTitle.textContent = "Yo, Dom Toretto says hi!"
}
shortenPageTitle()

// Part 2
const changeBodyBgColor = () => {
  let newBodyBgColor = document.querySelector("background-color")
  document.body.style.backgroundColor = "darkseagreen"
}
changeBodyBgColor()

// Part 3
const removeLastFavoriteThing = () => {
  let newList = document.getElementById("favorite-things")
  newList.removeChild(newList.lastElementChild)
}
removeLastFavoriteThing()

// Part 4 - not sure if this worked
const makeSpecialTitlesBigger = () => {
  let newSpecTitles = document.getElementsByClassName("special-title")
  document.newSpecTitles.style.fontSize = "2 rem"
}
makeSpecialTitlesBigger()

// Part 5 - not sure why this doesn't work
const removeChicagoRace = () => {
  let list = document.getElementById("past-races")
  list.removeChild(list.children[3])
}
removeChicagoRace()

// Part 6 - doesn't work either
const addPastRace = () => {
  let raceList = document.createElement("li")
  let node = document.createTextNode("Sydney")
  raceList.appendChild(node)
  document.getElementById("past-races").appendChild(raceList)
}
addPastRace()

// Part 7
const createNewBlogPost = () => {

}
