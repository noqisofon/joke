const chalk    = require( 'chalk' );
const minimist = require( 'minimist' );
const Liftoff  = require( 'liftoff' );

const package  = require( './package.json' );

const argv = minimist( process.argv.slice( 2 ), {
    boolean: [
        'help',
        'list',
        'silent',
        'debug',
        'version'
    ],
    alias: {
        h: 'help',
        v: 'version'
    },
    default:  {
        help: false,
        version: false
    }
} );

const  cli = new Liftoff( {
    name: package.name
} );

function run() {
    cli.launch( {
        cwd: process.cwd()
    }, handleCommandLineArguments );
}

module.exports = run;

function handleCommandLineArguments(env) {
    const shouldShowVersion = argv.v || argv.version;
    const shouldShowHelp    = argv.h || argv.help;

    const sholdBeSlient     = argv.silent && !argv.debug;

    const sholdBeDebug      = argv.debug;

    // console.log( `should show version: ${shouldShowVersion}` );
    // console.log( `should show help   : ${shouldShowHelp}` );
    // console.log( `should be silent   : ${sholdBeSlient}` );
    // console.log( `should be debug    : ${sholdBeDebug}` );

    if ( shouldShowVersion ) {
        showVersion();

        return ;
    }

    if ( shouldShowHelp ) {
        showHelp();

        return ;
    }
}

function showVersion() {
    console.log( `${package.name} ${package.version}` );
}

function showHelp() {
    console.log( chalk.bold( 'Usage' ) + ':' );
    console.log( `    ${package.name} [<options>] [<tasks>]` );
    console.log( '' );
    console.log( chalk.bold( 'Options' ) + ':' );
    console.log( '  -h, --help       Display this help' );
    console.log( '      --list       Display available tasks' );
    console.log( '  -v, --version    Display version' );
    console.log( '' );
}
