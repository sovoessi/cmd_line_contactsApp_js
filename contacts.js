const fs = require('fs')
const chalk = require('chalk')

const addContact = function (fname, lname, fnumber){
    contacts = loadContacts()

    const duplicateNumbers = contacts.filter((contact) => {
        return contact.fnumber === fnumber
    })

    if(duplicateNumbers.length === 0){
        contacts.push({
            fname,
            lname,
            fnumber
        })
        saveContacts(contacts)
        console.log(chalk.red.bgGreen(
            'New contact: "' +lname+ '" added!'));   
    }else{
        console.log(chalk.gray.bgMagenta(
            'Contact phone number already exists. Want to modify?'));
    }

} 

const removeContact  = function name(contactFNumber) {
    contacts = loadContacts()

    const newContacts = contacts.filter((contact) => {
            return contactFNumber !== contact.fnumber
    })

    if(newContacts.length === contacts.length)
    {
       console.log(chalk.blue.bgRed('No contact with "'+contactFNumber+'" found!'));
    }else{
        saveContacts(newContacts)
        console.log(chalk.red.bgGreen('Contact removed!'));
    }
}

const listContacts = function name(params) {
    
}

const deleteAll = function name(params) {
    
}
    
const searchContact  = function name(contactFName) {
    const contacts = loadContacts()
    const contact = contacts.filter((contact) => {
        return contact.fname === contactFName
    })

    if(contact.length > 0){
        console.log(chalk.blue.bgWhite(
            contact[0].fname, contact[0].lname, contact[0].fnumber));
    }else{
        console.log(chalk.gray.bgYellow('Contact not found'));
    }
}

const saveContacts = function(contacts){
    const dataJSON = JSON.stringify(contacts)
    fs.writeFileSync('contacts.json', dataJSON)
}

const loadContacts = function(){
    try{
        const dataBuffer = fs.readFileSync('contacts.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}

module.exports = {
    addContact,
    removeContact,
    listContacts,
    deleteAll,
    searchContact
}