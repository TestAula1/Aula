// JavaScript para impedir rolagem
document.addEventListener('DOMContentLoaded', function () {
    // Impedir rolagem
    document.body.style.overflow = 'hidden';

    // Adicione essa parte se você quiser reativar a rolagem após um determinado tempo (por exemplo, 3 segundos)
    setTimeout(function () {
        document.body.style.overflow = 'auto';
    }, 3000);
});
