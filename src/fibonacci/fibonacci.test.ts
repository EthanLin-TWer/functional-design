import { fibsRecursiveVersion, fibsTcoVersion } from './fibonacci'

describe('tco version', () => {
  it('fibs 0', () => {
    expect(fibsTcoVersion(0)).toEqual([])
  })

  it('fibs 1', () => {
    expect(fibsTcoVersion(1)).toEqual([1])
  })

  it('fibs 2', () => {
    expect(fibsTcoVersion(2)).toEqual([1, 1])
  })

  it('fibs 3', () => {
    expect(fibsTcoVersion(3)).toEqual([1, 1, 2])
  })

  it('fibs 4', () => {
    expect(fibsTcoVersion(4)).toEqual([1, 1, 2, 3])
  })

  it('fibs 15', () => {
    expect(fibsTcoVersion(15)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610])
  })
})

describe('recursive version', () => {
  it('fibs 0', () => {
    expect(fibsRecursiveVersion(0)).toEqual([])
  })

  it('fibs 1', () => {
    expect(fibsRecursiveVersion(1)).toEqual([1])
  })

  it('fibs 2', () => {
    expect(fibsRecursiveVersion(2)).toEqual([1, 1])
  })

  it('fibs 3', () => {
    expect(fibsRecursiveVersion(3)).toEqual([1, 1, 2])
  })

  it('fibs 4', () => {
    expect(fibsRecursiveVersion(4)).toEqual([1, 1, 2, 3])
  })

  it('fibs 15', () => {
    expect(fibsRecursiveVersion(15)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610])
  })
})
