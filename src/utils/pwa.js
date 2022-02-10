const isPWA = () => (
    window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true
);

export { isPWA };