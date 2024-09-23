class Field extends PIXI.Container {
    constructor() {
        super();

        console.log('Field created');

        this.initChildren();
    }

    initChildren() {
        this.rollsContainer = this.addChild(new RollsContainer());

        this.footer = this.addChild(new Footer());
        this.footer.y = this.rollsContainer.heightByConfig() + CONFIG.footerHeight / 2 - CONFIG.spinButton.height / 2;
        this.footer.x = this.rollsContainer.widthByConfig() / 2;

        this.initBetController();
    }

    initBetController() {
        this.betController = new BetController();
        this.betController.x = 200;
        this.betController.y = 300;

        this.addChild(this.betController);
    }

    heightByConfig() {
        return this.rollsContainer.heightByConfig() + CONFIG.footerHeight;
    }

    widthByConfig() {
        return this.rollsContainer.widthByConfig();
    }
}
