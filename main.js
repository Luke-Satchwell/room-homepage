const slides = [
  {
    img: "image-hero-1",
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    img: "image-hero-2",
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    img: "image-hero-3",
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

// get elements to be updated
const slideBg = document.querySelector(".slide-img");
const slideTitle = document.querySelector(".slide-title");
const slideDesc = document.querySelector(".slide-desc");

// get prev and next btns
const previous = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");

// create variable to store base content to be displayed  list position 0
let baseIndex = 0;

// this function updates content for the hero section of the site on each items list position
function updateContent() {
  if (window.innerWidth > 425) {
    slideBg.style.backgroundImage = `url("./images/desktop-${slides[baseIndex].img}.jpg")`;
  } else {
    slideBg.style.backgroundImage = `url("./images/mobile-${slides[baseIndex].img}.jpg")`;
  }
  slideTitle.innerHTML = slides[baseIndex].title;
  slideDesc.innerHTML = slides[baseIndex].desc;
}

updateContent();

window.addEventListener("resize", updateContent);

//listen for click event on slide buttons
previous.addEventListener("click", function () {
  baseIndex--;
  if (baseIndex < 0) {
    baseIndex = slides.length - 1;
  }
  updateContent();
});
next.addEventListener("click", function () {
  baseIndex++;
  if (baseIndex >= slides.length) {
    baseIndex = 0;
  }
  updateContent();
});
