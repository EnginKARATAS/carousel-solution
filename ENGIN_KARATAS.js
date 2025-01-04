(() => {
    const init = () => {
        var script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-latest.min.js";
        script.type = "text/javascript";
        document.head.appendChild(script);
        
        buildHTML();
        buildCSS();
        setEvents();
    };

    const buildHTML = () => {
        const html = `
            <div class="container">
                <h1></h1>
            </div>
        `;

        $('.product-detail').append(html);
    };

    const buildCSS = () => {
        const css = `
            .container {
                background-color: red;
                height: 100px;
                width: 100px;
            }
        `;

        $('<style>').addClass('carousel-style').html(css).appendTo('head');
    };

    const setEvents = () => {
        $('').on('click', () => {
            console.log('clicked');
        });
    };

    init();
})();