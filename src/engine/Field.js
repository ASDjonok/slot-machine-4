class Field extends PIXI.Container {
    constructor() {
        super();

        console.log('Field created');

        this.initChildren();
    }

    initChildren() {
        this.initRolls();
    }

    // todo think is this separate method needed
    initRolls() {
        this.rolls = [];
        for (let i = 0; i < CONFIG.ROLLS_QUANTITY; i++) {
            const roll = new Roll(i);
            roll.x = i * CONFIG.ROLL_WIDTH;

            this.rolls.push(roll);
            this.addChild(roll);
        }
    }
}
