class Header extends PIXI.Container {
    constructor() {
        super();

        console.log('Header created');

        this.initChildren();
    }

    initChildren() {
        this.betController = this.addChild(new BetController());
        this.betController.x = - this.betController.width;
        this.betController.y = CONFIG.headerHeight / 2 - this.betController.height / 2;
    }
}
