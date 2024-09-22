class Field extends PIXI.Container {
    constructor() {
        super();

        console.log('Field created');

        this.initChildren();
    }

    initChildren() {
        this.initRolls();
        this.initSpinButton();
        this.initBetController();
    }

    initBetController() {
        this.betController = new BetController();
        this.betController.x = 200;
        this.betController.y = 300;

        this.addChild(this.betController);
    }

    initSpinButton() {
        this.spinButton = new SpinButton();
        this.spinButton.x = 200;
        this.spinButton.y = 200;

        this.addChild(this.spinButton);
    }

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
