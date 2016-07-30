const SourceSet = require( './source-set' );
const Dependency = require( './dependency' );

class Joke {
    apply(options) {
        console.log( options );
    }

    sourceSets(proc) {
        let aSourceSet = new SourceSet();

        proc( aSourceSet );

        this.sourceSet_ = aSourceSet;
        console.log( this.sourceSet_ );
    }

    dependencies(proc) {
        let dependency = new Dependency();

        proc( dependency );

        this.dependency_ = dependency;

        console.log( this.dependency_ );
    }
}

module.exports = Joke;
