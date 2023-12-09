const BacklinkManager = require('../BacklinkManager');

describe('BacklinkManager', () => {
  let manager;

  beforeEach(() => {
    manager = new BacklinkManager();
  });

  test('should add a backlink correctly', () => {
    manager.addBacklink('https://siteA.com', 'https://siteB.com');
    expect(manager.countBacklinks('https://siteB.com')).toBe(1);
  });

  test('should remove a backlink correctly', () => {
    manager.addBacklink('https://siteA.com', 'https://siteB.com');
    manager.removeBacklink('https://siteA.com', 'https://siteB.com');
    expect(manager.countBacklinks('https://siteB.com')).toBe(0);
  });

  test('should return the correct count of backlinks', () => {
    manager.addBacklink('https://siteA.com', 'https://siteB.com');
    manager.addBacklink('https://siteC.com', 'https://siteB.com');
    manager.addBacklink('https://siteD.com', 'https://siteB.com');
    expect(manager.countBacklinks('https://siteB.com')).toBe(3);
  });

  test('should return an empty array if no backlinks are present', () => {
    expect(manager.getBacklinkingSites('https://siteB.com')).toEqual([]);
  });

  test('should return a list of all sites that have a backlink to the specified site', () => {
    manager.addBacklink('https://siteA.com', 'https://siteB.com');
    manager.addBacklink('https://siteC.com', 'https://siteB.com');
    expect(manager.getBacklinkingSites('https://siteB.com')).toEqual(['https://siteA.com', 'https://siteC.com']);
  });

  test('should handle the removal of non-existing backlinks gracefully', () => {
    manager.addBacklink('https://siteA.com', 'https://siteB.com');
    manager.removeBacklink('https://siteX.com', 'https://siteB.com'); // non-existing backlink
    expect(manager.countBacklinks('https://siteB.com')).toBe(1);
  });

  test('should not add duplicate backlinks', () => {
    manager.addBacklink('https://siteA.com', 'https://siteB.com');
    manager.addBacklink('https://siteA.com', 'https://siteB.com'); // duplicate backlink
    expect(manager.countBacklinks('https://siteB.com')).toBe(1);
  });

  test('should maintain the order of backlinks', () => {
    manager.addBacklink('https://siteA.com', 'https://siteB.com');
    manager.addBacklink('https://siteC.com', 'https://siteB.com');
    manager.addBacklink('https://siteD.com', 'https://siteB.com');
    manager.removeBacklink('https://siteC.com', 'https://siteB.com');
    manager.addBacklink('https://siteE.com', 'https://siteB.com');
    expect(manager.getBacklinkingSites('https://siteB.com')).toEqual(['https://siteA.com', 'https://siteD.com', 'https://siteE.com']);
  });
});
