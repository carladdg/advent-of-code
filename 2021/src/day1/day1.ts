import { parseNumbers } from '../utils'

export function day1(): void {
  const input = parseNumbers('./files/day1.txt')

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

function convertToSlidingWindows(values: number[]): number[] {
  return values.reduce((windows: number[], _, i) => {
    if (i + 2 < values.length) {
      windows.push(values[i] + values[i + 1] + values[i + 2])
    }
    return windows
  }, [])
}
