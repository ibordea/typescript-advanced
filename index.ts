function addNumbers(a: number, b: number): number {
	return a + b;
}

function multiplyNumbers(a: number, b: number): number {
	return a * b;
}

function findLargest(numbers: number[]): number {
	let largest = -Infinity;

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > largest) {
			largest = numbers[i];
		}
	}

	return largest;
}

function getLetterCount(str: string): Record<string, number> {
	let letterCount: Record<string, number> = {};

	for (let i = 0; i < str.length; i++) {
		let letter = str[i].toLowerCase();
		if (letterCount[letter]) {
			letterCount[letter]++;
		} else {
			letterCount[letter] = 1;
		}
	}

	return letterCount;
}

const myNumber: number = 42;
const myString: string = 'Hello, TypeScript!';
const myBoolean: boolean = true;
const myArray: number[] = [1, 2, 3, 4, 5];
const myObject: { name: string; age: number } = { name: 'John Doe', age: 30 };

let myAny: any = 42;
myAny = 'Hello, TypeScript!';
myAny = { name: 'Jane Doe', age: 25 };

/* ******************************************************************************************************************************** */

function linearSearch<T>(array: T[], target: T): number {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			return i;
		}
	}
	return -1;
}

function binarySearch(array: number[], target: number): number {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (array[mid] === target) {
			return mid;
		} else if (array[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
}

interface INode<T> {
	value: T;
	children: INode<T>[];
	addChild(node: INode<T>): void;
}

class NewNode<T> implements INode<T> {
	value: T;
	children: NewNode<T>[];

	constructor(value: T) {
		this.value = value;
		this.children = [];
	}

	addChild(node: NewNode<T>): void {
		this.children.push(node);
	}
}

function depthFirstSearch<T>(root: NewNode<T>, target: T): NewNode<T> | null {
	let stack: NewNode<T>[] = [root];

	while (stack.length > 0) {
		let node = stack.pop()!;
		if (node.value === target) {
			return node;
		}
		for (let i = node.children.length - 1; i >= 0; i--) {
			stack.push(node.children[i]);
		}
	}

	return null;
}

let root = new NewNode<number>(1);
let child1 = new NewNode<number>(2);
let child2 = new NewNode<number>(3);
let grandchild1 = new NewNode<number>(4);
let grandchild2 = new NewNode<number>(5);

/* ******************************************************************************************************************************** */

interface IBurger {
	patty?: string;
	cheese?: string;
	sauce?: string;
	toppings?: string[];
}

interface IBurgerBuilder {
	addPatty(type: string): this;
	addCheese(type: string): this;
	addSauce(type: string): this;
	addToppings(toppings: string[]): this;
	build(): Burger;
}

class BurgerBuilder implements IBurgerBuilder {
	private burger: IBurger = {};

	addPatty(type: string): this {
		this.burger.patty = type;
		return this;
	}

	addCheese(type: string): this {
		this.burger.cheese = type;
		return this;
	}

	addSauce(type: string): this {
		this.burger.sauce = type;
		return this;
	}

	addToppings(toppings: string[]): this {
		this.burger.toppings = toppings;
		return this;
	}

	build(): Burger {
		return new Burger(this.burger);
	}
}

class Burger implements IBurger {
	patty?: string;
	cheese?: string;
	sauce?: string;
	toppings?: string[];

	constructor(burger: IBurger) {
		this.patty = burger.patty;
		this.cheese = burger.cheese;
		this.sauce = burger.sauce;
		this.toppings = burger.toppings;
	}

	describe(): string {
		let description = `Burger with ${this.patty} patty, `;
		if (this.cheese) {
			description += `${this.cheese} cheese, `;
		}
		if (this.sauce) {
			description += `${this.sauce} sauce, `;
		}
		if (this.toppings) {
			description += `${this.toppings.join(', ')} toppings`;
		}
		return description;
	}
}

let burger = new BurgerBuilder()
	.addPatty('beef')
	.addCheese('cheddar')
	.addSauce('ketchup')
	.addToppings(['lettuce', 'tomato'])
	.build();

console.log(burger.describe());

/* ******************************************************************************************************************************** */

interface IPerson {
	name: string;
	age: number;
	introduce(): void;
	celebrateBirthday(): void;
}

class Person implements IPerson {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	introduce(): void {
		console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
	}

	celebrateBirthday(): void {
		this.age++;
		console.log(
			`Happy birthday, ${this.name}! You are now ${this.age} years old.`
		);
	}
}

interface IBankAccount {
	owner: string;
	balance: number;
	deposit(amount: number): void;
	withdraw(amount: number): void;
}

class BankAccount implements IBankAccount {
	owner: string;
	balance: number;

	constructor(owner: string, balance: number) {
		this.owner = owner;
		this.balance = balance;
	}

	deposit(amount: number): void {
		this.balance += amount;
		console.log(`${amount} deposited. Current balance is ${this.balance}.`);
	}

	withdraw(amount: number): void {
		if (amount > this.balance) {
			console.log(`Insufficient funds. Current balance is ${this.balance}.`);
		} else {
			this.balance -= amount;
			console.log(`${amount} withdrawn. Current balance is ${this.balance}.`);
		}
	}
}

/* ******************************************************************************************************************************** */

interface IRectangle {
	width: number;
	height: number;
	area: number;
	perimeter: number;
}

class Rectangle implements IRectangle {
	width: number;
	height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	get area(): number {
		return this.width * this.height;
	}

	get perimeter(): number {
		return 2 * (this.width + this.height);
	}
}

/* ******************************************************************************************************************************** */

interface ITodoList {
	tasks: string[];
	addTask(task: string): void;
	removeTask(task: string): void;
}

class TodoList implements ITodoList {
	tasks: string[] = [];

	addTask(task: string): void {
		this.tasks.push(task);
		console.log(`Task "${task}" added. Total tasks: ${this.tasks.length}.`);
	}

	removeTask(task: string): void {
		const index = this.tasks.indexOf(task);
		if (index === -1) {
			console.log(`Task "${task}" not found.`);
		} else {
			this.tasks.splice(index, 1);
			console.log(`Task "${task}" removed. Total tasks: ${this.tasks.length}.`);
		}
	}
}

/* ******************************************************************************************************************************** */

interface IBook {
	id: number;
	title: string;
	author: string;
	publishedYear: number;
}

class Book implements IBook {
	id: number;
	title: string;
	author: string;
	publishedYear: number;

	constructor(
		id: number,
		title: string,
		author: string,
		publishedYear: number
	) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.publishedYear = publishedYear;
	}
}

interface IBookCollection {
	books: Book[];
	fetchData(): Promise<void>;
	logBooks(): void;
	findBookById(id: number): Book | undefined;
	addBook(book: Book): void;
	removeBookById(id: number): void;
}

class BookCollection implements IBookCollection {
	books: Book[] = [];

	async fetchData(): Promise<void> {
		const response = await fetch('https://my-book-api.com/books');
		const data: IBook[] = await response.json();
		this.books = data.map(
			(book) => new Book(book.id, book.title, book.author, book.publishedYear)
		);
	}

	logBooks(): void {
		console.log(this.books);
	}

	findBookById(id: number): Book | undefined {
		return this.books.find((book) => book.id === id);
	}

	addBook(book: Book): void {
		this.books.push(book);
	}

	removeBookById(id: number): void {
		this.books = this.books.filter((book) => book.id !== id);
	}
}

/* ******************************************************************************************************************************** */

enum AnimalType {
	Dog,
	Cat,
	Bird,
	Fish,
}

function makeAnimalSound(type: AnimalType) {
	switch (type) {
		case AnimalType.Dog:
			console.log('Woof!');
			break;
		case AnimalType.Cat:
			console.log('Meow!');
			break;
		case AnimalType.Bird:
			console.log('Chirp!');
			break;
		case AnimalType.Fish:
			console.log('Blub!');
			break;
		default:
			console.log('Unknown animal type');
			break;
	}
}

/* ******************************************************************************************************************************** */

type Pet = {
	name: string;
	age: number;
	type: AnimalType;
};

function getPetDescription(pet: Pet) {
	const animal = AnimalType[pet.type];
	return `${pet.name} is a ${animal.toLowerCase()} that is ${
		pet.age
	} years old.`;
}

const myPet: Pet = {
	name: 'Fluffy',
	age: 5,
	type: AnimalType.Cat,
};

console.log(getPetDescription(myPet));

/* ******************************************************************************************************************************** */

interface PetOwner {
	name: string;
	age: number;
	pets: Pet[];
}

function getPetOwnerDescription(owner: PetOwner): string {
	const pets = owner.pets.map((pet) => {
		const animal = AnimalType[pet.type];
		return `${pet.name} the ${animal.toLowerCase()}`;
	});
	return `${owner.name} is ${owner.age} years old and has ${
		pets.length
	} pets: ${pets.join(', ')}.`;
}

const myPetOwner: PetOwner = {
	name: 'John Doe',
	age: 30,
	pets: [
		{ name: 'Fluffy', age: 5, type: AnimalType.Cat },
		{ name: 'Spot', age: 3, type: AnimalType.Dog },
	],
};

console.log(getPetOwnerDescription(myPetOwner));

/* ******************************************************************************************************************************** */

function mapPetNames<T extends { name: string }>(pets: T[]): string[] {
	return pets.map((pet) => pet.name);
}

const myPets = [
	{ name: 'Max', age: 3, type: AnimalType.Dog },
	{ name: 'Fluffy', age: 1, type: AnimalType.Cat },
	{ name: 'Tweety', age: 2, type: AnimalType.Bird },
];

const petNames = mapPetNames(myPets);
console.log(petNames);

/* ******************************************************************************************************************************** */

function print<T>(arg: T): void {
	console.log(arg);
}

print('hello');
print(42);
print(true);

/* ******************************************************************************************************************************** */

function firstElement<T>(arr: T[]): T | undefined {
	return arr[0];
}

const numbers = [1, 2, 3, 4, 5];
const firstNumber = firstElement(numbers);

const strings = ['apple', 'banana', 'orange'];
const firstString = firstElement(strings);

/* ******************************************************************************************************************************** */

interface Pair<F, S> {
	first: F;
	second: S;
}

let pair1: Pair<string, number> = { first: 'one', second: 1 };
let pair2: Pair<() => void, any[]> = { first: () => {}, second: [] };
let pair3: Pair<boolean, { x: number }> = { first: true, second: { x: 1 } };

/* ******************************************************************************************************************************** */

function log(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
): PropertyDescriptor {
	const originalMethod = descriptor.value;

	descriptor.value = function (...args: any[]) {
		console.log(`Calling ${String(propertyKey)} with arguments:`, args);
		const result = originalMethod.apply(this, args);
		console.log(`Result:`, result);
		return result;
	};

	return descriptor;
}

class MyClass {
	@log
	myMethod(arg1: number, arg2: number) {
		return arg1 + arg2;
	}
}

const myObj = new MyClass();
myObj.myMethod(2, 3);

/* ******************************************************************************************************************************** */

type VideoConstructor<T = {}> = new (...args: any[]) => T & {
	title: string;
	url: string;
};

class RegularVideo {
	constructor(public title: string, public url: string) {}
}

class PremiumVideo {
	constructor(public title: string, public url: string) {}
}

class LiveVideo {
	constructor(public title: string, public url: string) {}
}

function Playable<TBase extends VideoConstructor>(Base: TBase) {
	return class extends Base {
		duration: number = 0;
		currentTime: number = 0;
		isPlaying: boolean = false;

		play() {
			this.isPlaying = true;
			console.log(`Playing video: ${this.title}`);
		}

		pause() {
			if (this.isPlaying) {
				this.isPlaying = false;
				console.log(`Paused video: ${this.title}`);
			}
		}

		stop() {
			this.isPlaying = false;
			this.currentTime = 0;
			console.log(`Stopped video: ${this.title}`);
		}

		getDuration() {
			return this.duration;
		}

		getCurrentTime() {
			return this.currentTime;
		}
	};
}

const PlayableRegularVideo = Playable(RegularVideo);
const PlayablePremiumVideo = Playable(PremiumVideo);
const PlayableLiveVideo = Playable(LiveVideo);

const regularVideo = new PlayableRegularVideo(
	'Regular Video',
	'http://regular.url'
);
regularVideo.duration = 120;
regularVideo.play();
console.log('Duration:', regularVideo.getDuration());
console.log('Current Time:', regularVideo.getCurrentTime());
regularVideo.pause();
regularVideo.stop();

const premiumVideo = new PlayablePremiumVideo(
	'Premium Video',
	'http://premium.url'
);
premiumVideo.duration = 240;
premiumVideo.play();

const liveVideo = new PlayableLiveVideo('Live Video', 'http://live.url');
liveVideo.duration = 360;
liveVideo.play();

/* ******************************************************************************************************************************** */

type MyType = {
	name: string;
	age: number;
	isStudent: boolean;
	hobbies: string[];
	address: {
		street: string;
		city: string;
		country: string;
	};
	email?: string;
	job?: {
		title: string;
		company: string;
		salary: number;
	};
	phoneNumbers: Map<string, string>;
	birthday: Date;
};

type MyTypePartial = Partial<MyType>;

type MyTypeRequired = Required<MyType>;

type MyTypeReadonly = Readonly<MyType>;

type MyTypePicked = Pick<MyType, 'name' | 'age' | 'isStudent' | 'hobbies'>;

type MyTypeOmitted = Omit<MyType, 'job' | 'phoneNumbers' | 'birthday'>;

type MyTypeKeys = keyof MyType;
