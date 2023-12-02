import input from './input.txt'

const calibrationValues = input.split('\n')

const writtenDigits = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]

const result = calibrationValues.reduce((sum, calibrationValue) => {
  let word = ''

  for (let i = 0; i < calibrationValue.length; i++) {
    word += calibrationValue[i]

    const idx = writtenDigits.findIndex((wd) => word.includes(wd))

    if (idx >= 0) {
      word = word.replace(writtenDigits[idx].slice(0, -1), String(idx + 1))
    }
  }

  const numbers = word.match(/[0-9]/g)

  if (numbers && numbers.length > 0) {
    sum += Number(numbers[0] + numbers[numbers.length - 1])
  }

  return sum
}, 0)

console.log(result)
