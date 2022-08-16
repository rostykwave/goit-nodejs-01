const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// listContacts();
// getContactById("1");
// getContactById(2);
// removeContact("1");
// removeContact(2);
// addContact("Rostyslav", "rostykwave@gmail.com", "0631070647");
// index.js
const argv = require("yargs").argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      listContacts();
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
