document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    const footerContent = document.querySelector('footer');
    const accessControlUI = document.getElementById('access-control');
    
    const notifyOwnerButton = document.getElementById('notify-owner-button');
    const notificationMessage = document.getElementById('notification-message');

    if (!mainContent || !footerContent || !accessControlUI || !notifyOwnerButton || !notificationMessage) {
        console.error('Essential HTML elements for access control are missing. Halting script.');
        let errorContainer = accessControlUI || document.body;
        if (errorContainer) {
            errorContainer.innerHTML = '<p style="color:red; text-align:center; padding: 20px;">Erro de configuração da página. Elementos essenciais não encontrados. Contate o administrador.</p>';
            if (accessControlUI) accessControlUI.classList.remove('hidden');
        }
        return;
    }

    function showContent() {
        mainContent.classList.remove('hidden');
        footerContent.classList.remove('hidden');
        accessControlUI.classList.add('hidden');
    }

    function showAccessControl() {
        mainContent.classList.add('hidden');
        footerContent.classList.add('hidden');
        accessControlUI.classList.remove('hidden');
    }

    if (localStorage.getItem('siteAccessGrantedByOwner') === 'true') {
        showContent();
    } else {
        showAccessControl();
    }

    notifyOwnerButton.addEventListener('click', () => {
        notificationMessage.textContent = 'O proprietário (cmspnunca0@gmail.com) foi notificado. Por favor, aguarde a liberação do acesso.';
        notificationMessage.classList.remove('hidden');
        notifyOwnerButton.disabled = true;
        notifyOwnerButton.textContent = 'Notificação Enviada';
        console.log('Simulated notification to owner (cmspnunca0@gmail.com).');
    });
});