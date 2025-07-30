import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Контактів немає.');
      return;
    }

    const removedContact = contacts[contacts.length - 1];
    const updatedContacts = contacts.slice(0, -1);

    await writeContacts(updatedContacts);

    console.log(' Видалено останній контакт:', removedContact);
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error.message);
  }
};

removeLastContact();
