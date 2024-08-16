export class Sieve {
  static primesUpTo(upTo: number): number[] {
    return Sieve.getPrimes(Sieve.computeSieve(Sieve.makeSieve(Math.max(1, upTo)), 0), [], 0)
  }

  public static getPrimes(sieve: boolean[], primes: number[], n: number): number[] {
    if (n >= sieve.length) {
      return primes
    }

    if (!sieve[n]) {
      return Sieve.getPrimes(sieve, [...primes, n], n + 1)
    }

    return Sieve.getPrimes(sieve, primes, n + 1)
  }

  public static computeSieve(sieve: boolean[], n: number): boolean[] {
    if (n >= sieve.length) {
      return sieve
    }

    if (!sieve[n]) {
      return Sieve.computeSieve(Sieve.markMultiples(sieve, n, 2), n + 1)
    }

    return Sieve.computeSieve(sieve, n + 1)
  }

  public static makeSieve(upTo: number): boolean[] {
    const sieve = new Array(upTo + 1).fill(false)
    sieve[0] = true
    sieve[1] = true
    return sieve
  }

  private static markMultiples(sieve: boolean[], prime: number, m: number): boolean[] {
    const multiple: number = prime * m
    if (multiple >= sieve.length) {
      return sieve
    }

    const markedSieve = [...sieve]
    markedSieve[multiple] = true
    return Sieve.markMultiples(markedSieve, prime, m + 1)
  }
}
