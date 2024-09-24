class Field extends PIXI.Container {
    constructor() {
        super();

        console.log('Field created');

        this.initChildren();
        this.initListeners();
    }

    initListeners() {
        this.footer.spinButton.on('spin', () => {
            this.rollsContainer.updateRolls();
        });

        this.rollsContainer.rolls[this.rollsContainer.rolls.length - 1].on('roll-end', () => {
            this.footer.spinButton.blocked = false;
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
            .fill(CONFIG.backgroundColor)
        );
        this.blindZoneUnderRolls.y = CONFIG.blindZoneUnderRolls.y;
    }

    initBlindZoneAboveRolls() {
        this.blindZoneAboveRolls = this.addChild(new PIXI.Graphics()
            .rect(0, 0, CONFIG.blindZoneAboveRolls.width, CONFIG.blindZoneAboveRolls.height)
            .fill(CONFIG.backgroundColor)
        );
        this.blindZoneAboveRolls.y = CONFIG.blindZoneAboveRolls.y;
    }

    heightByConfig() {
        return this.rollsContainer.heightByConfig() + CONFIG.footerHeight + CONFIG.headerHeight;
    }

    widthByConfig() {
        return this.rollsContainer.widthByConfig();
    }
}
