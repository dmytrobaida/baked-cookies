import { expect, test } from '@jest/globals';

import serialize from "../src/lib/serialize";

test('serializes valid object with number value to be correct string', () => {
    expect(serialize({ testKey: 1 })).toBe('testKey=1;');
});

test('serializes valid object with string value to be correct string', () => {
    expect(serialize({ testKey: 'testValue' })).toBe('testKey=testValue;');
});

test('serializes valid object with multiple different values to be correct string', () => {
    expect(serialize({ testKey1: 1, testKey2: 'testValue' })).toBe('testKey1=1;testKey2=testValue;');
});

test('serializes object with empty value to be correct string', () => {
    expect(serialize({ testKey: undefined })).toBe('testKey;');
});

test('serializes null to be empty string', () => {
    expect(serialize(null as any)).toBe('');
});

test('serializes empty object to be empty string', () => {
    expect(serialize({})).toBe('');
});
