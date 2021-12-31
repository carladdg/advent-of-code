import { parseStrings } from '../utils'
import { part1, part2 } from './day3'

describe('day3', () => {
  const input = parseStrings('./files/day3-test.txt')

  it('calculates the power consumption in decimal', () => {
    expect(part1(input)).toEqual(198)
  })

  it('calculates the life support rating in decimal', () => {
    expect(part2(input)).toEqual(230)
  })
})
