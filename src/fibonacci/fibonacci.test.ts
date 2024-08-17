import { fibs } from './fibonacci'

it('fibs 0', () => {
  expect(fibs(0)).toEqual([])
})

it('fibs 1', () => {
  expect(fibs(1)).toEqual([1])
})

it('fibs 2', () => {
  expect(fibs(2)).toEqual([1, 1])
})

it('fibs 3', () => {
  expect(fibs(3)).toEqual([1, 1, 2])
})

it('fibs 4', () => {
  expect(fibs(4)).toEqual([1, 1, 2, 3])
})

it('fibs 15', () => {
  expect(fibs(15)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610])
})
