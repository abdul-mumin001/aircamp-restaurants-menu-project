import { footerHTML } from '../scriptInside-landingPage/footer.js'
document.getElementById('footerPart').innerHTML = footerHTML();

const sidebar=document.getElementById('sidebar');
const left=document.getElementById('left');


function myfunction(){
    sidebar.style.width="30rem";
    // left.style.color="0rem";
}

function closebtn(){
    sidebar.style.width="0rem";
    // left.style.height="4rem";
}


//  Bhupesh Script File's


const mobilepopUp = document.querySelector(".mobile-restuarent__filter--button");
mobilepopUp.addEventListener("click", () => {
    const mobilePopup = document.querySelector(".mobile__filter__popup");
    mobilePopup.classList.remove("open");
});

const cross = document.querySelector(".mobile__filter__popup--header > svg");
// console.log(cross);
cross.addEventListener("click", () => {
    const mobilePopup = document.querySelector(".mobile__filter__popup");
    mobilePopup.classList.add("open");

});

const changeTextContent = event => {

    span.textContent = "radio_button_checked";
    console.log("Helloo");
}

const radioSort = document.querySelectorAll(".filter__popup__content--item");

radioSort.forEach(element => {
    element.addEventListener("click", changeTextContent);
});

// Restaurant card Main Page

const parent = document.querySelector(".restaurant__container");

const makeRestaurantCard = (parent, restaurant) => {
    const restaurant__wrapper = document.createElement("div");
    restaurant__wrapper.className = "restaurant__wrapper";

    const restaurent__image = document.createElement("div");
    restaurent__image.className = "restaurent__image";
    let img_tag = document.createElement("img");
    img_tag.src = restaurant.imgSrc;
    img_tag.alt = "Restaurent Img";

    restaurent__image.appendChild(img_tag);

    // heading div for offer
    const offer_div = document.createElement("div");
    offer_div.className = "restaurent__offer--view";
    const offer_div_head = document.createElement("h4");
    offer_div_head.textContent = "50% OFF";
    offer_div.appendChild(offer_div_head);
    restaurent__image.appendChild(offer_div);


    restaurant__wrapper.appendChild(restaurent__image);

    // restaurent--name

    const restaurant__name = document.createElement("div");
    restaurant__name.className = "restaurant__name";

    const h3 = document.createElement("h3");
    h3.textContent = restaurant.name;
    let para__menu = document.createElement("p");
    para__menu.className = "restaurant__menu--items";
    para__menu.textContent = restaurant.varaities;

    // restaurant__wrapper.appendChild(restaurant__name);

    // restaurent--feature

    const restaurant__feature = document.createElement("div");
    restaurant__feature.className = "restaurant__feature";
    const restaurant__rating = document.createElement("div");
    restaurant__rating.className = "restaurant__rating";
    const span = document.createElement("i");
    span.className = "bx bxs-star";    // stat icon

    const para__rating = document.createElement("p");
    para__rating.textContent = "4.2";

    restaurant__rating.appendChild(span);
    restaurant__rating.appendChild(para__rating);
    restaurant__feature.appendChild(restaurant__rating);

    let circle_one = document.createElement("div");
    circle_one.className = "div__circle";
    restaurant__feature.appendChild(circle_one);

    const para__estTime = document.createElement("p");
    para__estTime.textContent = restaurant.estTime + " "+ restaurant.estTimeString;
    restaurant__feature.appendChild(para__estTime);
    let circle_two = document.createElement("div");
    circle_two.className = "div__circle";
    restaurant__feature.appendChild(circle_two);

    const para__offer = document.createElement("p");
    para__offer.textContent = restaurant.price +" "+ restaurant.priceString;
    restaurant__feature.appendChild(para__offer);

    restaurant__name.appendChild(h3);
    restaurant__name.appendChild(para__menu);
    restaurant__name.appendChild(restaurant__feature);

    restaurant__wrapper.appendChild(restaurant__name);

    // hr tag
    const hr = document.createElement("hr");
    restaurant__wrapper.appendChild(hr);

    // restaurant--discount

    const restaurant__discount = document.createElement("div");
    restaurant__discount.className = "restaurant__discount";

    const img_discount = document.createElement("i");
    img_discount.className = "bx bxs-offer";

    const para__discount = document.createElement("p");
    para__discount.textContent = restaurant.offer;

    restaurant__discount.appendChild(img_discount);
    restaurant__discount.appendChild(para__discount);

    restaurant__wrapper.appendChild(restaurant__discount);

    // quick- view

    const quick__view = document.createElement("div");
    quick__view.className = "quick__view";
    let bold = document.createElement("b");
    bold.textContent = "QUICK VIEW";

    const para__button = document.createElement("p");
    para__button.appendChild(bold);
    quick__view.appendChild(para__button);

    restaurant__wrapper.appendChild(quick__view);

    parent.appendChild(restaurant__wrapper);

}

// for(let i=0; i<30; i++) makeRestaurantCard(parent, restaurant);

fetch("https://63a7491a59fd83b1bb42ba9a.mockapi.io/api/v1/swiggy-product")
    .then(res => res.json())
    .then(data => {
        data.forEach(restaurant => {
            makeRestaurantCard(parent, restaurant);
        })
    })
    .catch(err => console.log(err))




// ---------
    document.querySelector(".restaurant__container").addEventListener("click", () => {
        window.location.href = "../individual-menu-page/ind-menu-page.html";
      });