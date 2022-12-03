import { data } from './input.js'
//PART1
function findTheMostCalories(data) {
  const foodCaloriesCounter = []
  const elfsFoodArray = data.split('\n\n').map((elf, idx) => {
    let foodCalories = 0
    elf.split('\n').map((food, idx) => {
      foodCalories += +food
    })
    foodCaloriesCounter.push(foodCalories)
    foodCalories = 0
  })
  return foodCaloriesCounter.sort((a, b) => b - a)
}

console.log(findTheMostCalories(data)[0])
//PART2

function findTheTopThreeElfs(data) {
  return data.splice(0, 3).reduce((a, b) => a + b)
}

console.log(findTheTopThreeElfs(findTheMostCalories(data)))
