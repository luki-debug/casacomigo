const btnCancel = document.querySelector('#btnCancel');
const boxBtnCancel = document.querySelector('#boxBtnCancel')
let mouse = null;

window.addEventListener('mousemove', function(e) {
    mouse = {
        page: {
            x: e.pageX,
            y: e.pageY
        },
        client: {
            x: e.clientX,
            y: e.clientY
        }
    };
});

boxBtnCancel.addEventListener('mouseenter', function() {
    const widthScreen = window.innerWidth - 100;
    const heightScreen = window.innerHeight -100; 

    const top = Math.floor(Math.random() * (heightScreen  - 100 + 1)) + 100;
    const left = Math.floor(Math.random() * (widthScreen - 100 + 1)) + 100;

    this.style = `position: absolute; top: ${top}px; left: ${left}px`
});