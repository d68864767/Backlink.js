const BacklinkManager = require('./BacklinkManager');

// Instantiate the BacklinkManager
const manager = new BacklinkManager();

// Example usage of the BacklinkManager
manager.addBacklink("https://siteA.com", "https://siteB.com");
manager.addBacklink("https://siteC.com", "https://siteB.com");

console.log(manager.countBacklinks("https://siteB.com")); // Outputs: 2
console.log(manager.getBacklinkingSites("https://siteB.com")); // Outputs: ["https://siteA.com", "https://siteC.com"]

manager.removeBacklink("https://siteA.com", "https://siteB.com");

console.log(manager.countBacklinks("https://siteB.com")); // Outputs: 1

// The index.js file can be used to interact with the BacklinkManager or to provide an interface for users to manage backlinks.
// Additional functionality such as a command-line interface, REST API, or integration with a database can be added here to extend the project.
