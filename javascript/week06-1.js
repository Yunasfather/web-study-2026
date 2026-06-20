class Account {
  #balance = 0; // #으로 선언하면 private 필드
  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const acc = new Account(); //객체생성 -> 역할을 수행할 실체
acc.deposit(10000);
console.log(acc.getBalance());

class Car {
  drive() {
    console.log("자동차가 달립니다.");
  }
}

const myCar = new Car();
myCar.drive();


class Animal {
    speak() {
        console.log("동물이 소리를 냅니다.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("멍멍!");
    }
}

class Cat extends Animal {
    speak() {
        console.log("야옹~");
    }
}

const animals = [new Dog(), new Cat(), new Animal()]; 

animals.forEach(animal => animal.speak());