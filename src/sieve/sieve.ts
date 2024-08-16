const getPrimes = (sieve: boolean[], primes: number[], n: number): number[] => {
  if (n >= sieve.length) {
    return primes
  }

  if (!sieve[n]) {
    return getPrimes(sieve, [...primes, n], n + 1)
  }

  return getPrimes(sieve, primes, n + 1)
}

const markMultiples = (sieve: boolean[], prime: number, m: number): boolean[] => {
  const multiple: number = prime * m
  if (multiple >= sieve.length) {
    return sieve
  }

  const markedSieve = [...sieve]
  markedSieve[multiple] = true
  return markMultiples(markedSieve, prime, m + 1)
}

const computeSieve = (sieve: boolean[], n: number): boolean[] => {
  if (n >= sieve.length) {
    return sieve
  }

  if (!sieve[n]) {
    return computeSieve(markMultiples(sieve, n, 2), n + 1)
  }

  return computeSieve(sieve, n + 1)
}

const makeSieve = (upTo: number): boolean[] => [true, true].concat(new Array(upTo - 1).fill(false))

const printPrimes = (sieve: boolean[]): void => {
  console.log(sieve.map((each: boolean, index: number): string => `${index} ${!each ? '✅' : '❌'}`))
}

export class Sieve {
  static primesUpTo(upTo: number): number[] {
    const sieve: boolean[] = makeSieve(Math.max(1, upTo))
    printPrimes(sieve)
    const composites: boolean[] = computeSieve(sieve, 0)
    printPrimes(composites)
    return getPrimes(composites, [], 0)
  }
}
