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
        const symbols = [];
        const symbolsContainer = new PIXI.Container();
        for (let i = 0; i < CONFIG.ROWS_QUANTITY; i++) {
            // todo use API
            const symbol = new Symbol(CONFIG.API_RESPONSE.rolls[this.rollNumber][i]);
            symbol.y = i * CONFIG.SYMBOL_SIZE;

            symbols.push(symbol);
            symbolsContainer.addChild(symbol);
        }
    }

}
