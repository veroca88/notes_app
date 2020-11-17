const chalk = require('chalk')
const yargs = require('yargs')
const currentNote = require('./notes')

// Create add command
yargs.command({
    command:'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // e.g. required
            type: 'string'
        }

    },
    handler: function(arg) {
        console.log('Adding a new note!', arg)
    }
})

// Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove note',
    handler: function() {
        console.log('Removing note!')
    }
})

// Create list command
yargs.command({
    command:'list',
    describe: 'List all notes',
    handler: function() {
        console.log('Listing out all notes!')
    }
})

// Create read command
yargs.command({
    command:'read',
    describe: 'Read note',
    handler: function() {
        console.log('Reading note!')
    }
})


console.log(yargs.argv)