const fs = require("fs").promises;
const path = require("path");
// const Nanoid = require("nanoid");

const contactsPath = path.resolve("./db/contacts.json");

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
  fs.readFile(contactsPath)
    .then((data) => console.log(JSON.parse(data)))
    .catch((err) => console.log(err.message));
}

function getContactById(contactId) {
  // ...твій код
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data);
      console.log(contacts.find((contact) => contact.id === contactId));
      return contacts.find((contact) => contact.id === contactId);
    })
    .catch((err) => console.log(err.message));
}

function removeContact(contactId) {
  // ...твій код
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data);

      const updatedContacts = contacts.filter(
        (contact) => contact.id !== contactId
      );

      fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    })
    .catch((err) => console.log(err.message));
}

function addContact(name, email, phone) {
  // ...твій код
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data.toString());

      const newContact = {
        // id: Nanoid.nanoid(),
        name,
        email,
        phone,
      };

      const updatedContacts = [...contacts, newContact];

      fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    })
    .catch((err) => console.log(err.message));
}

module.exports = { listContacts, getContactById, removeContact, addContact };
