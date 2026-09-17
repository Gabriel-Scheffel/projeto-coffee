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

// SELO "ABERTO AGORA" / "FECHADO"
// Variáveis com o horário de funcionamento (formato 24h).
const horaAbertura = 8;
const horaFechamento = 20;

// Tratamento de dados: pega a data/hora atual do visitante e extrai
// só a hora (um número de 0 a 23).
const horaAtual = new Date().getHours();

const seloHorario = document.getElementById("selo-horario");

// Condicional: a loja está aberta se a hora atual estiver entre o
// horário de abertura (incluso) e o de fechamento (não incluso).
if (horaAtual >= horaAbertura && horaAtual < horaFechamento) {
    seloHorario.textContent = "Estamos abertos agora ☕";
    seloHorario.classList.add("selo-aberto");
} else {
    seloHorario.textContent = "Fechado no momento — abrimos às " + horaAbertura + "h";
    seloHorario.classList.add("selo-fechado");
}

// CARDÁPIO DE CAFÉS
// Array de objetos: cada item do cardápio tem nome, preço e descrição.
const cardapio = [
    {
        nome: "Espresso",
        preco: 6.5,
        descricao: "Café puro, forte e encorpado."
    },
    {
        nome: "Cappuccino",
        preco: 9.0,
        descricao: "Espresso, leite vaporizado e espuma cremosa."
    },
    {
        nome: "Latte",
        preco: 9.5,
        descricao: "Espresso com bastante leite vaporizado e uma fina camada de espuma."
    },
    {
        nome: "Mocha",
        preco: 10.5,
        descricao: "Espresso, chocolate quente e leite vaporizado."
    },
    {
        nome: "Chá Gelado",
        preco: 7.0,
        descricao: "Chá preto gelado, servido com rodelas de limão."
    },
    {
        nome: "Croissant",
        preco: 8.0,
        descricao: "Croissant amanteigado, assado na hora."
    }
];

const listaCardapio = document.getElementById("cardapio-lista");

// Função que recebe um item do cardápio (um objeto do array acima) e
// devolve o elemento HTML pronto do card correspondente.
function criarItemCardapio(item) {
    const card = document.createElement("div");
    card.className = "item-cardapio";

    const titulo = document.createElement("h3");
    titulo.textContent = item.nome;

    const preco = document.createElement("p");
    preco.className = "preco";
    // Tratamento de dados: formata o número (ex: 9.5) como preço em
    // reais (ex: "R$ 9,50").
    preco.textContent = "R$ " + item.preco.toFixed(2).replace(".", ",");

    const descricao = document.createElement("p");
    descricao.className = "descricao";
    descricao.textContent = item.descricao;

    card.appendChild(titulo);
    card.appendChild(preco);
    card.appendChild(descricao);

    return card;
}

// Repetição: percorre o array do cardápio e adiciona cada card na
// página, um por um.
for (let i = 0; i < cardapio.length; i++) {
    const cardHTML = criarItemCardapio(cardapio[i]);
    listaCardapio.appendChild(cardHTML);
}

// BOTÃO "VOLTAR AO TOPO"
const botaoTopo = document.getElementById("btn-topo");

// Evento de rolagem: toda vez que o usuário rola a página, verifica
// a posição atual (window.scrollY) e decide se mostra o botão.
window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        botaoTopo.classList.add("visivel");
    } else {
        botaoTopo.classList.remove("visivel");
    }
});

// Ao clicar, rola a página de volta para o topo suavemente.
botaoTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
