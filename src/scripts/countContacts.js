import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return `Кількість контактів ${contacts.length}`;
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error.message);
    return 0;
  }
};

console.log(await countContacts());
