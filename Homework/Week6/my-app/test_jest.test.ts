import {describe, expect, test} from '@jest/globals';
import{ sum, combine, arr, obj } from './test_jest';
describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1,2)).toBe(3);
    });
}
);
describe('combine module', () => {
    test('combines Hello and World to equal Hello World', () => {
        expect(combine('Hello','World')).toBe('HelloWorld');
    });
}
);
describe('arr module', () => {
    test('put 1 and 2 in an array to equal [1,2]', () => {
        expect(arr(1,2)).toEqual([1,2]);
    });
}
);
describe('obj module', () => {
    test('put 1 and 2 in an object to equal {a:1,b:2}', () => {
        expect(obj(1,2)).toEqual({a:1,b:2});
    });
}
);
