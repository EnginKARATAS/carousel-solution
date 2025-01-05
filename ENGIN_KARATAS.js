(() => {
  const init = () => {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-latest.min.js";
    script.type = "text/javascript";
    document.head.appendChild(script);

    script.onload = () => {
      if ($(".product-detail").length) {
        buildHTML();
        buildCSS();
        setEvents();
        obtainData().then((data) => {
          appendCarousel(data);
        });
      } else {
        console.log(
          "The script designed for www.lcw.com product detail(single product) page only"
        );
      }
    };
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
        font-size: var(--carousel-title-size);
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

      .product-card {
        position: relative;
        min-width: calc(100% / 6 - 33px);
        display: flex;
        flex-direction: column;
        background-color: var(--carousel-white);
        box-shadow: var(--card-shadow);
      }

      .product-card__heart {
        right: var(--card-heart-x);
        top: var(--card-heart-y);
        border: 1px solid gray;
        background: #ffffff;
        border-radius: 5px;
        width: 28px;
        height: 28px;
        position: absolute;
        z-index: 6;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .product-card__image-wrapper {
        z-index: 0;
      }

      .product-card__image {
        width: 100%;
        overflow-clip-margin: content-box;
        overflow: clip;
      }

      .product-card__content {
        display: flex;
        height: 118px;
        padding: 10px;
        flex-direction: column;
        justify-content: space-between;
      }

      .product-card__title {
        font-size: var(--card-title-size);
        line-height: 1.2;
        height: 2.4em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        margin: 0;
      }

      .product-card__price {
        color: #193db0;
        font-weight: bold;
        font-size: var(--card-price-size);
        padding-bottom: 34px;
        margin-top: auto;
      }

      a,
      a:link,
      a:visited,
      a:hover,
      a:active {
        text-decoration: none;
      }

      /* media */
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
          min-width: calc(100% / 3 + 33px);
        }
      }

      @media (max-width: 550px) {
        .product-carousel__items {
          width: 94vw;
        }
        .product-card {
          min-width: calc(100% / 2);
        }
      }

    `;

    $("<style>").addClass("carousel-style").html(css).appendTo("head");
  };

  class LocalStorageManager {
    constructor() {
      this.storageKey = "cards";
    }

    save(data) {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
        return true;
      } catch (error) {
        console.error("Error saving to localStorage:", error);
        return false;
      }
    }

    get() {
      try {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
      } catch (error) {
        console.error("Error reading from localStorage:", error);
        return [];
      }
    }

    toggleHeart(cardId) {
      try {
        const cards = this.get();
        const card = cards.find((card) => card.id === Number(cardId));

        if (card) {
          card.isHeartFilled = !card.isHeartFilled;
          this.save(cards);
          return card.isHeartFilled;
        }
        return null;
      } catch (error) {
        console.error("Error toggling heart:", error);
        return null;
      }
    }
  }
  const ls = new LocalStorageManager();

  function appendCarousel(obtainedData) {
    let appendSource = obtainedData.data;
    ls.save(
      appendSource.map((item) => {
        //store heart data to ls
        return { ...item, isHeartFilled: false };
      })
    );
    //prevent multi execute script carousel length > 10
    const $carousel = $(".product-carousel__items").last();
    if ($carousel.find(".product-card").length) return;

    let cards = "";
    appendSource.forEach((element) => {
      let card = `       
    <div class="product-card">
        <div class="product-card__heart" data-id="${element.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="20.576" height="15" viewBox="0 0 20.576 19.483">
                <path fill="${
                  element.isHeartFilled === true ? "#193db0" : "none"
                }" stroke="#000" stroke-width="1.5px"
                    d="M19.032 7.111c-.278-3.063-2.446-5.285-5.159-5.285a5.128 5.128 0 0 0-4.394 2.532 4.942 4.942 0 0 0-4.288-2.532C2.478 1.826.31 4.048.032 7.111a5.449 5.449 0 0 0 .162 2.008 8.614 8.614 0 0 0 2.639 4.4l6.642 6.031 6.755-6.027a8.615 8.615 0 0 0 2.639-4.4 5.461 5.461 0 0 0 .163-2.012z"
                    transform="translate(.756 -1.076)"></path>
            </svg>
        </div>
        <a href="${element.url}" target="_blank">
            <div class="product-card__image-wrapper">
                <img class="product-card__image" src="${element.img}" alt="" />
            </div>
        </a>
        <a href="${element.url}" target="_blank">
            <div class="product-card__content">
                <div class="product-card__title">${element.name.substring(
                  0,
                  50
                )}...</div>
        </a>

                <div class="product-card__price">${element.price} TL</div>
            </div>
    </div>
                `;
      cards += card;
    });

    //append cards
    $carousel.append(cards);
  }

  async function obtainData() {
    return new Promise((resolve, reject) => {
      //obtain source: local
      const localStorageCards = ls.get();
      if (localStorageCards.length > 0) {
        appendCarousel({ data: localStorageCards });
        //resolve({ data: localStorageCards });//resolve for service needs
      }
      //obtain source: fetch API
      else {
        try {
          fetch(
            "https://gist.githubusercontent.com/sevindi/5765c5812bbc8238a38b3cf52f233651/raw/56261d81af8561bf0a7cf692fe572f9e1e91f372/products.json"
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error(`error status: ${response.status}`);
              }
              return response.json();
            })
            .then((fetchedCards) => {
              appendCarousel({ data: fetchedCards });
              //resolve({ data: fetchedCards }); //for service needs
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
              reject(error);
            });
        } catch (error) {
          console.log(error);
          reject(error);
        }
      }
    });
  }

  const setEvents = () => {
    let isDragStart = false;
    let isDragging = false;
    let prevPageX,
      prevScrollLeft = 0;
    let prevTouchX;
    const $carousel = $(".product-carousel__items");
    const $arrowLeft = $(".product-carousel__arrow--left");
    const $arrowRight = $(".product-carousel__arrow--right");

    function handleClick(e) {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    function handleMouseDown(e) {
      e.preventDefault();
      isDragStart = true;
      isDragging = false;
      prevPageX = e.pageX;
      prevScrollLeft = $carousel.scrollLeft();
    }

    function handleMouseMove(e) {
      if (!isDragStart) return;

      isDragging = true;
      let positionDiff = e.pageX - prevPageX;
      $carousel.scrollLeft(prevScrollLeft - positionDiff);
    }

    function handleMouseUp(e) {
      isDragStart = false;

      setTimeout(() => {
        isDragging = false;
      }, 50);
    }

    function handleArrowClick(e) {
      const arrow1 = e.currentTarget.getAttribute("data");
      const cardWidth = $carousel.find(".product-card").outerWidth(true) + 14;
      const scrollAmount = arrow1 && arrow1 === "left" ? -cardWidth : cardWidth;
      $carousel.animate({
        scrollLeft: $carousel.scrollLeft() + scrollAmount,
      });
    }

    function handleHeartClick(e) {
      const $path = $(this).find("path");
      const currCardId = e.currentTarget.getAttribute("data-id");
      if ($path.attr("fill") === "none") {
        $path.attr("fill", "#193db0");
        ls.toggleHeart(currCardId);
      } else {
        $path.attr("fill", "none");
        ls.toggleHeart(currCardId);
      }
    }

    function handleTouchStart(e) {
      isDragStart = true;
      isDragging = false;
      prevTouchX = e.originalEvent.touches[0].pageX;
      prevScrollLeft = $carousel.scrollLeft();
    }

    function handleTouchMove(e) {
      if (!isDragStart) return;

      e.preventDefault();

      isDragging = true;
      let positionDiff = e.originalEvent.touches[0].pageX - prevTouchX;
      $carousel.scrollLeft(prevScrollLeft - positionDiff);
    }

    function handleTouchEnd() {
      isDragStart = false;
      setTimeout(() => {
        isDragging = false;
      }, 50);
    }

    $arrowLeft.on("click", handleArrowClick);
    $arrowRight.on("click", handleArrowClick);

    $carousel
      .on("mousedown", handleMouseDown)
      .on("mousemove", handleMouseMove)
      .on("mouseup", handleMouseUp)
      .on("mouseleave", handleMouseUp)
      .on("click", handleClick)
      .on("click", ".product-card__heart", handleHeartClick)
      .on("touchstart", handleTouchStart)
      .on("touchmove", handleTouchMove)
      .on("touchend", handleTouchEnd);
  };

  init();
})();
