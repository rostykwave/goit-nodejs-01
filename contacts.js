const fs = require('node:fs/promises');
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (err) {
    return err;
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const contactById = contacts.find(contact => contact.id === contactId);
    return contactById;
  } catch (err) {
    return err;
  }
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
