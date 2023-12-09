# Backlink Manager

Backlink Manager is a Node.js application designed to simulate the creation and management of backlinks for SEO (Search Engine Optimization) purposes. Backlinks are crucial for improving a website's visibility in search engine results, and this tool helps in managing those links effectively.

## Features

- Add a backlink from one site to another.
- Remove an existing backlink.
- Count the number of backlinks pointing to a site.
- Retrieve a list of all sites that have a backlink to a specific site.

## Installation

To install the dependencies for Backlink Manager, run the following command:

```bash
npm install
```

## Usage

The `BacklinkManager` class can be used as follows:

```javascript
const BacklinkManager = require('./BacklinkManager');

// Instantiate the BacklinkManager
const manager = new BacklinkManager();

// Add backlinks
manager.addBacklink("https://siteA.com", "https://siteB.com");
manager.addBacklink("https://siteC.com", "https://siteB.com");

// Count backlinks
console.log(manager.countBacklinks("https://siteB.com")); // Outputs: 2

// Get backlinking sites
console.log(manager.getBacklinkingSites("https://siteB.com")); // Outputs: ["https://siteA.com", "https://siteC.com"]

// Remove a backlink
manager.removeBacklink("https://siteA.com", "https://siteB.com");

// Count backlinks again
console.log(manager.countBacklinks("https://siteB.com")); // Outputs: 1
```

## Testing

To run the tests for Backlink Manager, execute:

```bash
npm test
```

## Contributing

If you'd like to contribute to the project, please fork the repository and create a pull request with your changes.

## Issues

If you encounter any issues or have suggestions, please file them on the [issues page](https://github.com/yourusername/backlink-manager/issues).

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Author

Your Name <your.email@example.com>

## Acknowledgments

This project was created as a part of a programming challenge to simulate SEO backlink management using Node.js.

