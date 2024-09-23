class RollsContainer extends PIXI.Container {
    constructor() {
        super();

        console.log('RollsContainer created');

        this.initChildren();
    }

    initChildren() {
        this.initRolls();
    }

    initRolls() {
        this.rolls = [];
        for (let i = 0; i < CONFIG.rollsQuantity; i++) {
            const roll = new Roll(i);
            roll.x = i * (CONFIG.rollWidth + CONFIG.rollHorizontalMargin);

            this.rolls.push(roll);
            this.addChild(roll);
        }
    }

    heightByConfig() {
        return this.rolls[0].heightByConfig();
    }

    widthByConfig() {
        return this.rolls.length * CONFIG.rollWidth + (this.rolls.length - 1) * CONFIG.rollHorizontalMargin
    }
}
