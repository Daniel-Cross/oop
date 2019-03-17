const MAXIMUM_HUNGER = 15;
const MAXIMUM_POWER = 50;
const MAXIMUM_FITNESS = 50;

function PocketMonster(name) {
	this.name = name;
	this.age = 0;
	this.power = 0;
	this.hunger = MINIMUM_HUNGER;
	this.fitness = MAXIMUM_FITNESS;
}

PocketMonster.prototype.isAlive = function() {
	if (this.fitness === 0 || this.hunger === 15 || this.age === 15) {
		return false;
	} else {
		return true;
	}
};

PocketMonster.prototype.walk = function() {
	if (this.fitness + 10 <= MAXIMUM_FITNESS) {
		this.fitness += 10;
	} else {
		this.fitness = MAXIMUM_FITNESS;
	}
};

PocketMonster.prototype.train = function() {
	if (this.power + 4 <= MAXIMUM_POWER) {
		this.power += 4;
		this.age += 1;
		this.fitness += 3;
	} else {
		this.power = MAXIMUM_POWER;
	}
};

PocketMonster.prototype.feed = function() {
	if (this.hunger - 3 >= MAXIMUM_HUNGER) {
		this.hunger -= 3;
		this.fitness -= 1;
	} else {
		this.hunger = MAXIMUM_HUNGER;
	}
};

PocketMonster.prototype.evolve = function() {
	this.age += 1;
	this.hunger += 5;
	this.fitness -= 3;
	this.power += 10;
};

PocketMonster.prototype.checkUp = function() {
	if (!this.isAlive) {
		throw new Error(`${this.name} has died!`);
	} else if (this.hunger >= 10 && this.fitness <= 10) {
		return 'I am hungry AND I need a walk';
	} else if (this.hunger >= 10) {
		return 'I am hungry';
	} else if (this.fitness <= 10) {
		return 'I need a walk';
	} else if (!this.isAlive()) {
		return `${this.name} is no longer alive :(`;
	} else {
		return 'I feel great!';
	}
};
