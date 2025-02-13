# A Carousel Study: Jquery, JS, HTML, CSS

![image](https://github.com/user-attachments/assets/4b8c898f-5995-40a9-b456-e276269c97b2)

## User Story
- [x]  Build a product carousel on [https://www.lcwaikiki.com](https://www.lcwaikiki.com/) similar to the one visible on the website’s product page.
- [x]  To achieve this, you need to retrieve the product list using a GET request from the following URL: https://gist.githubusercontent.com/sevindi/5765c5812bbc8238a38b3cf52f233651/raw/56261d81af8561bf0a7cf692fe572f9e1e91f372/products.json
- [x]  The code should only run on the product pages and must be appended after the element with ".product-detail" class within the product page's structure.
- [x]  The carousel should include a title with the text "You Might Also Like".
- [x]  Users should be able to view six and a half products, and by clicking the arrow buttons, the carousel should smoothly slide one product to the right or left according to the direction of the arrow.
- [x]  When a user clicks on a product, the respective product page should open in a new tab. Clicking on the heart icon should fill it with a blue color, and this preference should be stored in the local storage.
- [x]  Upon running the code for the second time after refreshing the page, it should retrieve the product list from the local storage instead of making another fetch request.
- [x]  Additionally, the code should ensure that the favorited products with filled hearts are displayed.
- [x]  The design must be responsive and suitable for all platforms, including mobile, tablet, and desktop. Viewable product amount might vary according to the resolution.

## Development Higlights

*  All items in the case have been resolved.
*  Added necessary conditions in case of adding additional carousels. For example the card size does not change when multiple carousels are added. Or New carousel does not triggering local storage hearts to unfilled.
*  The carousel only accessible on product detail page, else the program throwing a warning.
*  The carousel design was created from scratch.
*  The carousel design was aimed to be pixel-perfect with minimal error margin, similar to other areas on the LCW site.
*  Since pixel-perfect was not the primary request and the story did not include additional information about similarity to other blocks, the best possible design was targeted.
*  As an improvement, the left and right arrow buttons disappearing in mobile view, and text overflow and line break properties are protected.
*  The code was developed using functional and object-oriented programming principles to maintain clean code. However, abstractions and type definitions were kept to a minimum to avoid over-engineering.
*  The arrow and heart features are fully functional.
