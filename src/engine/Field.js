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
        const rolls = [];
        const rollsContainer = new PIXI.Container();
        for (let i = 0; i < CONFIG.ROLLS_QUANTITY; i++) {
            const roll = new Roll(i);
            roll.x = i * CONFIG.ROLL_WIDTH;

            rolls.push(roll);
            rollsContainer.addChild(roll);
        }
    }
}
