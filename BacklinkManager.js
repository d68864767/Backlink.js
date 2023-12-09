class BacklinkManager {
  constructor() {
    this.backlinks = new Map();
  }

  addBacklink(fromSite, toSite) {
    if (!this.backlinks.has(toSite)) {
      this.backlinks.set(toSite, new Set());
    }
    this.backlinks.get(toSite).add(fromSite);
  }

  removeBacklink(fromSite, toSite) {
    if (this.backlinks.has(toSite)) {
      this.backlinks.get(toSite).delete(fromSite);
    }
  }

  countBacklinks(toSite) {
    if (this.backlinks.has(toSite)) {
      return this.backlinks.get(toSite).size;
    }
    return 0;
  }

  getBacklinkingSites(toSite) {
    if (this.backlinks.has(toSite)) {
      return Array.from(this.backlinks.get(toSite));
    }
    return [];
  }
}

module.exports = BacklinkManager;
