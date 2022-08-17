const fs = require("fs").promises;
const path = require("path");
// const Nanoid = require("nanoid");

const contactsPath = path.resolve("./db/contacts.json");

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
  fs.readFile(contactsPath)
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

function getContactById(contactId) {
  // ...твій код
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data.toString());

      typeof contactId === "string"
        ? console.log(contacts.find((contact) => contact.id === contactId))
        : console.log(
            contacts.find((contact) => contact.id === contactId + "")
          );
    })
    .catch((err) => console.log(err.message));
}

function removeContact(contactId) {
  // ...твій код
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data.toString());

      const newContacts =
        typeof contactId === "string"
          ? contacts.filter((contact) => contact.id !== contactId)
          : contacts.filter((contact) => contact.id !== contactId + "");

      console.log(newContacts);
      ///Why JSON stringify ? How to write original Array of objects to json file?
      // fs.writeFile(contactsPath, JSON.stringify(newContacts), "utf8");
    })
    .catch((err) => console.log(err.message));
}

function addContact(name, email, phone) {
  // ...твій код
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data.toString());

      const newContacts = {
        // id: Nanoid.nanoid(),
        name,
        email,
        phone,
      };

      console.log(newContacts);
      ///Why JSON stringify ? How to write original Array of objects to json file?
      //ID???
      //   fs.writeFile(contactsPath, JSON.stringify(newContacts), "utf8");
    })
    .catch((err) => console.log(err.message));
}

module.exports = { listContacts, getContactById, removeContact, addContact };

// listContacts();
// getContactById("1");
// getContactById(2);
// removeContact("1");
// removeContact(2);
// addContact("Rostyslav", "rostykwave@gmail.com", "0631070647");
