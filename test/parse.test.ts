import { expect, test } from '@jest/globals';

import parse from "../src/lib/parse";

test('parses valid string with one number value to be correct object', () => {
    expect(parse('testKey=1;')).toEqual({ 'testKey': 1 });
});

test('parses valid string with one string value to be correct object', () => {
    expect(parse('testKey=testValue;')).toEqual({ 'testKey': 'testValue' });
});

test('parses valid string with multiple different values to be correct object', () => {
    expect(parse('testKey1=testValue;testKey2=1;')).toEqual({ 'testKey1': 'testValue', 'testKey2': 1 });
});

test('parses empty string to be empty object', () => {
    expect(parse('')).toEqual({});
});

test('parses string with whitespaces to be empty object', () => {
    expect(parse('  ')).toEqual({});
});

test('parses null to be empty object', () => {
    expect(parse(null as any)).toEqual({});
});