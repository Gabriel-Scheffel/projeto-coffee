// GALERIA DE FOTOS
// Array com o caminho de cada foto da galeria.
const fotos = [
    "imagens/foto-a.jpg",
    "imagens/foto-b.jpg",
    "imagens/foto-c.jpg",
    "imagens/foto-d.jpg",
    "imagens/foto-e.jpg",
    "imagens/foto-f.jpg"
];

// Variável que guarda o índice (posição no array) da foto atual.
let indiceAtual = 0;

// DOM: pegando os elementos que vamos usar.
const imagemAnterior = document.getElementById("foto-anterior");
const imagemGaleria = document.getElementById("foto-galeria");
const imagemProxima = document.getElementById("foto-proxima");
const botaoAnterior = document.getElementById("btn-anterior");
const botaoProxima = document.getElementById("btn-proxima");

// Função que "corrige" um índice que passou dos limites do array,
// fazendo ele dar a volta (do fim para o começo e vice-versa).
function corrigirIndice(indice) {
    if (indice > fotos.length - 1) {
        return 0;
    }

    if (indice < 0) {
        return fotos.length - 1;
    }

    return indice;
}

// Função que atualiza as 3 imagens (anterior, atual e próxima) de
// acordo com o índice recebido.
function mostrarFoto(indice) {
    const indiceAnterior = corrigirIndice(indice - 1);
    const indiceProximo = corrigirIndice(indice + 1);

    imagemAnterior.src = fotos[indiceAnterior];
    imagemGaleria.src = fotos[indice];
    imagemProxima.src = fotos[indiceProximo];
}

// Ao clicar em "Próxima", avança o índice (com a volta ao início).
botaoProxima.addEventListener("click", function () {
    indiceAtual = corrigirIndice(indiceAtual + 1);
    mostrarFoto(indiceAtual);
});

// Ao clicar em "Anterior", volta o índice (com a volta ao fim).
botaoAnterior.addEventListener("click", function () {
    indiceAtual = corrigirIndice(indiceAtual - 1);
    mostrarFoto(indiceAtual);
});

// Mostra as 3 fotos certas assim que a página carrega.
mostrarFoto(indiceAtual);
