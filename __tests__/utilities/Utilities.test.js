import Utilities from "../../src/utilities/Utilities.js";
import {Text} from "../../libs/dev/pixi.mjs";

global.CONFIG = {
    symbolsQuantity: 10,
};

global.Game = {
    app: {
        stage: {
            addChild: jest.fn()
        },
        screen: {
            width: 800,
            height: 600
        }
    },
    tweenGroup: {
        add: jest.fn()
    }
};

global.YELLOW_COLOR = 0xFFFF00;

describe('Utilities', () => {
    test('getRandomSymbolNumber returns a value between 0 and CONFIG.symbolsQuantity - 1', () => {
        const randomNumber = Utilities.getRandomSymbolNumber();
        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThan(CONFIG.symbolsQuantity);
    });

    test('getRandomSymbolNumber returns an integer', () => {
        const randomNumber = Utilities.getRandomSymbolNumber();
        expect(Number.isInteger(randomNumber)).toBe(true);
    });

    test('showAnimatedText creates and animates a text object', () => {
        const textContent = "Test Text";

        // Мокаємо створення текстового об'єкта
        const mockTextObject = { anchor: { set: jest.fn() }, scale: 0 };
        Game.app.stage.addChild.mockReturnValue(mockTextObject);

        // Викликаємо функцію showAnimatedText
        const result = Utilities.showAnimatedText(textContent);

        // Перевіряємо, що текстовий об'єкт був доданий на сцену
        expect(Game.app.stage.addChild).toHaveBeenCalledTimes(1);
        expect(Game.app.stage.addChild).toHaveBeenCalledWith(expect.any(Text));

        // Перевіряємо, що властивості текстового об'єкта були правильно встановлені
        // expect(result.text).toBe(textContent);
        expect(result.anchor.set).toHaveBeenCalledWith(0.5);
        expect(result.x).toBe(Game.app.screen.width / 2);
        expect(result.y).toBe(Game.app.screen.height / 2);

        // Перевіряємо, що анімації були додані в tweenGroup
        expect(Game.tweenGroup.add).toHaveBeenCalledTimes(1);  // перший tween
    });

    test('showAnimatedText hides the text object if shouldBeHidden is true', () => {
        const textContent = "Test Text";

        // Мокаємо створення текстового об'єкта
        const mockTextObject = { anchor: { set: jest.fn() }, scale: 0, alpha: 1, parent: { removeChild: jest.fn() } };
        Game.app.stage.addChild.mockReturnValue(mockTextObject);

        // Викликаємо функцію showAnimatedText з shouldBeHidden = true
        Utilities.showAnimatedText(textContent, true);

        // Перевіряємо, що анімації були додані в tweenGroup
        expect(Game.tweenGroup.add).toHaveBeenCalledTimes(2);  // анімація масштабування
    });
});
