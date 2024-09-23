class Field extends PIXI.Container {
    constructor() {
        super();

        console.log('Field created');

        this.initChildren();
    }

    initChildren() {
        this.rollsContainer = new RollsContainer();

        this.header = this.addChild(new Header());
        this.header.x = this.rollsContainer.widthByConfig() / 2;

        this.rollsContainer.y = CONFIG.headerHeight;
        this.addChild(this.rollsContainer);

        this.footer = this.addChild(new Footer());
        this.footer.y = CONFIG.headerHeight + this.rollsContainer.heightByConfig();
        this.footer.x = this.rollsContainer.widthByConfig() / 2;
    }

    heightByConfig() {
        return this.rollsContainer.heightByConfig() + CONFIG.footerHeight + CONFIG.headerHeight;
    }

    widthByConfig() {
        return this.rollsContainer.widthByConfig();
    }
}
