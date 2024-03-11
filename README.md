````markdown
# Seedphrase Generator

This package provides a utility to generate seedphrases of different lengths using a custom wordlist.

## Installation

Before using the package, make sure you have Node.js installed on your system.

You can install the package via npm:

```bash
npm install seed-phrase-generator
```
````

## Usage

```javascript
const { generateSeedPhrase } = require("seed-phrase-generator");

// Generate seedphrases of different lengths
const seedphrases = generateSeedPhrase();

console.log(seedphrases);
```

## API

### `generateSeedPhrase()`

Generates seedphrases of different lengths using a custom wordlist.

- Returns an object containing seedphrases of lengths 12, 18, and 24.

## Error Handling

If an error occurs during seedphrase generation, an error object will be returned.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.

```

```
