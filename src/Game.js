/**
 * inspired by https://pixijs.com/8.x/examples/advanced/slots
 */
class Game {
    static {
        Game.init().then(() => console.log('Game initialized'));
    }

    static async init() {
        const app = new PIXI.Application();
        await app.init({ background: '#1099bb', resizeTo: window });
        document.body.appendChild(app.canvas);

        await Game.loadAssets();

        Game.symbolsTextures = [
            PIXI.Texture.from('assets/rt_object_01.png'),
            PIXI.Texture.from('assets/rt_object_02.png'),
            PIXI.Texture.from('assets/rt_object_03.png'),
            PIXI.Texture.from('assets/rt_object_04.png'),
            PIXI.Texture.from('assets/rt_object_05.png'),
            PIXI.Texture.from('assets/rt_object_06.png'),
            PIXI.Texture.from('assets/rt_object_07.png'),
            PIXI.Texture.from('assets/rt_object_08.png'),
        ];

        app.stage.addChild(new Field());
    }

    /**
     * assets downloaded from https://pixijs.com/assets/
     */
    static async loadAssets() {
        await PIXI.Assets.load([
            'assets/rt_object_01.png',
            'assets/rt_object_02.png',
            'assets/rt_object_03.png',
            'assets/rt_object_04.png',
            'assets/rt_object_05.png',
            'assets/rt_object_06.png',
            'assets/rt_object_07.png',
            'assets/rt_object_08.png',
        ]);
    }

}

window.Game = Game;
