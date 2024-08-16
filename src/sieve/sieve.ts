export class Sieve {
  private upTo: number

  static primesUpTo(upTo: number): number[] {
    return new Sieve(upTo).getPrimes()
  }

  private constructor(upTo: number) {
    this.upTo = Math.max(1, upTo)
  }

  public getPrimes(): number[] {
    const isComposite: boolean[] = new Array(this.upTo + 1).fill(false)
    isComposite[0] = isComposite[1] = true
    for (let i = 0; i < isComposite.length; i += 1) {
      if (!isComposite[i]) {
        for (let c = i * 2; c < isComposite.length; c += i) {
          isComposite[c] = true
        }
      }
    }

    return isComposite
      .map((composite) => !composite)
      .reduce((result, isPrime, index) => {
        return isPrime ? result.concat(index) : result
      }, [] as number[])
  }
}
