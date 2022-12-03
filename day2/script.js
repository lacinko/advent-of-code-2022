import { data } from './input.js'

//PART1
const rockPaperscrissorsPlayer = {
  X: 'rock',
  Y: 'paper',
  Z: 'scissors',
}

const rockPaperscrissorsElf = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
}

function getScoreFromHand(hand) {
  switch (hand) {
    case 'rock':
      return 1
    case 'paper':
      return 2
    case 'scissors':
      return 3
    default:
      break
  }
}

function whenPlayerWins(playerHand, elfHand) {
  if (playerHand === 'rock' && elfHand === 'scissors') return true
  if (playerHand === 'scissors' && elfHand === 'paper') return true
  if (playerHand === 'paper' && elfHand === 'rock') return true
  return false
}

function rockPaperScissorsStrategy(data) {
  const gameRoundsArray = data.split('\n').map((round) => {
    const [elf, player] = round.split(' ')
    if (rockPaperscrissorsPlayer[player] === rockPaperscrissorsElf[elf]) {
      return 3 + getScoreFromHand(rockPaperscrissorsPlayer[player])
    }
    if (
      whenPlayerWins(
        rockPaperscrissorsPlayer[player],
        rockPaperscrissorsElf[elf]
      )
    ) {
      return 6 + getScoreFromHand(rockPaperscrissorsPlayer[player])
    }
    return 0 + getScoreFromHand(rockPaperscrissorsPlayer[player])
  })
  return gameRoundsArray.reduce((a, b) => a + b)
}

console.log(rockPaperScissorsStrategy(data))

//PART2

function checkGameSituation(gameCondition, elfHand) {
  switch (gameCondition) {
    case 'Z':
      return 6 + checkElfsHand(gameCondition, elfHand)
    case 'X':
      return 0 + checkElfsHand(gameCondition, elfHand)
    case 'Y':
      return 3 + checkElfsHand(gameCondition, elfHand)
    default:
      break
  }
}

function checkElfsHand(gameCondition, elfHandDecrpyt) {
  const elfHand = rockPaperscrissorsElf[elfHandDecrpyt]

  if (elfHand === 'scissors' && gameCondition === 'Z') return 1
  if (elfHand === 'paper' && gameCondition === 'Z') return 3
  if (elfHand === 'rock' && gameCondition === 'Z') return 2

  if (elfHand === 'scissors' && gameCondition === 'X') return 2
  if (elfHand === 'paper' && gameCondition === 'X') return 1
  if (elfHand === 'rock' && gameCondition === 'X') return 3

  if (elfHand === 'scissors' && gameCondition === 'Y') return 3
  if (elfHand === 'paper' && gameCondition === 'Y') return 2
  if (elfHand === 'rock' && gameCondition === 'Y') return 1
}

function rockPaperScissorsStrategy2(data) {
  const gameRoundsArray = data.split('\n').map((round) => {
    const [elf, player] = round.split(' ')
    return checkGameSituation(player, elf)
  })
  return gameRoundsArray.reduce((a, b) => a + b)
}

console.log(rockPaperScissorsStrategy2(data))
