import { openDB } from 'idb';

import 'regenerator-runtime/runtime';

export const initDb = async () => {
    openDB("contact_db", 1, {
        upgrade(db) {
            if(db.objectStoreNames.contains('contacts')) {
                console.log('contacts store already exists');
                return;
            }
            db.createObjectStore('contacts', {keyPath: 'id', autoIncrement: true});
            console.log('contacts store created');
        }
    })
}

export const editDb = async (id, name, email, phone, profile) => {
    console.log('PUT to the database');
  
    const contactDb = await openDB('contact_db', 1);
  
    const tx = contactDb.transaction('contacts', 'readwrite');
  
    const store = tx.objectStore('contacts');
  
    const request = store.put({ id: id, name: name, email: email, phone: phone, profile: profile });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
  };