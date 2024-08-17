const getPrimes = (sieve: boolean[], primes: number[], n: number): number[] => {
  if (n >= sieve.length) {
    return primes
  }

  return getPrimes(sieve, !sieve[n] ? [...primes, n] : primes, n + 1)
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

  return computeSieve(!sieve[n] ? markMultiples(sieve, n, 2) : sieve, n + 1)
}

const makeSieve = (upTo: number): boolean[] => [true, true].concat(new Array(upTo - 1).fill(false))

const printPrimes = (sieve: boolean[]): void => {
  console.log(sieve.map((each: boolean, index: number): string => `${index} ${!each ? '✅' : '❌'}`))
}

export class Sieve {
  static primesUpTo(upTo: number): number[] {
    const sieve: boolean[] = makeSieve(Math.max(1, upTo))
    const composites: boolean[] = computeSieve(sieve, 0)
    printPrimes(composites)

    // 1. 虽然拆开了流程，并且每个函数都是纯函数，但是不同流程都依赖同一个数据结构，其实脑里还是要去算那个数据结构。而且，更鬼畜的是，你在算某个number是不是素数的时候，拿的是数组下标表示这个数，拿全量数组长度当极限（就涉及到数组下标从0开始的规则，必须用>=），烧脑。
    // 2. 递归的思路既难懂，也不好想。不知道你咋弄出来这个一个东西。
    // 3. 上面两点得到的一个结果就是，追求纯函数的同时，可读性不一定提升。这是应用函数式的时候必须要平衡的问题。
    // 4. 大量逻辑重复如`!sieve[n]`, `n >= sieve.length`等等，不知道说明了什么。
    // 5. 而且吧这里也不完全是用纯函数不可变的思维来搞，而是给一个大数组，每个方法里面不停地标记修改它，只不过修改的过程是不可变的而已。
    // 我放弃了，终究是没读懂这段代码。
    return getPrimes(composites, [], 0)
  }
}
