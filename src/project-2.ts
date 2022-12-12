(function () {

    const refs = {
        modalEl: document.querySelector('.modal')!,
        overlayEl: document.querySelector('.overlay')!,
        btnCloseModalEl: document.querySelector('.close-modal'),
        btnOpenModal: document.querySelectorAll('.show-modal')
    }
    const closeModal = () => {
        refs.modalEl.classList.add('hidden');
        refs.overlayEl.classList.add('hidden');
    }
    const openModal = () => {
        refs.modalEl.classList.remove('hidden');
        refs.overlayEl.classList.remove('hidden');
    }


    for (let i = 0; i < refs.btnOpenModal.length; i++) {
        refs.btnOpenModal[i].addEventListener('click', openModal)
    }

    if (refs.btnCloseModalEl !== null) {
        refs.btnCloseModalEl.addEventListener('click', closeModal)
    }

    refs.overlayEl.addEventListener('click', closeModal)

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!refs.modalEl.classList.contains('hidden')) {
                closeModal();
            }
            
        }
    })

})();