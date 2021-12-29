import { parseNumbers } from '../utils'
import { part1, part2 } from './day1'

describe('day1', () => {
  const input = parseNumbers('./files/day1-test.txt')

  it('counts the number of individual depth measurement increases', () => {
    expect(part1(input)).toEqual(7)
  })

  it('counts the number of increases across 3-day sliding windows', () => {
    expect(part2(input)).toEqual(5)
  })
})
