import { Sieve } from './sieve'

it('sieve 0', () => {
  expect(Sieve.primesUpTo(0)).toEqual([])
})

it('sieve 1', () => {
  expect(Sieve.primesUpTo(1)).toEqual([])
})

it('sieve 2', () => {
  expect(Sieve.primesUpTo(2)).toEqual([2])
})

it('sieve 3', () => {
  expect(Sieve.primesUpTo(3)).toEqual([2, 3])
})

it('sieve 4', () => {
  expect(Sieve.primesUpTo(4)).toEqual([2, 3])
})

it('sieve 9', () => {
  expect(Sieve.primesUpTo(9)).toEqual([2, 3, 5, 7])
})

it('sieve 50', () => {
  expect(Sieve.primesUpTo(50)).toEqual([
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
  ])
})
