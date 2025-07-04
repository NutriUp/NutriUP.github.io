document.addEventListener('DOMContentLoaded', () => {
    const botoesComprar = document.querySelectorAll('.btn-comprar');
    const numeroWhatsApp = '5551993010050'; // <-- COLOQUE SEU NÚMERO AQUI

    botoesComprar.forEach(botao => {
        botao.addEventListener('click', () => {
            const nomeProduto = botao.getAttribute('data-produto');
            const precoProduto = botao.getAttribute('data-preco');
            const mensagem = `Olá, NUTRI UP! Tenho interesse no produto: *${nomeProduto}* - Preço: *R$ ${precoProduto}*. Gostaria de finalizar a compra.`;
            const mensagemCodificada = encodeURIComponent(mensagem);
            const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemCodificada}`;
            window.open(linkWhatsApp, '_blank');
        });
    });
});