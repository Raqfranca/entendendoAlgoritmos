function pesquisarBinaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;

    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2); // Calcula o índice do meio
        let chute = lista[meio];

        if (chute === item) {
            return meio; // Retorna o índice do item encontrado
        }
        if (chute > item) {
            alto = meio - 1; // Atualiza o limite superior
        } else {
            baixo = meio + 1; // Atualiza o limite inferior
        }
    }

    return null; // Retorna null se o item não for encontrado
}

// Teste do algoritmo
const minhaLista = [1, 3, 5, 7, 9];
const resultado = pesquisarBinaria(minhaLista, 7);

if (resultado !== null) {
    console.log(`Elemento encontrado no índice: ${resultado}`);
} else {
    console.log("Elemento não encontrado.");
}
