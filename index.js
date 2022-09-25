const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');

const { program } = require('commander');

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      try {
        const contacts = await listContacts();
        console.log('Contacts list:', contacts);
      } catch (error) {
        console.log(error);
      }
      break;

    case 'get':
      try {
        const contactById = await getContactById(id);
        console.log('Get Contact By Id:', contactById);
      } catch (error) {
        console.log(error);
      }
      break;

    case 'add':
      try {
        const addedContact = await addContact(name, email, phone);
        console.log(`Contact with id ${addedContact.id} added.`);
      } catch (error) {
        console.log(error);
      }
      break;

    case 'remove':
      try {
        const removedContactID = await removeContact(id);
        console.log(`Contact with id ${removedContactID} removed.`);
      } catch (error) {
        console.log(error);
      }

      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
