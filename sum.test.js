const sum = require("./sum");

test('sum should be 11', () => { 
    expect(sum(1, 2)).toBe(3);
})