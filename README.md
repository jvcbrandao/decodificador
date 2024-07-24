# Decodificador de Mensagens

## Descrição

Este projeto é um **Decodificador de Mensagens** que permite criptografar e descriptografar textos utilizando um algoritmo de substituição simples baseado no deslocamento do alfabeto. O sistema é projetado para ser intuitivo e fácil de usar, com uma interface limpa e funcionalidades claras.

## Funcionalidades

- **Criptografia**: Converte cada letra do texto de entrada para a letra correspondente deslocada no alfabeto. Por exemplo, a letra 'a' se torna 'd'.
- **Descriptografia**: Reverte o texto criptografado para o texto original aplicando o deslocamento inverso.

## Tecnologias Utilizadas

- **HTML**: Utilizado para a estrutura básica da página, empregando elementos semânticos para uma melhor organização e acessibilidade.
- **CSS**: Responsável pela estilização e layout da página, utilizando variáveis CSS para definir cores e fontes, e incluindo um reset CSS para garantir uma aparência consistente em diferentes navegadores.
- **JavaScript**: Implementa a lógica de criptografia e descriptografia, permitindo a interação dinâmica com a página.

## Estrutura do Projeto

- **`index.html`**: Contém a estrutura HTML da página, incluindo elementos semânticos como `<main>`, `<section>` e `<aside>`.
- **`styles.css`**: Arquivo de estilos que define a aparência da página. Inclui um reset CSS para normalizar estilos e variáveis CSS para cores e fontes.
- **`criptografar.js`**: Script JavaScript responsável pela criptografia do texto.
- **`descriptografar.js`**: Script JavaScript responsável pela descriptografia do texto.

## Detalhes do Projeto

### HTML Semântico

O projeto utiliza HTML semântico para garantir uma estrutura lógica e acessível. Os principais elementos semânticos utilizados são:

- **`<header>`**: Contém elementos de navegação e logo.
- **`<main>`**: Abriga as seções principais da página.
- **`<section>`**: Divide o conteúdo em partes distintas, como entrada e saída de dados.
- **`<aside>`**: Utilizado para exibir informações secundárias ou complementares.

### Variáveis CSS

O projeto emprega variáveis CSS para definir cores e fontes, facilitando a manutenção e a consistência do design. As variáveis são definidas no seletor `:root` e usadas em todo o arquivo CSS.
