class GuessingGame {
	constructor() {}

	setRange(min, max) {
		this.min = min;
		this.max = max;
	}

	guess() {
		this.num = Math.ceil((this.min + this.max) / 2);
		return this.num;
	}

	lower() {
		this.max = this.num;
		this.guess();
	}

	greater() {
		this.min = this.num;
		this.guess();
	}
}

module.exports = GuessingGame;
