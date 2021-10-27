// Mobile hamburger menu icon js
var burger = document.querySelector(".burger__menu");
var menu = document.querySelector(".mobile__menu");
var navBar = document.querySelector("header");
let menuOn = false;
burger.addEventListener("click", () => {
  if (menuOn == false) {
    burger.classList.add("open");
    menu.classList.add("open");
    navBar.style.backgroundColor = "white";
    document.querySelector("body").style.overflow = "hidden";
    menuOn = true;
  } else {
    burger.classList.remove("open");
    menu.classList.remove("open");
    navBar.style.backgroundColor = "rgba(255, 255, 255, 0.787)";
    document.querySelector("body").style = "";
    menuOn = false;
  }
});
//------------- Sticky Header -------------//
window.addEventListener("scroll", () => {
  if (scrollY >= 100) {
    navBar.style.background = "white";
    navBar.style.boxShadow = "0px 2px 2px #00000012";
  } else {
    navBar.style.background = "rgba(255, 255, 255, 0.787)";
    navBar.style.boxShadow = "";
  }
});

//------------- Image Slider -------------//
const sliderContainer = document.querySelector(
  ".image_slider .slide_container"
);
const imgBox = document.querySelectorAll(".image_slider .img_box");
const imgBoxActive = document.querySelector(".image_slider .img_box.active");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let windowWidth = window.innerWidth;

window.addEventListener("resize", function (event) {
  if (document.body.clientWidth < 1500 && document.body.clientWidth > 600) {
    imgWidth = document.body.clientWidth / 4 + 245;
    activeImgWidth = document.body.clientWidth / 4 + 410;
    imgBox.forEach((e) => {
      e.style.minWidth = imgWidth + "px";
    });
    imgBoxActive.style.minWidth = activeImgWidth + "px";
  }
});
if (window.innerWidth > 600) {
  imgWidth = document.body.clientWidth / 4 + 245;
  activeImgWidth = document.body.clientWidth / 4 + 410;
  imgBox.forEach((e) => {
    e.style.minWidth = imgWidth + "px";
  });
  imgBoxActive.style.minWidth = activeImgWidth + "px";
}

// OOP SLIDERS
class imgSlider {
  // Constractor
  constructor(parentClass) {
    this.next = document.querySelector(parentClass + " .right");
    this.prev = document.querySelector(parentClass + " .left");
    this.slides = document.querySelector(parentClass + " .villa_image_slider");
    this.slide = document.querySelectorAll(
      parentClass + " .villa_image_slider img"
    );
    this.dots = document.querySelectorAll(parentClass + " .dot");
    this.index = 1;
    this.crouselTime = 1000;

    this.firstClone = this.slide[0].cloneNode(true);
    this.lastClone = this.slide[this.slide.length - 1].cloneNode(true);
    this.firstClone.id = "first-clone";
    this.lastClone.id = "last-clone";
    this.slides.append(this.firstClone);
    this.slides.prepend(this.lastClone);
    this.sliderWidth = this.slide[this.index].clientWidth;
    this.slides.style.transform = `translateX(${
      -this.sliderWidth * this.index
    }px)`;
    this.getCurrentSlides = document.querySelectorAll(
      parentClass + " .villa_image_slider img"
    );
  }

  // ------------ Methods ----------//
  letsSlide() {
    this.resetDots = () => {
      this.dots.forEach((e) => {
        e.classList.remove("active");
      });
    };
    this.slideToRight = () => {
      if (this.index >= this.slides.length - 1) return;
      this.index++;
      this.slides.style.transform = `translateX(${
        -this.sliderWidth * this.index
      }px)`;
      this.slides.style.transition = "all .5s ease-in";
      if (this.getCurrentSlides[this.index].id === "first-clone") {
        this.slides.style.transition = "none";
        this.index = 1;
        this.slides.style.transform = `translateX(${
          -this.sliderWidth * this.index
        }px)`;
      }
      this.resetDots();
      this.dots[this.index - 1].classList.add("active");
    };
    this.slideToLeft = () => {
      this.index--;
      this.slides.style.transform = `translateX(${
        -this.sliderWidth * this.index
      }px)`;
      this.slides.style.transition = "all .5s ease-in-out";
      if (this.getCurrentSlides[this.index].id === "last-clone") {
        this.slides.style.transition = "none";
        this.index = this.getCurrentSlides.length - 2;
        this.slides.style.transform = `translateX(${
          -this.sliderWidth * this.index
        }px)`;
      }
      this.resetDots();
      this.dots[this.index - 1].classList.add("active");
    };
    this.dotsEvent = () => {
      this.dots.forEach((dot) => {
        dot.addEventListener("click", () => {
          this.resetDots();
          this.slides.style.transform = `translateX(${
            -this.sliderWidth * dot.getAttribute("data-pos")
          }px)`;

          dot.classList.add("active");
        });
      });
    };

    this.autoCarousel = () => {
      setInterval(() => {
        this.slideToRight();
      }, this.crouselTime);
    };
    this.next.addEventListener("click", this.slideToRight);
    this.prev.addEventListener("click", this.slideToLeft);
    this.dotsEvent();
    // this.autoCarousel();
  }
}

const slide1 = new imgSlider(".villa_type");
slide1.letsSlide();