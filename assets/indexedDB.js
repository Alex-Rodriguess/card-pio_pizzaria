let outDB,
    inputPizza,
    inputQtd,
    inputValor,
    pizzaForm,
    db;

const dbName = 'pizzaDB';
const storeName = 'cardapio';

// function to create database
const createDB = () => {
    if (window.indexedDB) {
        const request = window.indexedDB.open(dbName, 3);

        request.onerror = (event) => {
            console.log('Erro de requerimento', event);
            outDB.innerHTML = 'Erro de requerimento';
        }

        request.onsuccess = (event) => {
            db = request.result;
            console.log('Successo no requerimento', event, db);
            outDB.innerHTML = 'Successo no requerimento';
        }

        request.onupgradeneeded = (event) => {
            console.log('Upgrade de requerimento', event)
            outDB.innerHTML = 'Upgrade de requerimento';

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
        outDB.innerHTML = 'Upgrade de requerimento';
    }
}

const addData = (event) => {
    event.preventDefault();

    const newPizza = {
        nome: inputPizza.value,
        qtd: inputQtd.value,
        val: inputValor.value
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