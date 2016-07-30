#!/usr/bin/env node

const minimist = require( 'minimist' );

const package = require( '../package.json' );

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

function handleCommandLineArguments(argv) {
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
    console.log( 'Usage:' );
    console.log( `    ${package.name} [<options>] [<tasks>]` );
    console.log( '' );
    console.log( 'Options:' );
    console.log( '  -h, --help       Display this help' );
    console.log( '      --list       Display available taks' );
    console.log( '  -v, --version    Display version' );
    console.log( '' );
}

handleCommandLineArguments( argv );
