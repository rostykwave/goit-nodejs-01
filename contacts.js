const fs = require('node:fs/promises');
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (err) {
    console.log('Error: ', err.message);
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
    console.log('Error: ', err.message);
    return err;
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );

    fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    return contactId;
  } catch (err) {
    console.log('Error: ', err.message);
    return err;
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const newContact = {
      id: (contacts.length + 1).toString(),
      name,
      email,
      phone,
    };

    const updatedContacts = [...contacts, newContact];

    fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));

    return newContact;
  } catch (err) {
    console.log('Error: ', err.message);
    return err;
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
