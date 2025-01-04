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
        <div class="product-carousel">
            <div class="product-carousel__wrapper">
                <div class="product-carousel__container">
                    <p class="product-carousel__title">You Might Also Like</p>
                    <svg class="product-carousel__arrow product-carousel__arrow--left" data="left"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.242 24.242">
                        <path fill="none" stroke="#333" stroke-linecap="round" stroke-width="3px"
                            d="M2106.842 2395.467l-10 10 10 10" transform="translate(-2094.721 -2393.346)"></path>
                    </svg>
                    <div class="product-carousel__items" />
                    <svg class="product-carousel__arrow product-carousel__arrow--right" data="right"
                        style="transform: rotate(180deg);" xmlns="http://www.w3.org/2000/svg" width="14.242" height="15"
                        viewBox="0 0 14.242 24.242">
                        <path fill="none" stroke="#333" stroke-linecap="round" stroke-width="3px"
                            d="M2106.842 2395.467l-10 10 10 10" transform="translate(-2094.721 -2393.346)"></path>
                    </svg>
                </div>
            </div>
        </div>
        `;

    $(".product-detail").append(html);
  };

  const buildCSS = () => {
    const css = `
            .container {
                background-color: red;
                height: 100px;
                width: 100px;
            }
        `;

    $("<style>").addClass("carousel-style").html(css).appendTo("head");
  };

  const setEvents = () => {
    $("").on("click", () => {
      console.log("clicked");
    });
  };

  init();
})();
