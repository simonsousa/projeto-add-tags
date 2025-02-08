let btnGerar = document.querySelector('#btn-paragrafo'); // seleciona o botao

let res = document.querySelector('.container-res'); // seleciona a caixa onde aparece o resultado

let btnRemocao = document.querySelector('#btn-remocao'); // seleciona o botao de remoção

btnGerar.addEventListener("click", () => {
    const novaTag = document.createElement("p");
    novaTag.textContent = 'Nova Tag';
    res.appendChild(novaTag);
})

btnRemocao.addEventListener("click", () => {
    if (res.firstChild) {
        res.removeChild(res.firstChild);
    }
})
