let criptografar = () => {
    let mensagem = document.getElementById('mensagem').value;
    let Novamensagem = '';

    for (let i = 0; i < mensagem.length; i++) {
        let char = mensagem[i];

        if (char == 'a') {
            Novamensagem += 'd';
        } else if (char == 'b') {
            Novamensagem += 'e';
        } else if (char == 'c') {
            Novamensagem += 'f';
        } else if (char == 'd') {
            Novamensagem += 'g';
        } else if (char == 'e') {
            Novamensagem += 'h';
        } else if (char == 'f') {
            Novamensagem += 'i';
        } else if (char == 'g') {
            Novamensagem += 'j';
        } else if (char == 'h') {
            Novamensagem += 'k';
        } else if (char == 'i') {
            Novamensagem += 'l';
        } else if (char == 'j') {
            Novamensagem += 'm';
        } else if (char == 'k') {
            Novamensagem += 'n';
        } else if (char == 'l') {
            Novamensagem += 'o';
        } else if (char == 'm') {
            Novamensagem += 'p';
        } else if (char == 'n') {
            Novamensagem += 'q';
        } else if (char == 'o') {
            Novamensagem += 'r';
        } else if (char == 'p') {
            Novamensagem += 's';
        } else if (char == 'q') {
            Novamensagem += 't';
        } else if (char == 'r') {
            Novamensagem += 'u';
        } else if (char == 's') {
            Novamensagem += 'v';
        } else if (char == 't') {
            Novamensagem += 'w';
        } else if (char == 'u') {
            Novamensagem += 'x';
        } else if (char == 'v') {
            Novamensagem += 'y';
        } else if (char == 'w') {
            Novamensagem += 'z';
        } else if (char == 'x') {
            Novamensagem += 'a';
        } else if (char == 'y') {
            Novamensagem += 'b';
        } else if (char == 'z') {
            Novamensagem += 'c';
        } else {
            Novamensagem += char; // Mantém o caractere original se não for uma letra minúscula
        }
    }

    document.getElementById('campoExibir').innerText = Novamensagem;
}

document.getElementById('criptografar').addEventListener('click', criptografar);