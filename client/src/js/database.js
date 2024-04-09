import { openDB } from 'idb';

const DB_NAME = 'jate';
const DB_VER = 1;

const initdb = async () =>
  openDB(DB_NAME, DB_VER, {
    upgrade(db) {
      if (db.objectStoreNames.contains(DB_NAME)) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore(DB_NAME, { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// There's literally no use case for more than one entry in this DB unless we were going to keep a history of edits (which we won't even use)
export const putDb = async (content) => {
  const database = await openDB(DB_NAME, DB_VER);

  const tx = database.transaction(DB_NAME, 'readwrite');
  const store = tx.objectStore(DB_NAME);

  // Put will create a record if none exists, so we'll just call it on the first result
  const request = store.put({ id: 1, content });

  const result = await request;

  return result;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const database = await openDB(DB_NAME, DB_VER);

  const tx = database.transaction(DB_NAME, 'readonly');
  const store = tx.objectStore(DB_NAME);

  const request = store.getAll();

  const [result] = await request; // We want to grab the first result only, so we'll deconstruct the array

  return result.content; // Return the contents for handling by the editor
};

initdb();
