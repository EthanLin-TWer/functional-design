import { Sieve } from './sieve'

it('should work fine', () => {
  const result = Sieve.primesUpTo(50)

  expect(result).toEqual([
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
  ])
})
