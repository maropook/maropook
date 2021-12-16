window.onload = () => {
    setupPopup();
}

const setupPopup = () => {
    for (const popup of document.getElementsByClassName('popup')) {
        // popup.classList.add('is-show');

        const openButtonID = popup.getAttribute('button-id');
        if (openButtonID) {
            const openButton = document.getElementById(openButtonID);
            if (openButton) {
                openButton.classList.add('popup-open');
                openButton.addEventListener('click', () => {
                    popup.classList.add('is-show');
                });
            }
        }

        for (const background of popup.getElementsByClassName('popup-bg')) {
            background.addEventListener('click', () => {
                popup.classList.remove('is-show');
            });
        }

        for (const closeButton of popup.getElementsByClassName('popup-close-btn')) {
            closeButton.addEventListener('click', () => {
                popup.classList.remove('is-show');
            });
        }
    }
}
