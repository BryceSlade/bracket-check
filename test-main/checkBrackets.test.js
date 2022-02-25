const checkBrackets = require('./checkBrackets')

// I decided to spread all tests so each test case is as descriptive as possible.

test('check for proper closing brackets | "{}" = true', () => {
    expect(checkBrackets('{}')).toBe(true)
})

test('check for two open brackets | "{{" = false', () => {
    expect(checkBrackets('{{')).toBe(false)
})

test('check for empty string = true', () => {
    expect(checkBrackets('')).toBe(true)
})

test('check for two closing brackets | "}}" = false', () => {
    expect(checkBrackets('}}')).toBe(false)
})

test('check for one close, one open bracket | "}{" = false', () => {
    expect(checkBrackets('}{')).toBe(false)
})

test('check for proper closing brackets with non-bracket characters | "{abc}" = true', () => {
    expect(checkBrackets('{abc}')).toBe(true)
})

test('check for improper brackets with non-bracket characters | "{abc{" = false', () => {
    expect(checkBrackets('{abc{')).toBe(false)
})

test('check for proper closing brackets with extra closing bracket | "{{}" = false', () => {
    expect(checkBrackets('{{}')).toBe(false)
})