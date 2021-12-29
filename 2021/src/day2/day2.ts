import { readFileSync } from 'fs'

type direction = 'forward' | 'down' | 'up'

export function day2(): void {
  const input = parseInput('./files/day2.txt')

  console.log('--DAY 2--')
  console.log(`Part 1: ${part1(input)}`)
  console.log(`Part 2: ${part2(input)}`)
}

export function part1(input: string[]): number {
  return applyCommands(input)
}

export function part2(input: string[]): number {
  return applyCommands(input, { trackAim: true })
}

function applyCommands(
  commands: string[],
  { trackAim } = { trackAim: false }
): number {
  let position = 0
  let depth = 0
  let aim = 0

  commands.forEach((command) => {
    const [direction, units] = parseCommand(command)
    switch (direction) {
      case 'forward':
        position += units
        if (trackAim) depth += aim * units
        return
      case 'down':
        trackAim ? (aim += units) : (depth += units)
        return
      case 'up':
        trackAim ? (aim -= units) : (depth -= units)
        return
    }
  })

  return position * depth
}

function parseCommand(command: string): [direction, number] {
  const parts = command.split(' ')
  return [parts[0] as direction, parseInt(parts[1])]
}

export function parseInput(inputFile: string): string[] {
  return readFileSync(inputFile, 'utf-8').split('\n')
}
