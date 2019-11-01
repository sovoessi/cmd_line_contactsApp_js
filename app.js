const yargs = require('yargs')
const contacts = require('./contacts.js') 


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new contact',
    builder: {
        fname: {
            describe: 'Contact first name',
            demandOption: true,
            type: 'string'
        },
        lname: {
            describe: 'Contact last name',
            demandOption: true,
            type: 'string'
        },
        fnumber: {
            describe: 'Contact phone number',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        contacts.addContact(argv.fname, argv.lname, argv.fnumber);
        
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a contact',
    builder:{
        fnumber: {
            describe: 'Contact phone number',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        contacts.removeContact(argv.fnumber)
    }
})

yargs.command({
    command: 'search',
    describe: 'search a contact',
    builder: {
        fname: {
            describe: 'Contact phone number',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        contacts.searchContact(argv.fname)
    }
})

yargs.command({
    command: 'list',
    describe: 'list all contacts',
    handler: function(argv){
        
    }
})

//console.log(yargs.argv);
