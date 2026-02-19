# claude-code-test

A sample TypeScript project with Jest tests.

## Project Structure

```
src/
  calculator.ts        # Arithmetic utility functions
  stringUtils.ts       # String utility functions
  __tests__/
    calculator.test.ts
    stringUtils.test.ts
```

## Getting Started

```bash
npm install
```

## Running Tests

```bash
npm test
```

## API

### calculator

| Function | Description |
|----------|-------------|
| `add(a, b)` | Returns `a + b` |
| `subtract(a, b)` | Returns `a - b` |
| `multiply(a, b)` | Returns `a * b` |
| `divide(a, b)` | Returns `a / b`, throws on division by zero |

### stringUtils

| Function | Description |
|----------|-------------|
| `capitalize(str)` | Capitalizes the first letter, lowercases the rest |
| `isPalindrome(str)` | Returns `true` if the string is a palindrome |
| `truncate(str, maxLength)` | Truncates to `maxLength` chars and appends `...` |
| `countWords(str)` | Returns the number of words in the string |
