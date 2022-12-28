// Where's Waldo
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                       ["Lucinda", "Jacc", "Neff", "Snoop"],
//                       ["Petunia", ["Baked Goods", "Waldo"]]]
// whereIsWaldo.splice(1, 1)
// whereIsWaldo[2][2] = "No One"
// console.log(whereIsWaldo(2, 1, 1))

// Array Restaurant
// let items = [
//     "chicken",
//     "apple pie",
//     "soup",
//     "steak",
//     "salad",
//     "turkey sandwich",
//     "potato bake"
// ]
// console.log(items.sort())
// items.shift()
// console.log(items)
// items.splice(2, 1)
// console.log(items)
// const request = prompt("What would you like to eat?")
// if (request === "chicken" && items[0] === "chicken") {
//     console.log("Sure, the chicken will be served in 15 minutes")
// } else {
//     console.log("Sorry, we don't have that.")
// }

// The Solar System, Part 1
const solarSystem = [
    { name: 'Mercury', ringSystem: false, moons: [] },
    { name: 'Venus', ringSystem: false, moons: [] },
    { name: 'Earth', ringSystem: false, moons: ['The Moon'] },
    { name: 'Mars', ringSystem: false, moons: ['Phobos', 'Deimos'] },
    { name: 'Jupiter', ringSystem: true, moons: ['Europa', 'Ganymede', 'Io', 'Callisto'] },
    { name: 'Saturn', ringSystem: true, moons: ['Titan', 'Enceladus', 'Rhea', 'Mimas'] },
    { name: 'Uranus', ringSystem: true, moons: ['Miranda', 'Titania', 'Ariel', 'Umbriel'] },
    { name: 'Neptune', ringSystem: true, moons: ['Triton', 'Nereid'] }
  ]
// 1  
console.log(solarSystem[4].moons)
// 2
console.log(solarSystem[7].moons[1])
// 3
solarSystem[1].moons.push('Endor')
// 4
solarSystem.push({name: 'Pluto', ringSystem: false, moons: ['Charon']})
// 5
solarSystem[2].diameter = '7917.5'
// 6 
