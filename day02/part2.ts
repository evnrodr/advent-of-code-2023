import input from './input.txt'

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

  let maxRed = 0
  let maxGreen = 0
  let maxBlue = 0

  subsets.map((subset) => {
    subset.map((colorTuple) => {
      const colorInfo = colorTuple.split(' ')

      if (colorInfo[1] === 'red' && Number(colorInfo[0]) > maxRed) {
        maxRed = Number(colorInfo[0])
      }
      if (colorInfo[1] === 'green' && Number(colorInfo[0]) > maxGreen) {
        maxGreen = Number(colorInfo[0])
      }
      if (colorInfo[1] === 'blue' && Number(colorInfo[0]) > maxBlue) {
        maxBlue = Number(colorInfo[0])
      }
    })
  })

  sum += maxRed * maxGreen * maxBlue
})

console.log(sum)
