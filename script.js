// Quantidade de carne por pessoa é de 400g se for ++6 horas - 600g
// Quantidade de carvao por pessoa é de 1,5kg se for ++6 horas - 2kg
// Quantidade de cerveja por pessoa é de 1000ml se for ++6horas - 1500ml
// Quantidade de bebidas(agua, sucos e refrigerantes) por pessoa é de 1000ml se for mais de ++6horas - 1500ml
// Crianças vale por 0,5 pessoa



let qntAdultos = document.getElementById('adultos');
let qntCriancas = document.getElementById('criancas');
let qntDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');



function calcular(){

    let adultos = qntAdultos.value;
    let criancas = qntCriancas.value;
    let duracao = qntDuracao.value;

    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);

    let totalCarvao = carvaoPP(duracao) * adultos + (carvaoPP(duracao) / 2 * criancas);

    let totalCerveja = cervejaPP(duracao) * adultos;
    
    let totalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);
    
    
    resultado.innerHTML = '<p>' + totalCarne / 1000 + ' kg de Carne </p>'
    resultado.innerHTML += '<p>' + totalCarvao + ' kg de Carvão </p>'
    resultado.innerHTML += '<p>' + Math.ceil(totalCerveja / 350) + ' latas de 350ml de Cerveja </p>'
    resultado.innerHTML += '<p>' + Math.ceil(totalBebida / 1000) + ' litros de Bebida não alcóolica </p>'
}

function carnePP(duracao) {
    if(duracao >= 6) {
        return 600;
    } else {
        return 400;
    }
}

function carvaoPP(duracao) {
    if(duracao >= 6) {
        return 2;
    } else {
        return 1.5;
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

function bebidaPP(duracao) {
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}