import {
    getName,
    fetchQuotes,
    copyAndPush,
    capitalizeAndFilter,
} from './app.js';

describe('red, green, refactor lab', () => {
    it('should return the name property of an object', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };
        expect(getName(spot)).toEqual('spot');

        const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
        expect(getName(character)).toEqual('Aang');
    });

    it('should return a new array with an extra item added to the end', () => {
        const numbers = [1, 2, 3];
        expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
        expect(numbers).toEqual([1, 2, 3]);
    });

    it('should capitalize strings and filter out strings that start with f/F', () => {
        const strings = ['Fe', 'fi', 'fo', 'fum', 'this', 'is', 'a', 'test'];
        expect(capitalizeAndFilter(strings)).toEqual([
            'This',
            'Is',
            'A',
            'Test',
        ]);
    });

    it('should return a single random quote from the futurama api', async () => {
        const res = await fetchQuotes();
        expect(res).toEqual({
            character: expect.any(String),
            quote: expect.any(String),
            image: expect.any(String),
        });
    });
});
