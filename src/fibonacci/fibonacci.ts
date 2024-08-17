const fibsWork = (n: number, i: number, fs: number[]): number[] => {
  if (i === n) {
    return fs
  }
  return fibsWork(n, i + 1, [...fs, fs[fs.length - 1] + fs[fs.length - 2]])
}

export const fibs = (n: number): number[] => {
  if (n < 1) {
    return []
  }

  if (n === 1) {
    return [1]
  }

  return fibsWork(n, 2, [1, 1])
}
