'use strict';

//variáveis
let somaMussarela = 0;
let somaPortuguesa = 0;
let somaQuatroqueijos = 0;
let somaMista = 0;
let somaProvolone = 0;
let vendaMussarela = 0.00;
let vendaPortuguesa = 0.00;
let vendaQuatroqueijos = 0.00;
let vendaMista = 0.00;
let vendaProvolone = 0.00;
let soma = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');
let btnCriar = document.getElementById('criar');

//eventos
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);


//funções
function venda(e) {
    if (document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 35.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    } else if (document.getElementById('portuguesa').checked) {

        somaPortuguesa = somaPortuguesa + 1;
        vendaPortuguesa = vendaPortuguesa + 37.00;
        document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
        document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);
    } else if (document.getElementById('quatroqueijos').checked) {

        somaQuatroqueijos = somaQuatroqueijos + 1;
        vendaQuatroqueijos = vendaQuatroqueijos + 34.00;
        document.getElementById('resultadoQuatroqueijos').innerHTML = somaQuatroqueijos;
        document.getElementById('vendaQuatroqueijos').innerHTML = vendaQuatroqueijos.toFixed(2);
    } else if (document.getElementById('mista').checked) {

        somaMista = somaMista + 1;
        vendaMista = vendaMista + 37.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    } else if (document.getElementById('provolone').checked) {

        somaProvolone = somaProvolone + 1;
        vendaProvolone = vendaProvolone + 24.50;
        document.getElementById('resultadoProvolone').innerHTML = somaProvolone;
        document.getElementById('vendaProvolone').innerHTML = vendaProvolone.toFixed(2);
    }
}

function estorno(e) {
    if (document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 35.00;

        if (somaMussarela < 0) {
            somaMussarela = 0;
            vendaMussarela = 0.00;
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    } else if (document.getElementById('portuguesa').checked) {

        somaPortuguesa = somaPortuguesa - 1;
        vendaPortuguesa = vendaPortuguesa - 37.00;
        if (somaPortuguesa < 0) {
            somaPortuguesa = 0;
            vendaPortuguesa = 0.00;
        }
        document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
        document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);
    } else if (document.getElementById('quatroqueijos').checked) {

        somaQuatroqueijos = somaQuatroqueijos - 1;
        vendaQuatroqueijos = vendaQuatroqueijos - 34.00;
        if (somaQuatroqueijos < 0) {
            somaQuatroqueijos = 0;
            vendaQuatroqueijos = 0.00;
        }
        document.getElementById('resultadoQuatroqueijos').innerHTML = somaQuatroqueijos;
        document.getElementById('vendaQuatroqueijos').innerHTML = vendaQuatroqueijos.toFixed(2);
    } else if (document.getElementById('mista').checked) {

        somaMista = somaMista - 1;
        vendaMista = vendaMista - 37.00;
        if (somaMista < 0) {
            somaMista = 0;
            vendaMista = 0.00;
        }
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    } else if (document.getElementById('provolone').checked) {

        somaProvolone = somaProvolone - 1;
        vendaProvolone = vendaProvolone - 24.50;
        if (somaProvolone < 0) {
            somaProvolone = 0;
            vendaProvolone = 0.00;
        }
        document.getElementById('resultadoProvolone').innerHTML = somaProvolone;
        document.getElementById('vendaProvolone').innerHTML = vendaProvolone.toFixed(2);
    }
}

function exportReportToExcel() {

    TableToExcel.convert(document.getElementById("table"), {
        name: "planilha.xlsx", sheet: { name: "planilha" }
    });
}

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

let outDB;
let db;

// function to create database
const createDB = () => {
    if (window.indexedDB) {
        const request = window.indexedDB.open("MyWeatherDB", 1);

        request.onerror = (event) => {
            console.log('Error request', event);
            outDB.innerHTML = 'Error request';
        }

        request.onsuccess = (event) => {
            db = request.result;
            console.log('Successed request', event, db);
            outDB.innerHTML = 'Successed request';
        }

        request.onupgradeneeded = () => {
            console.log('Upgraded request', event)
            outDB.innerHTML = 'Upgraded request';
        }

    } else {
        console.log('You don\'t have support');
        outDB.innerHTML = 'Upgraded request';
    }
}

// execute script when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    outDB = document.getElementById('output-db');
    createDB();
});