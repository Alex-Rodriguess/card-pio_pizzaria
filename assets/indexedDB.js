/*
    O que e indexedDB
  - banco de dados nao relacional
  - permite armazenamento de objetos no browser do usuário
  - nos permite armazenar objetos javascript, arquivos, blobs
  - suporta transacoes
  - la podemos definir multiplos indices para realizar consultas
  Bibliotecas que facilitam o uso de indexedDB
  - IndexedDB Promised
  - localForage
  // - https://www.youtube.com/watch?v=vb7fkBeblcw
*/

let outDB,
    inputPizza,
    inputQtd,
    inputValor,
    pizzaForm,
    db;

const dbName = 'pizzaDB';
const storeName = 'forecast';

// function to create database
const createDB = () => {
    if (window.indexedDB) {
        const request = window.indexedDB.open(dbName, 1);

        request.onerror = (event) => {
            console.log('Error request', event);
            outDB.innerHTML = 'Error request';
        }

        request.onsuccess = (event) => {
            db = request.result;
            console.log('Successed request', event, db);
            outDB.innerHTML = 'Successed request';
        }

        request.onupgradeneeded = (event) => {
            console.log('Upgraded request', event)
            outDB.innerHTML = 'Upgraded request';

            //saving the database
            let db = event.target.result;

            //
            let objectStore = db.createObjectStore(storeName,
                {
                    keyPath: 'id',
                    autoIncrement: true
                });

            // creating a index it can repeat if we pass the value unique as false
            objectStore.createIndex('nome', 'nome', { unique: false });

            // creating a second index the objectStore can have more than one
            objectStore.createIndex('qtd', 'qtd', { unique: false });

            objectStore.createIndex('val', 'val', { unique: false });

            console.log('Config completed');
        }

    } else {
        console.log('You don\'t have support');
        outDB.innerHTML = 'Upgraded request';
    }
}

const addData = (event) => {
    event.preventDefault();

    const newPizza = {
        lat: inputPizza.value,
        log: inputQtd.value,
        city: inputValor.value
    };

    let transaction = db.transaction([storeName], 'readwrite');
    let objectStore = transaction.objectStore(storeName);
    let request = objectStore.add(newPizza);

    request.onsuccess = () => {
        inputPizza.value = '';
        inputQtd.value = '';
        inputValor.value = '';
    };

    transaction.oncomplete = (event) => {
        console.log('transaction completed', event)
    }

    transaction.onerror = (event) => {
        console.log('transaction error', event)
    }
}

// execute script when the DOM is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    outDB = document.getElementById('outputdb');
    inputPizza = document.getElementById('inputPizza');
    inputQtd = document.getElementById('inputQtd');
    inputValor = document.getElementById('inputValor');
    pizzaForm = document.getElementById('pizzaForm');

    pizzaForm.onsubmit = addData;

    createDB();
});

// execute script when the DOM is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    outDB = document.getElementById('outputdb');
    createDB();
});