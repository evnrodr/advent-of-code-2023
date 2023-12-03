import input from './input.txt'

const MAX_RED = 12
const MAX_GREEN = 13
const MAX_BLUE = 14

const gameAnalysis = input.split('\n')

let sum = 0

gameAnalysis.forEach((game, index) => {
  const individualGame = game.split(':')
  const sets = individualGame[1].split(';')

  const subsets = sets.map((set) =>
    set
      .trim()
      .split(',')
      .map((subset) => subset.trim())
  )

  subsets.map((subset) => {
    subset.map((colorTuple) => {
      const colorInfo = colorTuple.split(' ')
      if (colorInfo[1] === 'green' && Number(colorInfo[0]) > MAX_GREEN) {
        index = -1
      }
      if (colorInfo[1] === 'red' && Number(colorInfo[0]) > MAX_RED) {
        index = -1
      }
      if (colorInfo[1] === 'blue' && Number(colorInfo[0]) > MAX_BLUE) {
        index = -1
      }
    })
  })

  sum += index + 1
})

console.log(sum)
