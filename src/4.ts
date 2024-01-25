// class key
class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature(): number {
      return this.signature;
    }
  }
  
  
  // class person
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  
  // class house
  abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];
  
    constructor(key: Key) {
      this.key = key;
    }
  
    abstract openDoor(key: Key): void;
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log('Person entered the house.');
      } else {
        console.log('The door is closed. Person cannot enter the house.');
      }
    }
  }
  

  class MyHouse extends House {
    openDoor(key: Key): void {
      if (this.key.getSignature() === key.getSignature()) {
        this.door = true;
        console.log('Door opened.');
      } else {
        console.log('Access denied. Wrong key.');
      }
    }
  }
  

  const key: Key = new Key();
  const person: Person = new Person(key);
  const house: MyHouse = new MyHouse(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person);
  
  console.log(house);
  
  export {};
  