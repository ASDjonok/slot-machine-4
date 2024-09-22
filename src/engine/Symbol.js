class Symbol extends PIXI.Sprite {
    constructor(symbolNumber) {
        super(Game.symbolsTextures[symbolNumber - 1]);
    }

}
