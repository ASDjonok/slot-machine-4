import MockAPI from "../../src/services/MockAPI.js"; 
import Utilities from "../../src/utilities/Utilities.js";

jest.mock("../../src/utilities/Utilities.js");

describe('MockAPI', () => {
    let mockApi;

    beforeEach(() => {
        mockApi = new MockAPI();
        
        Utilities.getRandomSymbolNumber.mockReturnValue(0); 
    });

    test('init initializes a new user with default values', async () => {
        const uid = '100';
        const user = await mockApi.init(uid);

        expect(user).toEqual({
            uid: '100',
            balance: 1000,
            last_bet: 0,
            bets: [10, 20, 50, 100],
            rolls: expect.any(Array) 
        });
        expect(mockApi.data[uid]).toEqual(user);
    });

    test('init retrieves existing user data', async () => {
        const uid = '100';
        await mockApi.init(uid); 
        const user = await mockApi.init(uid); 

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
        await mockApi.init(uid); 
        const bet = 100;

        jest.spyOn(Math, 'random').mockReturnValue(0.1); 
        const result = await mockApi.spin(uid, bet);

        expect(result.last_bet).toBe(bet);
        expect(result.balance).toBe(900); 
        expect(result.rolls).toHaveLength(3); 
    });

    test('spin handles win scenario correctly', async () => {
        const uid = '100';
        await mockApi.init(uid); 
        const bet = 100;
        
        jest.spyOn(Math, 'random').mockReturnValue(0.99); 
        const result = await mockApi.spin(uid, bet);

        expect(result.win).toBe(200); 
        expect(result.balance).toBe(1100); 
    });

    test('spin handles loss scenario correctly', async () => {
        const uid = '100';
        await mockApi.init(uid); 
        const bet = 100;
        
        jest.spyOn(Math, 'random').mockReturnValue(0.1); 
        const result = await mockApi.spin(uid, bet);

        expect(result.win).toBeUndefined(); 
        expect(result.balance).toBe(900); 
    });

    afterEach(() => {
        jest.clearAllMocks(); 
    });
});
