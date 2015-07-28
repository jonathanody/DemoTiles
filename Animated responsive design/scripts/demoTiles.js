(function () { 
    'use strict';
    
    var container = document.querySelector('#tileContainer');

    var iso = new Isotope(container, {
        itemSelector: '.isotope',
        layoutMode: 'masonry',
        masonry: {
            columnWidth: 1,
            isFitWidth: true,
            gutter: 0
        }
    });
}());