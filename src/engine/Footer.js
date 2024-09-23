class Footer extends PIXI.Container {
    constructor() {
        super();

        console.log('Footer created');

        this.initChildren();
    }

    initChildren() {
        this.spinButton = this.addChild(new SpinButton());
    }

}
