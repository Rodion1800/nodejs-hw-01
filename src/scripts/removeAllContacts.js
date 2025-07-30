import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]); // Записує порожній масив у файл
    console.log('Усі контакти було успішно видалено.');
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error.message);
  }
};

removeAllContacts();
