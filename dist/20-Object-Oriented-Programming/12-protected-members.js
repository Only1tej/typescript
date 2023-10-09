"use strict";
class Robot {
    constructor(name, model, durability, weight) {
        this.name = name;
        this.model = model;
        this.durability = durability;
        this.weight = weight;
    }
    get robotData() {
        return `${this.name} robot model number ${this.model} has a durability of ${this.durability} and weighs in at ${this.weight}`;
    }
}
class Avdon extends Robot {
    constructor(id, name, model, durability, weight) {
        super(name, model, durability, weight);
        this.id = id;
    }
    getModel(model) {
        return (this.model = model);
    }
}
let avdonRobot = new Avdon(11254, "Avdon5000", "AN741", "Medium", 25);
console.log(avdonRobot.getModel("AN4432"));
