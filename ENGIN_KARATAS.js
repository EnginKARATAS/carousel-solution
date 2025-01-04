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
    const css = 
    `
            :root {
                --carousel-gap: 18px;
                --carousel-container-bg: #faf9f7;
                --carousel-title-size: 30px;
                --card-title-size: 14px;
                --card-price-size: 18px;
                --card-heart-x: 11px;
                --card-heart-y: 9px;
            }

            .product-carousel {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            background-color: var(--carousel-bg);
            margin-top: 15px;
            font-family: "Open Sans", sans-serif;
            }

            .product-carousel__wrapper {
            display: flex;
            justify-content: center;
            }

            .product-carousel__container {
            width: 80%;
            display: flex;
            position: relative;
            flex-direction: column;
            box-sizing: border-box;
            justify-content: space-between;
            align-items: baseline;
            }

            .product-carousel__items {
            display: flex;
            column-gap: 18px;
            padding-bottom: 32px;
            margin-left: 15px;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            }

            .product-carousel__items * {
            box-sizing: border-box;
            text-decoration: none;
            color: inherit;
            font-family: "Open Sans", sans-serif !important;
            padding: 0;
            }

            .product-carousel__title {
            font-size: var(--container-title);
            color: #29323b;
            line-height: 33px;
            font-weight: lighter;
            padding: 15px 0;
            margin: 0;
            }

            .product-carousel__arrow {
            position: absolute;
            z-index: 5;
            top: 50%;
            margin: 0 15px;
            width: 24px;
            height: 24px;
            cursor: pointer;
            }

            .product-carousel__arrow--left {
            left: -35px;
            }

            .product-carousel__arrow--right {
            right: -52px;
            }

            @media (max-width: 992px) {
            .product-carousel__title {
            color: #29323b;
            font-size: 24px;
            line-height: 33px;
            }

            .product-carousel {
            margin: 0;
            padding: 0;
            }

            .product-carousel__wrapper {
            margin-left: 30px;
            width: 100%;
            padding: 0;
            }

            .product-carousel__container {
            width: 100%;
            padding: 0;
            margin: 0;
            }

            .product-carousel__items {
            width: 95vw;
            margin: 0;
            padding: 0;
            }

            .product-carousel__arrow {
            display: none;
            }

            .product-card {
            min-width: calc(100% /3 + 33px);
            }
            }

            @media (max-width: 550px) {
            .product-carousel__items {
            width: 94vw;
            }
            .product-card {
            min-width: calc(100% / 2);
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
