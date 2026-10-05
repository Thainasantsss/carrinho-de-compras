let carrinho = [];


// ADICIONAR PRODUTO
function adicionarCarrinho(nome, preco, imagem) {

    carrinho.push({
        nome: nome,
        preco: preco,
        imagem: imagem
    });

    atualizarCarrinho();

    alert(nome + " foi adicionado ao carrinho!");
}


// ATUALIZAR CARRINHO
function atualizarCarrinho() {

    const itens = document.getElementById("itensCarrinho");

    const total = document.getElementById("totalCarrinho");

    itens.innerHTML = "";

    let valorTotal = 0;


    if (carrinho.length === 0) {

        itens.innerHTML = `
            <p class="carrinho-vazio">
                Seu carrinho está vazio.
            </p>
        `;

        total.textContent = "R$ 0,00";

        return;
    }


    carrinho.forEach(function(produto, index) {

        valorTotal += produto.preco;

        itens.innerHTML += `
            <div class="item-carrinho">

                <img src="${produto.imagem}" alt="${produto.nome}">

                <div>
                    <h3>${produto.nome}</h3>

                    <strong>
                        R$ ${produto.preco.toFixed(2).replace(".", ",")}
                    </strong>

                    <button onclick="removerProduto(${index})">
                        Remover
                    </button>
                </div>

            </div>
        `;
    });


    total.textContent =
        "R$ " + valorTotal.toFixed(2).replace(".", ",");
}


// REMOVER PRODUTO
function removerProduto(index) {

    carrinho.splice(index, 1);

    atualizarCarrinho();
}


// ABRIR CARRINHO
document.getElementById("botaoCarrinho").addEventListener("click", function() {

    document.getElementById("carrinho").classList.add("aberto");

    document.getElementById("fundoCarrinho").classList.add("ativo");

});


// FECHAR CARRINHO
document.getElementById("fecharCarrinho").addEventListener("click", function() {

    document.getElementById("carrinho").classList.remove("aberto");

    document.getElementById("fundoCarrinho").classList.remove("ativo");

});


// FECHAR CLICANDO NO FUNDO
document.getElementById("fundoCarrinho").addEventListener("click", function() {

    document.getElementById("carrinho").classList.remove("aberto");

    document.getElementById("fundoCarrinho").classList.remove("ativo");

});