const container = document.querySelector(".container");

const div = document.createElement("div");

const elementos = [
    {tag: "p", texto: "Frase 1"},
    {tag: "div", texto: "Frase 2"},
    {tag: "footer", texto: "Frase 3"},
    {tag: "section", texto: "Frase 4"},
    
];


for (let i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i]; //Desestruturando o objeto a cada iteração do for
    let elemento = document.createElement(tag); //Criar um elemento tag a cada iteração. Ou seja, a cada volta do loop uma nova tag vai ser criada, sendo ela um "p", "div", "section" e "footer"
    elemento.innerHTML = texto; // Cria o texto para cada tag criada. A outra forma de fazer seria: let textNode = document.createTextNode(texto);. Porém, dessa forma, teria que adicionar esse elemento ao HTML, por meio do: elemento.appendChild(textoNode)
    div.appendChild(elemento); //Adiciona os elementos criados (tag e texto) à div. appendChild serve para adicionar algo a um elemento pai, que nesse caso é a div
}

container.appendChild(div);


