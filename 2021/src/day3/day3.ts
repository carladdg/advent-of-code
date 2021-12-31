import { parseStrings } from '../utils'

export function day3(): void {
  const input = parseStrings('./files/day3.txt')

  console.log('--DAY 3--')
  console.log(`Part 1: ${part1(input)}`)
  console.log(`Part 2: ${part2(input)}`)
}

export function part1(input: string[]): number {
  return calculatePowerConsumption(input)
}

export function part2(input: string[]): number {
  return calculateOxygenRating(input) * calculateCO2Rating(input)
}

function calculatePowerConsumption(input: string[]): number {
  let gammaString = ''
  let epsilonString = ''

  const bitScores = getBitScores(input)

  bitScores.forEach((score) => {
    if (score > 0) {
      gammaString += '1'
      epsilonString += '0'
    } else if (score < 0) {
      gammaString += '0'
      epsilonString += '1'
    }
  })

  return parseInt(gammaString, 2) * parseInt(epsilonString, 2)
}

function getBitScores(input: string[]): number[] {
  const numBits = input[0].length
  const bitScores = new Array(numBits).fill(0)

  input.forEach((value) => {
    const bits = value.split('')
    bits.forEach((bit, i) => {
      bit == '1' ? bitScores[i]++ : bitScores[i]--
    })
  })

  return bitScores
}

function calculateOxygenRating(values: string[]): number {
  return calculateGasRating(values, { preferredBit: 1 })
}

function calculateCO2Rating(values: string[]): number {
  return calculateGasRating(values, { preferredBit: 0 })
}

function calculateGasRating(
  values: string[],
  { preferredBit: preferredBit }: { preferredBit: number }
): number {
  let i = 0
  let possibleValues = values

  while (possibleValues.length > 1) {
    const bitScore = getBitScoreAtIndex(possibleValues, i)
    const target = (bitScore >= 0 ? preferredBit : 1 - preferredBit).toString()

    possibleValues = possibleValues.filter((value) => value[i] == target)

    i++
  }

  return parseInt(possibleValues[0], 2)
}

function getBitScoreAtIndex(input: string[], i: number): number {
  let bitScore = 0

  input.forEach((value) => {
    value[i] == '1' ? bitScore++ : bitScore--
  })

  return bitScore
}

// Less readable but functional way to get either all bit scores or bit score at index
// function getBitScoresReusable(
//   input: string[],
//   start = 0,
//   end = input[0].length
// ): number[] {
//   const bitScores = new Array(end).fill(0)

//   input.forEach((value) => {
//     const bits = value.slice(start, end).split('')
//     bits.forEach((bit, i) => {
//       bit == '1' ? bitScores[i]++ : bitScores[i]--
//     })
//   })

//   return bitScores
// }
