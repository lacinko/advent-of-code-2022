import { data } from './input.js'

//PART1

const itemsValue = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
}

function getItemValue(item) {
  const UpperCase = itemsValue[item] === undefined ? 26 : 0
  return itemsValue[item.toLowerCase()] + UpperCase
}

function getRucsackCompartmentType(data) {
  return data
    .split('\n')
    .map((rucsack, idx) => {
      const compartmentOne = new Set([
        ...rucsack.substring(0, rucsack.length / 2),
      ])
      const compartmentTwo = new Set([...rucsack.substring(rucsack.length / 2)])
      const smallestCompartmentSize = Math.min(
        compartmentOne.size,
        compartmentTwo.size
      )
      const smallestCompartment =
        compartmentOne.size === smallestCompartmentSize
          ? compartmentOne
          : compartmentTwo

      for (let index = 0; index < smallestCompartmentSize; index++) {
        if (
          compartmentOne.has(Array.from(smallestCompartment)[index]) &&
          compartmentTwo.has(Array.from(smallestCompartment)[index])
        ) {
          return getItemValue(Array.from(smallestCompartment)[index])
        }
      }
    })
    .reduce((a, b) => a + b)
}

console.log(getRucsackCompartmentType(data))

//PART2
function getRucsackCompartmentTypeGroup(data) {
  const RusakcsArray = data.split('\n')

  return RusakcsArray.map((rucsack, idx) => {
    if ((idx + 1) % 3 === 0 && idx > 0) {
      const rucsackOne = new Set([...RusakcsArray[idx - 2]])
      const rucsackTwo = new Set([...RusakcsArray[idx - 1]])
      const rucsackThree = new Set([...RusakcsArray[idx - 0]])
      const smallestRucksackSize = Math.min(
        rucsackOne.size,
        rucsackTwo.size,
        rucsackThree.size
      )

      const smallestRucsack =
        rucsackOne.size === smallestRucksackSize
          ? rucsackOne
          : rucsackTwo.size === smallestRucksackSize
          ? rucsackTwo
          : rucsackThree

      for (let index = 0; index < smallestRucksackSize; index++) {
        if (
          rucsackOne.has(Array.from(smallestRucsack)[index]) &&
          rucsackTwo.has(Array.from(smallestRucsack)[index]) &&
          rucsackThree.has(Array.from(smallestRucsack)[index])
        ) {
          return getItemValue(Array.from(smallestRucsack)[index])
        }
      }
    }
  })
    .filter((item) => item !== undefined)
    .reduce((a, b) => a + b)
}

console.log(getRucsackCompartmentTypeGroup(data))
