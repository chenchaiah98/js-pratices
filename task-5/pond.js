let increasenIntervId;
let decreaseIntervId;
let day;
class maintaineWaterTemperature {
    constructor(name, temperature = 30, MaxTemperature = 40, minimumTemperature = 30, day) {
        this.name = name;
        this.temperature = temperature;
        this.MaxTemperature = MaxTemperature;
        this.minimumTemperature = minimumTemperature;
        this.day = day;
    }
    checkTemperature() {

        if (this.temperature <= this.MaxTemperature) {
            return this.increase();
        }
        else if (this.temperature >= this.minimumTemperature ) {
            return this.decrease();
        }
    }
    increase() {
        this.day ? this.temperature = this.temperature + 1.02 : this.temperature = this.temperature + (1.02 / 2);
        return `Name of pond is: ${this.name} and the temperature is : ${this.temperature.toFixed(2)}`;
    }
    decrease() {
        this.day ? this.temperature = this.temperature - 1.01 : this.temperature = this.temperature - (1.01 / 2);
           return `Name of pond is: ${this.name} and the temperature is : ${this.temperature.toFixed(2)}`;
    }
}
class pond extends maintaineWaterTemperature {
    constructor(name, temperature,day) {
        super(name, temperature);
        console.log(this.day);
    }
}


const pond1 = new pond("myPond1", 31, day = false);
setInterval(() => {
    console.log(pond1.checkTemperature());
}, 1000);

