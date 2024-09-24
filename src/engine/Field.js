class Field extends PIXI.Container {
    constructor() {
        super();

        console.log('Field created');

        this.initChildren();
        this.initListeners();
    }

    initListeners() {
        this.footer.spinButton.on('spin', () => {
            console.log('spin');
            this.rollsContainer.updateRolls();
            this.header.balance.text = 'BALANCE: ' + CONFIG.apiResponse.balance;
        });
    }

    initChildren() {
        this.rollsContainer = new RollsContainer();
        this.rollsContainer.y = CONFIG.headerHeight;
        this.addChild(this.rollsContainer);

        this.initBlindZones();

        this.header = this.addChild(new Header());
        this.header.x = this.rollsContainer.widthByConfig() / 2;

        this.footer = this.addChild(new Footer());
        this.footer.y = CONFIG.headerHeight + this.rollsContainer.heightByConfig();
        this.footer.x = this.rollsContainer.widthByConfig() / 2;
    }

    initBlindZones() {
        this.initBlindZoneAboveRolls();
        this.initBlindZoneUnderRolls();
    }

    initBlindZoneUnderRolls() {
        this.blindZoneUnderRolls = this.addChild(new PIXI.Graphics()
            .rect(0, 0, CONFIG.blindZoneUnderRolls.width, CONFIG.blindZoneUnderRolls.height)
            .fill({color: CONFIG.backgroundColor, alpha: 1})
        );
        this.blindZoneUnderRolls.y = CONFIG.blindZoneUnderRolls.y;
    }

    initBlindZoneAboveRolls() {
        this.addChild(new PIXI.Graphics()
            .rect(0, -60, 640, 140)
            .fill(CONFIG.backgroundColor)
        );
    }

    heightByConfig() {
        return this.rollsContainer.heightByConfig() + CONFIG.footerHeight + CONFIG.headerHeight;
    }

    widthByConfig() {
        return this.rollsContainer.widthByConfig();
    }
}
