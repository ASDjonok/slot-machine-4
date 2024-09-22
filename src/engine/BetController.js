class BetController extends PIXI.Container {
    constructor() {
        super();

        this.initChildren();
    }

    initChildren() {
        this.initText();
        this.initButtons();
    }

    initText() {
        this.text = new PIXI.Text('BET', { fontFamily: 'Arial', fontSize: 24, fill: 0xffffff, align: 'center' });
        this.text.x = 0;
        this.text.y = 0;
        this.text.anchor.set(0.5);

        this.addChild(this.text);
    }

    initButtons() {
        this.buttons = [];
        for (let i = 0; i < CONFIG.API_RESPONSE.bets.length; i++) {
            const button = new PIXI.Graphics();
            button.beginFill(0x1099bb);
            button.drawRoundedRect(0, 0, 50, 50, 10);
            button.endFill();
            button.interactive = true;
            button.buttonMode = true;
            button.on('pointerdown', this.onButtonDown.bind(this));
            button.on('pointerup', this.onButtonUp.bind(this));
            button.on('pointerupoutside', this.onButtonUp.bind(this));
            button.x = i * 60;
            button.y = 50;

            //add text to button
            const text = new PIXI.Text(CONFIG.API_RESPONSE.bets[i], { fontFamily: 'Arial', fontSize: 12, fill: 0xffffff, align: 'center' });
            text.x = 25;
            text.y = 25;
            text.anchor.set(0.5);
            button.addChild(text);

            this.addChild(button);
            this.buttons.push(button);
        }
    }

    onButtonDown() {
        this.alpha = 0.5;
    }

    onButtonUp() {
        this.alpha = 1;
    }

}
