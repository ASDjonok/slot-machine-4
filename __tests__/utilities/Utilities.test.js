const Utilities = require('../../src/utilities/Utilities');

global.CONFIG = {
    symbolsQuantity: 1,
};

describe('Utilities', () => {
    test('getRandomSymbolNumber returns a value between 0 and CONFIG.symbolsQuantity - 1', () => {
        const randomNumber = Utilities.getRandomSymbolNumber();
        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThan(CONFIG.symbolsQuantity);
        console.log('CONFIG.symbolsQuantity:', CONFIG.symbolsQuantity);
    });

    test('getRandomSymbolNumber returns an integer', () => {
        const randomNumber = Utilities.getRandomSymbolNumber();
        expect(Number.isInteger(randomNumber)).toBe(true);
    });
});
