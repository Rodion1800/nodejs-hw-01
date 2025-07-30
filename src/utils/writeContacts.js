import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2); 
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log('💾 Контакти успішно записано у файл.');
  } catch (error) {
    console.error(' Помилка при записі контактів:', error.message);
    throw error;
  }
};
