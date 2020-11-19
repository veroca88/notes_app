const chalk = require('chalk')
const yargs = require('yargs')
const currentNotes = require('./notes')

// Create add command
yargs.command({
    command:'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // e.g. required
            type: 'string'
        },
        body: {
            describe: 'Add description',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function(arg) {
        currentNotes.addNote(arg.title, arg.body)
    }
})

// Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // e.g. required
            type: 'string'
        }
    },
    handler: function(arg) {
        currentNotes.removeNote(arg.title)
    }
})

// Create list command
yargs.command({
    command:'list',
    describe: 'List all notes',
    handler: function() {
        currentNotes.listNotes()
    }
})

// Create read command
yargs.command({
    command:'read',
    describe: 'Read note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // e.g. required
            type: 'string'
        }
    },
    handler: function(arg) {
        currentNotes.readNote(arg.title)
    }
})


// console.log(yargs.argv)
yargs.parse()