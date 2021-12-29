import { parseStrings } from '../utils'
import { part1, part2 } from './day2'

describe('day2', () => {
  const input = parseStrings('./files/day2-test.txt')

  it('calculates final horizontal position times final depth', () => {
    expect(part1(input)).toEqual(150)
  })

  it('calculates position times depth with consideration of aim', () => {
    expect(part2(input)).toEqual(900)
  })
})
