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
