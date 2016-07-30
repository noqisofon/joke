

class SourceSet {
    constructor() {
        this.binDir_ = 'bin';
        this.srcDirs_ = [];
    }
    
    srcDirs(sourceDirs) {
        if ( ! Array.isArray( sourceDirs ) ) {
            sourceDirs = [ sourceDirs ];
        }

        for ( let sourceDir of sourceDirs ) {
            this.srcDirs_.push( sourceDir );
        }
    }

    binDir(outputDir) {
        this.binDir_ = outputDir;
    }
}

module.exports = SourceSet;
