# Capítulo 1: Introdução a Algoritmos

## Conceitos Principais

- **O que é um algoritmo?**  
  Um algoritmo é um conjunto de instruções bem definidas e organizadas para realizar uma tarefa   

- **O que é pesquisa binária?**  
  A pesquisa binária é um tipo de algoritmo utilizado para localizar um elemento em uma lista ordenada. Ela funciona dividindo a lista ao meio repetidamente, comparando o elemento central com o valor procurado.  
  - **Resultado:** Se o elemento buscado estiver na lista, a pesquisa retorna sua posição. Caso contrário, retorna `None`.  
  - **Comparação com busca simples:**  
    Enquanto a busca simples verifica cada elemento da lista sequencialmente (até encontrar o valor ou chegar ao final), a pesquisa binária reduz o número de verificações ao cortar a lista pela metade em cada etapa.

### Exemplo de Comparação:
- **Busca simples:**  
  Ao procurar o número 99 em uma lista de 100 números, você pode precisar verificar quase todos os elementos, especialmente se o valor estiver no final da lista.

- **Busca binária:**  
  Para a mesma tarefa, a pesquisa binária encontra o número 99 em apenas **7 etapas**, independentemente de onde o número está na lista (ou se não está presente). Isso ocorre porque a cada etapa, o tamanho da lista é reduzido pela metade, de 100 para 50, depois 25, e assim por diante.

## Notas e Observações

### **Logaritmo de Base 2**
- O logaritmo de base 2, escrito como \( \log_2(x) \), responde à pergunta: "Quantas vezes eu preciso multiplicar o número 2 por ele mesmo para obter \( x \)?"  
  Por exemplo:
  - \( \log_2(8) = 3 \) porque \( 2^3 = 8 \).
  - \( \log_2(16) = 4 \) porque \( 2^4 = 16 \).

- **No contexto da computação**:
  - O logaritmo de base 2 é frequentemente usado para descrever a eficiência de algoritmos, como a **pesquisa binária**, onde o número de passos necessários para encontrar um elemento em uma lista de tamanho \( n \) é aproximadamente \( \log_2(n) \).
  - Exemplo: Se uma lista tem 128 elementos (\( 2^7 \)), a pesquisa binária precisará de, no máximo, 7 passos para localizar qualquer elemento.

---

### **Diferença entre Array e Lista**

- **Array**:
  - Em JavaScript, arrays são estruturas dinâmicas que podem armazenar diferentes tipos de dados, mas são projetados para acesso rápido por índice.
  - Arrays têm métodos otimizados para manipulação e iteração.
  - Exemplo em JavaScript:
    ```javascript
    const meuArray = [1, 2, 3, 4, 5]; // Array contendo números
    console.log(meuArray[2]); // Acessa o terceiro elemento (índice 2) -> Saída: 3
    ```

- **Lista (Simulada com Objetos)**:
  - Em JavaScript, listas podem ser simuladas usando objetos encadeados, representando elementos conectados dinamicamente.
  - É menos comum do que arrays, mas útil para certas estruturas de dados, como listas ligadas.
  - Exemplo de lista ligada em JavaScript:
    ```javascript
    class Node {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    }

    // Criando uma lista ligada simples
    const primeiro = new Node(1);
    const segundo = new Node(2);
    const terceiro = new Node(3);

    primeiro.next = segundo;
    segundo.next = terceiro;

    // Percorrendo a lista
    let atual = primeiro;
    while (atual) {
      console.log(atual.value); // Saída: 1, depois 2, depois 3
      atual = atual.next;
    }
    ```

---

### **Resumo das Diferenças**
| **Característica**   | **Array**                           | **Lista**                           |
|-----------------------|-------------------------------------|--------------------------------------|
| **Estrutura**         | Coleção indexada                   | Elementos ligados por ponteiros     |
| **Acesso por Índice** | Rápido (\( O(1) \))                | Lento (\( O(n) \))                  |
| **Tamanho**           | Dinâmico, mas otimizados para tamanho fixo | Totalmente dinâmico               |
| **Tipo de Dados**     | Heterogêneo (qualquer tipo)         | Heterogêneo                         |


## EXERCÍCIOS

### 1.1 Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma pesquisa binária. Qual seria o número máximo de etapas que você levaria para encontrar o nome desejado?

**Resposta:**  
- \( \log_2(128) = 7 \) + 1 = 8 etapas  
- Ou:  
  128 → 64 → 32 → 16 → 8 → 4 → 2 → 1  

---

### 1.2 Suponha que você duplique o tamanho da lista. Qual seria o número máximo de etapas agora?

**Resposta:**  
- \( \log_2(256) = 8 \) + 1 = 9 etapas  
- Ou:  
  256 → 128 → 64 → 32 → 16 → 8 → 4 → 2 → 1
