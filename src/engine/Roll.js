class Roll extends PIXI.Container {
    constructor(rollNumber) {
        super();

        this.rollNumber = rollNumber;

        this.initChildren();
    }

    initChildren() {
        this.initSymbols();
    }

    initSymbols() {
        this.symbols = [];
        for (let i = 0; i < CONFIG.rowsQuantity; i++) {
            // todo use API
            const symbol = new Symbol(CONFIG.apiResponse.rolls[this.rollNumber][i]);
            symbol.y = i * CONFIG.symbolSize + (i + 1) * CONFIG.symbolVerticalMargin;

            this.symbols.push(symbol);
            this.addChild(symbol);
        }
    }

    heightByConfig() {
        return this.symbols.length * CONFIG.symbolSize + (this.symbols.length + 1) * CONFIG.symbolVerticalMargin;
    }

}
