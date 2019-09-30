document.addEventListener("DOMContentLoaded", () => {

    let params = new URLSearchParams(document.location.search);
    const destinationId = parseInt(params.get("product_category"));
    let mainElement = document.querySelector(".main__shop");
    
    const productsJson = fetch('./assets/json/slideshowprodukt.json')
        .then(function (response) {
            return response.json();
            
        })
        .then(function (resultat) {
            resultat.produkter.forEach(produkt => {
                let brands = document.querySelector(".shopby__subtitle2");
                document.querySelector(".items__totalItems").textContent = resultat.produkter.length;
                if (produkt.available == "no") {
                    mainElement.innerHTML += `
                    <article class="shop__products">
                    <a href="produkt.html?destination_id=${produkt.id}" class="card__info-link">
                        <figure class="products__figure">
                            <img class="figure__img" src="${produkt.image}">
                        </figure>
                    </a>
                    <h4 class="products__title">${produkt.title}</h4>
                    <p class="products__subtitle">£${produkt.price}</p>
                    
                    </article>`;

                } else if (produkt.sale == "yes") {
                    mainElement.innerHTML += `
                    <article class="shop__products">
                    <a href="produkt.html?destination_id=${produkt.id}" class="card__info-link">
                        <figure class="products__figure">
                            <img class="figure__img" src="${produkt.image}">
                        </figure>
                    </a>
                    <h4 class="products__title">${produkt.title}</h4>
                    <p class="products__subtitle"> <span class="products__oldsubtitle">£${produkt.oldprice} </span> £${produkt.price} </p>
                    <button class="products__button">ADD TO CART</button>
                    </article>`;

                }   else {
                    mainElement.innerHTML += `
                    <article class="shop__products">
                    <a href="produkt.html?destination_id=${produkt.id}" class="card__info-link">
                        <figure class="products__figure">
                            <img class="figure__img" src="${produkt.image}">
                        </figure>
                    </a>
                    <h4 class="products__title">${produkt.title}</h4>
                    <p class="products__subtitle">£${produkt.price}</p>
                    <button class="products__button">ADD TO CART</button>
                    </article>`;
                    }
            });
        });
});