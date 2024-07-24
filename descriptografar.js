let descriptografar = () => {
    let mensagem = document.getElementById('campoExibir').innerText;
    let Novamensagem = '';

    for (let i = 0; i < mensagem.length; i++) {
        let char = mensagem[i];

        if (char == 'd') {
            Novamensagem += 'a';
        } else if (char == 'e') {
            Novamensagem += 'b';
        } else if (char == 'f') {
            Novamensagem += 'c';
        } else if (char == 'g') {
            Novamensagem += 'd';
        } else if (char == 'h') {
            Novamensagem += 'e';
        } else if (char == 'i') {
            Novamensagem += 'f';
        } else if (char == 'j') {
            Novamensagem += 'g';
        } else if (char == 'k') {
            Novamensagem += 'h';
        } else if (char == 'l') {
            Novamensagem += 'i';
        } else if (char == 'm') {
            Novamensagem += 'j';
        } else if (char == 'n') {
            Novamensagem += 'k';
        } else if (char == 'o') {
            Novamensagem += 'l';
        } else if (char == 'p') {
            Novamensagem += 'm';
        } else if (char == 'q') {
            Novamensagem += 'n';
        } else if (char == 'r') {
            Novamensagem += 'o';
        } else if (char == 's') {
            Novamensagem += 'p';
        } else if (char == 't') {
            Novamensagem += 'q';
        } else if (char == 'u') {
            Novamensagem += 'r';
        } else if (char == 'v') {
            Novamensagem += 's';
        } else if (char == 'w') {
            Novamensagem += 't';
        } else if (char == 'x') {
            Novamensagem += 'u';
        } else if (char == 'y') {
            Novamensagem += 'v';
        } else if (char == 'z') {
            Novamensagem += 'w';
        } else if (char == 'a') {
            Novamensagem += 'x';
        } else if (char == 'b') {
            Novamensagem += 'y';
        } else if (char == 'c') {
            Novamensagem += 'z';
        } else {
            Novamensagem += char; // Mantém o caractere original se não for uma letra minúscula
        }
    }

    document.getElementById('campoExibir').innerText = Novamensagem;
}

document.getElementById('descriptografar').addEventListener('click', descriptografar);
