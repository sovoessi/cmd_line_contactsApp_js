const yargs = require('yargs')
const contacts = require('./contacts.js') 


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new contact',
    handler: function(){
        
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a contact',
    handler: function(){
        
    }
})

yargs.command({
    command: 'search',
    describe: 'search a contact',
    handler: function(){
        
    }
})

yargs.command({
    command: 'list',
    describe: 'list all contacts',
    handler: function(){
        
    }
})

console.log(yargs.argv);
