class Game {
    static {
        Game.init();
    }

    static async init() {
        const app = new PIXI.Application();
        await app.init({ background: '#1099bb', resizeTo: window });
        document.body.appendChild(app.canvas);
    }
}
