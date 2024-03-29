export abstract class Car {
  abstract getNumberOfSeats(): number;
}

export class Tesla extends Car {
  constructor(private numberOfSeats: number) {
    super();
    this.numberOfSeats = numberOfSeats;
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Audi extends Car {
  constructor(private numberOfSeats: number) {
    super();
    this.numberOfSeats = numberOfSeats;
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Toyota extends Car {
  constructor(private numberOfSeats: number) {
    super();
    this.numberOfSeats = numberOfSeats;
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Honda extends Car {
  constructor(private numberOfSeats: number) {
    super();
    this.numberOfSeats = numberOfSeats;
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}
