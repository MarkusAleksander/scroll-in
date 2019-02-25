var fadeInModule = (function fadeIn() {
    var data = {
        itemSelector: '.js-fade-in',
        inViewClass: 'js-fade-in-view',
        items: null,
        wHeight: window.innerHeight,
        offset: 50
    }

    function update() {
        data.items.forEach(function processFadeInItem(el) {
            if (data.wHeight - data.offset > el.getBoundingClientRect().top) {
                el.classList.add(data.inViewClass);
            } else {
                el.classList.remove(data.inViewClass);
            }
        });
    }
    function handleResize() {
        data.wHeight = window.innerHeight;
        update();
    }
    function run() {
        data.items = document.querySelectorAll(data.itemSelector);
        if (data.items !== null) {
            update();
        }
    }
    return {
        init: run,
        run: update,
        handleResize: handleResize
    }
})();

fadeInModule.init();
$(window).on('scroll', fadeInModule.run);
$(window).on('resize', fadeInModule.handleResize);
$(window).on('orientationchange', fadeInModule.handleResize);