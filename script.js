function checkAccess() {
    const correctKey = "2820";
    const enteredKey = prompt("Por favor, insira a chave de acesso para continuar:");

    const mainContent = document.querySelector('main');
    const footerContent = document.querySelector('footer');
    let accessDeniedMessage = document.getElementById('access-denied');

    if (enteredKey === correctKey) {
        if (mainContent) mainContent.classList.remove('hidden');
        if (footerContent) footerContent.classList.remove('hidden');
        if (accessDeniedMessage) accessDeniedMessage.remove();
    } else {
        if (mainContent) mainContent.classList.add('hidden');
        if (footerContent) footerContent.classList.add('hidden');

        if (!accessDeniedMessage) {
            accessDeniedMessage = document.createElement('div');
            accessDeniedMessage.id = 'access-denied';
            accessDeniedMessage.textContent = "Chave de acesso incorreta. Você não tem permissão para visualizar este conteúdo.";
            document.body.insertBefore(accessDeniedMessage, document.body.firstChild); // Insert before main/footer
        }
        // Optionally, you could hide the header too, or other elements.
        // For now, just hiding main and footer as per typical content protection.
        // alert("Chave de acesso incorreta!");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    const footerContent = document.querySelector('footer');

    if (mainContent) mainContent.classList.add('hidden');
    if (footerContent) footerContent.classList.add('hidden');

    checkAccess();
});