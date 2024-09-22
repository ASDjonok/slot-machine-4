class SpinButton extends PIXI.Container {
    constructor() {
        super();

        console.log('SpinButton created');

        this.initChildren();
    }

    initChildren() {
        this.initButton();
        this.initText();
    }

    initText() {
        this.text = new PIXI.Text('SPIN', { fontFamily: 'Arial', fontSize: 24, fill: 0xffffff, align: 'center' });
        this.text.x = 200 + 50;
        this.text.y = 200 + 25;
        this.text.anchor.set(0.5);

        this.addChild(this.text);
    }

    initButton() {
        this.button = new PIXI.Graphics();
        this.button.beginFill(0x1099bb);
        this.button.drawRoundedRect(0, 0, 100, 50, 10);
        this.button.endFill();
        this.button.interactive = true;
        this.button.buttonMode = true;
        this.button.on('pointerdown', this.onButtonDown.bind(this));
        this.button.on('pointerup', this.onButtonUp.bind(this));
        this.button.on('pointerupoutside', this.onButtonUp.bind(this));
        this.button.x = 200;
        this.button.y = 200;

        this.addChild(this.button);
    }

    onButtonDown() {
        this.button.alpha = 0.5;
    }

    onButtonUp() {
        this.button.alpha = 1;
    }

}
