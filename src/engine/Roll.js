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
        for (let i = 0; i < CONFIG.ROWS_QUANTITY /*+ 1*/; i++) {
            // todo use API
            const symbol = new Symbol(CONFIG.API_RESPONSE.rolls[this.rollNumber][i]);
            symbol.y = i * CONFIG.SYMBOL_SIZE;

            this.symbols.push(symbol);
            this.addChild(symbol);
        }
    }

}
