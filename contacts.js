const fs = require('node:fs/promises');
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = data.toString();
    return contacts;
  } catch (err) {
    return err;
  }
  // fs.readFile(contactsPath)
  //   .then(data => console.log(JSON.parse(data)))
  //   .catch(err => console.log(err.message));
}

function getContactById(contactId) {
  fs.readFile(contactsPath)
    .then(data => {
      const contacts = JSON.parse(data);
      console.log(contacts.find(contact => contact.id === contactId));
      return contacts.find(contact => contact.id === contactId);
    })
    .catch(err => console.log(err.message));
}

function removeContact(contactId) {
  fs.readFile(contactsPath)
    .then(data => {
      const contacts = JSON.parse(data);

      const updatedContacts = contacts.filter(
        contact => contact.id !== contactId
      );

      fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    })
    .catch(err => console.log(err.message));
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath)
    .then(data => {
      const contacts = JSON.parse(data.toString());

      const newContact = {
        name,
        email,
        phone,
      };

      const updatedContacts = [...contacts, newContact];

      fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    })
    .catch(err => console.log(err.message));
}

module.exports = { listContacts, getContactById, removeContact, addContact };
