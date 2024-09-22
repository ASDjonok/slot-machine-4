class Field extends PIXI.Container {
    constructor() {
        super();

        console.log('Field created');

        this.initChildren();
    }

    initChildren() {
        this.slotTextures = [
            PIXI.Texture.from('assets/rt_object_01.png'),
            PIXI.Texture.from('assets/rt_object_02.png'),
            PIXI.Texture.from('assets/rt_object_03.png'),
            PIXI.Texture.from('assets/rt_object_04.png'),
            PIXI.Texture.from('assets/rt_object_05.png'),
            PIXI.Texture.from('assets/rt_object_06.png'),
            PIXI.Texture.from('assets/rt_object_07.png'),
            PIXI.Texture.from('assets/rt_object_08.png'),
        ];

        this.initRolls();
    }

    initRolls() {
        const rolls = [];
        const rollsContainer = new PIXI.Container();
        for (let i = 0; i < CONFIG.ROLLS_QUANTITY; i++) {
            const roll = new PIXI.Container();
            roll.x = i * CONFIG.ROLL_WIDTH;

            rolls.push(roll);
            rollsContainer.addChild(roll);

            roll.symbols = [];
        }
    }
}
