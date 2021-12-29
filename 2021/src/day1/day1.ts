import { readFileSync } from 'fs'

export function day1(): void {
  const input = parseInput('./files/day1.txt')

  console.log('--DAY 1--')
  console.log(`Part 1: ${part1(input)}`)
  console.log(`Part 2: ${part2(input)}`)
}

export function part1(input: number[]): number {
  return countIncreasingValues(input)
}

export function part2(input: number[]): number {
  return countIncreasingValues(convertToSlidingWindows(input))
}

function countIncreasingValues(values: number[]) {
  let count = 0
  let prev = values[0]
  for (let i = 1; i < values.length; i++) {
    const next = values[i]
    if (next > prev) {
      count++
    }
    prev = next
  }

  return count
}

function convertToSlidingWindows(input: number[]): number[] {
  return input.reduce((windows: number[], _, i) => {
    if (i + 2 < input.length) {
      windows.push(input[i] + input[i + 1] + input[i + 2])
    }
    return windows
  }, [])
}

export function parseInput(inputFile: string): number[] {
  return readFileSync(inputFile, 'utf-8')
    .split('\n')
    .map((e) => parseInt(e))
}
