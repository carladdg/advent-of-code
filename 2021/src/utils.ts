import { readFileSync } from 'fs'

export function parseStrings(inputFile: string): string[] {
  return readFileSync(inputFile, 'utf-8').split('\n')
}

export function parseNumbers(inputFile: string): number[] {
  return parseStrings(inputFile).map((e) => parseInt(e))
}
