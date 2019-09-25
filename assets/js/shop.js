document.addEventListener("DOMContentLoaded", () => {

    let mainElement = document.querySelector(".main__shop");

    const productsJson = fetch('./assets/json/slideshowprodukt.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (resultat) {
            resultat.produkter.forEach(produkt => {
                if (produkt.available == "no") {
                    mainElement.innerHTML += `
                    <article class="shop__products">
                    <figure class="products__figure">
                        <img class="figure__img" src="${produkt.image}">
                    </figure>
                    <h4 class="products__title">${produkt.title}</h4>
                    <p class="products__subtitle">£${produkt.price}</p>
                    </article>`;

                } else if (produkt.sale == "yes") {
                    mainElement.innerHTML += `
                    <article class="shop__products">
                    <figure class="products__figure">
                        <img class="figure__img" src="${produkt.image}">
                    </figure>
                    <h4 class="products__title">${produkt.title}</h4>
                    <p class="products__subtitle"> <span class="products__oldsubtitle">£${produkt.oldprice} </span> £${produkt.price} </p>
                    <button class="products__button">ADD TO CART</button>
                    </article>`;

                }   else {
                    mainElement.innerHTML += `
                    <article class="shop__products">
                    <figure class="products__figure">
                        <img class="figure__img" src="${produkt.image}">
                    </figure>
                    <h4 class="products__title">${produkt.title}</h4>
                    <p class="products__subtitle">£${produkt.price}</p>
                    <button class="products__button">ADD TO CART</button>
                    </article>`;
                    }

            });
        });
});