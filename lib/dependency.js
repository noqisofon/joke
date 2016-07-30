
class Dependency {
    constructor() {
        this.develop_ = {};
        this.testCompile_ = {};
    }

    dev(packageId, requireVersion) {
        this.develop_[packageId] = requireVersion;
    }

    testCompile(packageId, requireVersion) {
        this.testCompile_[packageId] = requireVersion;
    }
}

module.exports = Dependency;
