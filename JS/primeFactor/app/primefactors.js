class PrimeFactors {
	static generate(n) {
		let primes = [];
		for(let factor = 2; n > 1; ++factor) {
			for(; n % factor == 0; n /= factor) { 
				primes.push(factor);
			}
		}
		
		return primes
	}
}

exports.PrimeFactors = PrimeFactors