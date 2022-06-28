function reverseStringOrArray(str: string): string;
// function reverseStringOrArray(arr: any[]): any[];
function reverseStringOrArray<T>(arr: T[]): T[];
function reverseStringOrArray<T>(stringOrArray: string | T[]): string | T[] {
    if (typeof stringOrArray === 'string') {
        return stringOrArray
        .split('')
        .reverse()
        .join('');
    }

    return stringOrArray.reverse();
}

reverseStringOrArray('Apple');
reverseStringOrArray([1, 2, 3, 4, 5]);