function log(...args) {
    console.log('%c[t3.chat-utils]', `
font-weight: bold;
color: cyan;
`, ...args);
}

const originalAddEventListener = document.addEventListener;

document.addEventListener = function (type, listener, ...options) {
    if (type === 'copy') {
        log('Blocked a "copy" event listener from being added.');
        return;
    }

    originalAddEventListener.call(this, type, listener, ...options);
};

document.test = originalAddEventListener;
log('Hooked document.addEventListener');
