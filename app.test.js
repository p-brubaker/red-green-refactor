import { getName, copyAndPush } from './app.js';

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
    });
});
