class Vehicle {
    
    _speed = 0;
  
    constructor(brand, model, year) {
      this.brand = brand;    
      this.model = model;    
      this.year = year;      
    }
  
    
    accelerate(amount) {
      this._speed += amount;
      console.log(`Скорость увеличена на ${amount}. Текущая скорость: ${this._speed}`);
    }
  
    
    brake(amount) {
      this._speed = Math.max(0, this._speed - amount);
      console.log(`Скорость снижена на ${amount}. Текущая скорость: ${this._speed}`);
    }
  

    info() {
      console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}`);
    }
  }
  
  
  class Car extends Vehicle {
    constructor(brand, model, year, fuelType) {
      super(brand, model, year); // Вызов конструктора родителя
      this.fuelType = fuelType; 
    }
  
    refuel() {
      console.log(`Заправляем бензином типа ${this.fuelType}`);
    }
  }
  
  
  class ElectricCar extends Car {
    
    #batteryLevel;
  
    constructor(brand, model, year) {
      super(brand, model, year, 'Electric'); 
      this.#batteryLevel = 0; 
    }
  
    getBatteryLevel() {
      return this.#batteryLevel;
    }
  
    setBatteryLevel(level) {
      if (level >= 0 && level <= 100) {
        this.#batteryLevel = level;
      } else {
        console.log('Недопустимый уровень заряда');
      }
    }
  
    charge() {
      this.setBatteryLevel(this.#batteryLevel + 10);
      console.log(`Заряд увеличен. Текущий уровень: ${this.#batteryLevel}%`);
    }
  
    refuel() {
      console.log('Заряжаем электромобиль на станции');
    }
  }
  
  // Тестирование системы
  const ordinaryCar = new Car('Toyota', 'Camry', 2020, 'АИ-95');
  ordinaryCar.accelerate(30);      // Увеличиваем скорость
  ordinaryCar.brake(10);          // Уменьшаем скорость
  ordinaryCar.info();             // Информация об авто
  ordinaryCar.refuel();           // Заправка обычного авто
  
  const tesla = new ElectricCar('Tesla', 'Model S', 2023);
  tesla.accelerate(50);           // Увеличиваем скорость
  tesla.info();                   // Информация об электромобиле
  tesla.refuel();                 // Пытаемся заправить (вызовется переопределенный метод)
  tesla.charge();                 // Заряжаем батарею
  tesla.setBatteryLevel(85);      // Устанавливаем уровень заряда
  console.log(tesla.getBatteryLevel()); // Получаем текущий уровень заряда