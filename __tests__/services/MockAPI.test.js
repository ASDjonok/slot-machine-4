import MockAPI from "../../src/services/MockAPI.js"; // Adjust the import path
import Utilities from "../../src/utilities/Utilities.js";

jest.mock("../../src/utilities/Utilities.js");

describe('MockAPI', () => {
    let mockApi;

    beforeEach(() => {
        mockApi = new MockAPI();
        // Mocking getRandomSymbolNumber to return a consistent value
        Utilities.getRandomSymbolNumber.mockReturnValue(0); // You can change this to other numbers for testing
    });

    test('init initializes a new user with default values', async () => {
        const uid = '100';
        const user = await mockApi.init(uid);

        expect(user).toEqual({
            uid: '100',
            balance: 1000,
            last_bet: 0,
            bets: [10, 20, 50, 100],
            rolls: expect.any(Array) // rolls should be an array
        });
        expect(mockApi.data[uid]).toEqual(user);
    });

    test('init retrieves existing user data', async () => {
        const uid = '100';
        await mockApi.init(uid); // Initialize user first
        const user = await mockApi.init(uid); // Initialize again to retrieve existing data

        expect(user).toEqual({
            uid: '100',
            balance: 1000,
            last_bet: 0,
            bets: [10, 20, 50, 100],
            rolls: expect.any(Array)
        });
        expect(mockApi.data[uid]).toEqual(user);
    });

    test('spin updates user balance and last_bet', async () => {
        const uid = '100';
        await mockApi.init(uid); // Initialize user first
        const bet = 100;

        // Mocking Math.random to ensure a loss
        jest.spyOn(Math, 'random').mockReturnValue(0.1); // Force a loss
        const result = await mockApi.spin(uid, bet);

        expect(result.last_bet).toBe(bet);
        expect(result.balance).toBe(900); // Check if the balance is deducted correctly (1000 - 100)
        expect(result.rolls).toHaveLength(3); // Check that rolls were generated
    });

    test('spin handles win scenario correctly', async () => {
        const uid = '100';
        await mockApi.init(uid); // Initialize user first
        const bet = 100;

        // Mocking Math.random to ensure a win
        jest.spyOn(Math, 'random').mockReturnValue(0.99); // Force a win
        const result = await mockApi.spin(uid, bet);

        expect(result.win).toBe(200); // Check if the win amount is correct
        expect(result.balance).toBe(1100); // Check if the balance reflects the win (900 + 200)
    });

    test('spin handles loss scenario correctly', async () => {
        const uid = '100';
        await mockApi.init(uid); // Initialize user first
        const bet = 100;

        // Mocking Math.random to ensure a loss
        jest.spyOn(Math, 'random').mockReturnValue(0.1); // Force a loss
        const result = await mockApi.spin(uid, bet);

        expect(result.win).toBeUndefined(); // No win in this case
        expect(result.balance).toBe(900); // Check if the balance reflects the loss (1000 - 100)
    });

    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test
    });
});
