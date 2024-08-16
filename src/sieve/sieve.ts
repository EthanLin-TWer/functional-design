export class Sieve {
  isComposite: boolean[]

  static primesUpTo(upTo: number): number[] {
    return new Sieve(upTo).getPrimes()
  }

  private constructor(upTo: number) {
    const newUpTo = upTo < 1 ? 1 : upTo
    this.isComposite = new Array<boolean>(newUpTo + 1).fill(false)
    this.isComposite[0] = this.isComposite[1] = true
    for (let i = 0; i < this.isComposite.length; i += 1) {
      if (!this.isComposite[i]) {
        for (let c = i + i; c < this.isComposite.length; c += i) {
          this.isComposite[c] = true
        }
      }
    }
  }

  public getPrimes(): number[] {
    const primes: number[] = []
    for (let i = 0; i < this.isComposite.length; i += 1) {
      if (!this.isComposite[i]) {
        primes.push(i)
      }
    }
    return primes
  }
}
