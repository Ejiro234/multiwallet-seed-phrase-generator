````markdown
# Passphrase Generator

This package provides a utility to generate passphrases of different lengths using a custom wordlist.

## Installation

Before using the package, make sure you have Node.js installed on your system.

You can install the package via npm:

```bash
npm install pass-phrase-generator
```
````

## Usage

```javascript
const { generatePassPhrase } = require("passphrase-generator");

// Generate passphrases of different lengths
const passphrases = generatePassPhrase();

console.log(passphrases);
```

## API

### `generatePassPhrase()`

Generates passphrases of different lengths using a custom wordlist.

- Returns an object containing passphrases of lengths 12, 18, and 24.

## Error Handling

If an error occurs during passphrase generation, an error object will be returned.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.

```

```
