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
        if (!Symbol.symbolsTextures) {
            this.initSymbolsTextures();
        }

        this.symbols = [];
        for (let i = 0; i < CONFIG.rowsQuantity; i++) {
            const symbol = new Symbol(CONFIG.apiResponse.rolls[this.rollNumber][i]);
            symbol.y = i * (CONFIG.symbolSize + CONFIG.symbolVerticalMargin);

            symbol.scale.x = symbol.scale.y = Math.min(CONFIG.symbolSize / symbol.width,
                CONFIG.symbolSize / symbol.height);

            this.symbols.push(symbol);
            this.addChild(symbol);
        }
    }

    static heightByConfig() {
        return CONFIG.rowsQuantity * CONFIG.symbolSize + (CONFIG.rowsQuantity + 1) * CONFIG.symbolVerticalMargin;
    }

    initSymbolsTextures() {
        Symbol.symbolsTextures = [
            PIXI.Texture.from('assets/light_rotate_1.png'),
            PIXI.Texture.from('assets/light_rotate_2.png'),
            PIXI.Texture.from('assets/rt_object_01.png'),
            PIXI.Texture.from('assets/rt_object_02.png'),
            PIXI.Texture.from('assets/rt_object_03.png'),
            PIXI.Texture.from('assets/rt_object_04.png'),
            PIXI.Texture.from('assets/rt_object_05.png'),
            PIXI.Texture.from('assets/rt_object_06.png'),
            PIXI.Texture.from('assets/rt_object_07.png'),
            PIXI.Texture.from('assets/rt_object_08.png'),
        ];
    }

    updateSymbols() {
        /*this.symbols.forEach((symbol, i) => {
            symbol.texture = Symbol.symbolsTextures[CONFIG.apiResponse.rolls[this.rollNumber][i]];
        });*/
    }

}
