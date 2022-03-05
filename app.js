const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const successBtn = $('.btn--success');
const errorBtn = $('.btn--error');

// du lieu
const toasts = [{
        title: 'success',
        message: 'Success',
        type: 'success',
        duration: 3000
    },
    {
        title: 'error',
        message: 'error',
        type: 'error',
        duration: 3000
    },
];
const icons = {
    success: "fas fa-check-circle",
    info: "fas fa-info-circle",
    warning: "fas fa-exclamation-circle",
    error: "fas fa-exclamation-circle"
};

// handle function
function showToast({ title = '', message = '', type = 'success', duration = 3000 }) {
    const main = $('#toast');
    console.log(main);
    if (main) {
        const delay = (duration / 1000).toFixed(2);
        const toast = document.createElement('div');

        // tu dong remove toast cu sau khi het thoi gian
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        // khi click vao dau x toast bien mat
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        // animation css
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        // taoj khoi 
        toast.classList.add('toast', `toast--${type}`);
        toast.innerHTML = `<div class="toast__icon">
            <i class="fa-solid ${icons[type]}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__body__title">${title}</h3>
                <p class="toast__body__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>`

        // them khoi con vao div cha   
        main.appendChild(toast);
    }

}

// khi click vao show success
successBtn.onclick = function() {
    showToast(toasts[0]);

}

// khi click vao show error
errorBtn.onclick = function() {
    const toast = toasts[1];
    showToast(toast);
}