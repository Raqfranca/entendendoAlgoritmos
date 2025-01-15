def pesquisar_binaria(lista, item):
    baixo = 0
    alto = len(lista) - 1

    while baixo <= alto:
        meio = (baixo + alto) // 2  # Divisão inteira para obter um índice válido
        chute = lista[meio]

        if chute == item:
            return meio  # Retorna o índice do item encontrado
        if chute > item:
            alto = meio - 1  # Atualiza o limite superior
        else:
            baixo = meio + 1  # Atualiza o limite inferior

    return None  # Retorna None se o item não for encontrado

# Teste do algoritmo
minha_lista = [1, 3, 5, 7, 9]
resultado = pesquisar_binaria(minha_lista, 7)

if resultado is not None:
    print(f"Elemento encontrado no índice: {resultado}")
else:
    print("Elemento não encontrado.")
