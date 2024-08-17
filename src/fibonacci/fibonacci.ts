import { memoize } from 'lodash'

export const fibsTcoVersion = (n: number): number[] => {
  const fibs = (of: number, i: number, fs: number[]): number[] => {
    return i === of ? fs : fibs(of, i + 1, [...fs, fs[fs.length - 1] + fs[fs.length - 2]])
  }

  if (n < 1) {
    return []
  }

  if (n === 1) {
    return [1]
  }

  return fibs(n, 2, [1, 1])
}

export const fibsRecursiveVersion = (n: number): number[] => {
  const fibs = memoize((of: number): number => (of <= 2 ? 1 : fibs(of - 1) + fibs(of - 2)))

  return Array(n)
    .fill(false)
    .map((_, i) => fibs(i + 1))
}
