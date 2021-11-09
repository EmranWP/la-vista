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


// ========= Video Modals ============== //
const play = document.querySelector(".play");
const close = document.querySelector(".video-modal .close");
const videoModal = document.querySelector(".video-modal");
const videoModalBox = document.querySelector(".video-modal .box");
let cName = "";
const openVideoModal = () => {
  videoModal.classList.add("active");
  const videoLink = play.getAttribute("data-link");
  document.querySelector(".video-modal iframe").setAttribute("src", videoLink);
  cName = "active";
};
const closeVideoModal = () => {
  document.querySelector(".video-modal iframe").setAttribute("src", "");
  videoModal.classList.remove("active");
  cName = "null";
};
function makeEvent(className, eventName, eventFunction) {
  if (className) {
    className.addEventListener(eventName, eventFunction);
  }
}

document.addEventListener("mouseup", (e) => {
  if (cName == "active") {
    if (!videoModalBox.contains(e.target)) {
      closeVideoModal();
    }
  }
});

makeEvent(play, "click", openVideoModal);
makeEvent(close, "click", closeVideoModal);

// ========= Caraosel Script ============== //

class imgSlider {
  // Constractor
  constructor(parentClass) {
    if (document.querySelector(parentClass)) {
      this.next = document.querySelector(parentClass + " .navigation .right");
      this.prev = document.querySelector(parentClass + " .navigation .left");
      this.slide = document.querySelector(parentClass + " .slides");
      this.slides = document.querySelectorAll(parentClass + " .slide");
      this.dots = document.querySelectorAll(parentClass + " .dot");
      this.index = 1;
      this.crouselTime = 1000;
      this.slideWidth = "";
      this.touchStartX = 0;
      this.touchEndX = 0;
    }
  }

  // ------------ Methods ----------//
  letsSlide(parentClass) {
    if (document.querySelector(parentClass)) {
      this.getSlides = () => document.querySelectorAll(parentClass + " .slide");
      this.firstClone = this.slides[0].cloneNode(true);
      this.lastClone = this.slides[this.slides.length - 1].cloneNode(true);
      this.firstClone.id = "first-clone";
      this.lastClone.id = "last-clone";
      this.slide.append(this.firstClone);
      this.slide.prepend(this.lastClone);
      this.slideWidth = this.slides[this.index].clientWidth;
      this.slide.style.transform = `translateX(${
        -this.slideWidth * this.index
      }px)`;
      this.startSlide = () => {
        this.slideId = setInterval(() => {
          this.moveToNextSlide();
        }, 1000);
      };
      this.resetDots = () => {
        this.dots.forEach((e) => {
          e.classList.remove("active");
        });
      };

      this.slide.addEventListener("transitionend", () => {
        this.slides = this.getSlides();
        if (this.slides[this.index].id === this.firstClone.id) {
          this.slide.style.transition = "none";
          this.index = 1;
          this.slide.style.transform = `translateX(${
            -this.slideWidth * this.index
          }px)`;
        }

        if (this.slides[this.index].id === this.lastClone.id) {
          this.slide.style.transition = "none";
          this.index = this.slides.length - 2;
          this.slide.style.transform = `translateX(${
            -this.slideWidth * this.index
          }px)`;
        }
      });

      this.moveToNextSlide = () => {
        this.slides = this.getSlides();
        if (this.index >= this.slides.length - 1) return;
        this.index++;
        this.slideWidth = this.slides[this.index].clientWidth;
        this.slide.style.transition = ".7s ease-out";
        this.slide.style.transform = `translateX(${
          -this.slideWidth * this.index
        }px)`;
        this.resetDots();
        if (this.index > this.slides.length - 2) {
          this.dots[this.index - this.dots.length - 1].classList.add("active");
        } else {
          this.dots[this.index - 1].classList.add("active");
        }
      };

      this.moveToPreviousSlide = () => {
        this.slides = this.getSlides();
        this.slideWidth = this.slides[this.index].clientWidth;
        if (this.index <= 0) return;
        this.index--;
        this.slide.style.transition = ".7s ease-out";
        this.slide.style.transform = `translateX(${
          -this.slideWidth * this.index
        }px)`;
        this.resetDots();
        if (this.index == 0) {
          this.dots[this.dots.length - 1].classList.add("active");
        } else {
          this.dots[this.index - 1].classList.add("active");
        }
      };

      this.dotsEvent = () => {
        this.dots.forEach((dot) => {
          dot.addEventListener("click", () => {
            this.resetDots();
            this.index = dot.getAttribute("data-pos");
            this.slide.style.transform = `translateX(${
              -this.slideWidth * this.index
            }px)`;

            dot.classList.add("active");
          });
        });
      };

      this.next.addEventListener("click", this.moveToNextSlide);
      this.prev.addEventListener("click", this.moveToPreviousSlide);
      this.dotsEvent();
      // this.startSlide();
      // ============ Touch Event ================ //
      this.slideOnTouch = () => {
        if (this.touchStartX > this.touchEndX) {
          this.moveToNextSlide();
        }
        if (this.touchStartX < this.touchEndX) {
          this.moveToPreviousSlide();
        }
      };
      this.slide.addEventListener("touchstart", (event) => {
        this.touchStartX = event.touches[0].screenX;
      });
      this.slide.addEventListener("touchend", (event) => {
        this.touchEndX = event.changedTouches[0].screenX;
        this.slideOnTouch();
      });
      window.addEventListener('resize', ()=>{
        this.slideWidth = this.slides[this.index].clientWidth;
        this.slide.style.transform = `translateX(${
          -this.slideWidth * this.index
        }px)`;
      })
    }
  }
  letsSlide2(parentClass) {
    if (document.querySelector(parentClass)) {
      this.startSlide = () => {
        this.slideId = setInterval(() => {
          this.moveToNextSlide();
        }, 1000);
      };
      this.resetDots = () => {
        this.dots.forEach((e) => {
          e.classList.remove("active");
        });
      };
      this.getSlides = () => document.querySelectorAll(parentClass + " .slide");

      this.moveToNextSlide = () => {
        console.log("clicked");
        this.slides = this.getSlides();
        this.index++;

        this.firstClone = this.slides[0].cloneNode(true);
        this.firstClone.classList.add("first-clone");
        this.slide.append(this.firstClone);
        this.slide.removeChild(this.slide.firstElementChild);
        this.slides.forEach((e) => {
          e.classList.remove("active");
        });
        this.slides[2].classList.add("active");
      };

      this.moveToPreviousSlide = () => {
        this.slides = this.getSlides();
        this.index--;
        this.slides.forEach((e) => {
          e.classList.remove("active");
        });
        this.lastClone = this.slides[this.slides.length - 1].cloneNode(true);
        this.slide.prepend(this.lastClone);
        this.slide.removeChild(this.slide.lastElementChild);

        this.slides[0].classList.add("active");
      };

      this.next.addEventListener("click", this.moveToNextSlide);
      this.prev.addEventListener("click", this.moveToPreviousSlide);
      // this.startSlide();
    }
  }
}

const slide1 = new imgSlider(".villa_type");
slide1.letsSlide(".villa_type");

const partners = new imgSlider(".partners");
partners.letsSlide(".partners");

const testimonial = new imgSlider(".testimonial");
testimonial.letsSlide(".testimonial");

if (window.innerWidth < 768) {
  const team = new imgSlider(".team_container");
  team.letsSlide(".team_container");
}
const imageSlider = new imgSlider(".image_slider1");
imageSlider.letsSlide2(".image_slider1");
const imageSlider2 = new imgSlider(".image_slider2");
imageSlider2.letsSlide2(".image_slider2");

// ============== Text Slider ======================= //

class textSlider {
  constructor(parentClass) {
    this.navItem = document.querySelectorAll(parentClass + " .nav-items");
    this.navItems = document.querySelectorAll(parentClass + " .nav-item");
    this.colorBar = document.querySelector(parentClass + " .purple");
    this.price = document.querySelectorAll(parentClass + " .price span");
    this.info = document.querySelectorAll(parentClass + " .einfo_container");
    this.description = document.querySelectorAll(parentClass + " .text p");
    this.details = document.querySelectorAll(
      parentClass + " .details_container"
    );
    this.next = document.querySelector(parentClass + " .navigation .next");
    this.prev = document.querySelector(parentClass + " .navigation .prev");
    this.barColored = document.querySelector(parentClass + " .bar.colored");
    this.resetActiveElements = (eName) => {
      eName.forEach((e) => {
        e.classList.remove("active");
      });
    };
    this.index = 0;
  }

  changeText(parentClass) {
    if (document.querySelector(parentClass)) {
      this.navItems.forEach((navItem, index) => {
        navItem.addEventListener("click", () => {
          this.resetActiveElements(this.description);
          this.description[index].classList.add("active");
          this.resetActiveElements(this.navItems);
          this.navItems[index].classList.add("active");
          this.colorBar.style.left = `${50 * index}%`;
          this.colorBar.style.transform = `translateX(${-50 * index}%)`;
          this.resetActiveElements(this.price);
          this.price[index].classList.add("active");
          this.resetActiveElements(this.info);
          this.info[index].classList.add("active");
        });
      });
    }
  }
  roomDetailsShow(parentClass) {
    if (document.querySelector(parentClass)) {
      this.navItems.forEach((navItem, index) => {
        navItem.addEventListener("click", () => {
          this.resetActiveElements(this.navItems);
          this.navItems[index].classList.add("active");
          this.resetActiveElements(this.details);
          this.details[index].classList.add("active");
        });
      });
    }
  }

  progressShow(parentClass) {
    if (document.querySelector(parentClass)) {
      let index = 0;
      this.navItems.forEach((navItem, i) => {
        navItem.addEventListener("click", () => {
          this.index = i;
          console.log(this.index);
          this.resetActiveElements(this.navItems);

          this.resetActiveElements(this.details);
          this.details[i].classList.add("active");
          for (let i = 0; i < this.index + 1; i++) {
            this.navItems[i].classList.add("active");
          }
          this.barColored.style.width = `${this.index * 25}%`;
        });
      });

      this.next.addEventListener("click", () => {
        if (this.index == this.details.length - 1) {
          this.index = -1;
          this.resetActiveElements(this.navItems);
        }
        this.index++;
        this.resetActiveElements(this.details);
        this.details[this.index].classList.add("active");
        this.navItems[this.index].classList.add("active");
        this.barColored.style.width = `${this.index * 25}%`;
      });

      this.prev.addEventListener("click", () => {
        console.log("clicked");
        this.navItems[this.index].classList.remove("active");
        this.index--;
        if (this.index < 0) {
          this.index = this.details.length - 1;
          this.resetActiveElements(this.navItems);
          this.navItems.forEach((e) => {
            e.classList.add("active");
          });
        }
        this.resetActiveElements(this.details);
        this.details[this.index].classList.add("active");
        this.barColored.style.width = `${this.index * 25}%`;
      });
    }
  }
}

const villaType = new textSlider(".villa_type");
villaType.changeText(".villa_type");

const villaRoom = new textSlider(".room_structure");
villaRoom.roomDetailsShow(".room_structure");

const progress = new textSlider(".progress");
progress.progressShow(".progress");

// ================== Image LightBox  =======================//

class imgLightbox {
  constructor(parentClass) {
    this.getAllSlides = document.querySelectorAll(parentClass + " .slide");
    this.lightBox = document.querySelector(".image-ligthbox");
    this.lightBoxMain = document.querySelector(".img_box_main .slides");
    this.thumbControl = document.querySelector(".thumbnail_control");
    this.close = document.querySelector(".close");
    this.sliderImage = [];
    this.thumbImage = [];
    this.sliderWidth = "";
    console.log(this.sliderImage);
  }

  openLightBox() {
    if (this.getAllSlides.length > 0) {
      for (let i = 1; i < this.getAllSlides.length - 1; i++) {
        this.sliderImage.push(this.getAllSlides[i].cloneNode());
        this.thumbImage.push(this.getAllSlides[i].cloneNode());
      }
      for (let i = 0; i < this.sliderImage.length; i++) {
        this.thumbControl.appendChild(this.thumbImage[i]);
        this.lightBoxMain.appendChild(this.sliderImage[i]);
      }
      this.getAllSlides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          this.lightBox.style.display = "block";
          this.sliderWidth = document.querySelectorAll(".img_box_main .slide")[
            idx
          ].clientWidth;
          this.lightBoxMain.style.transform = `translateX(${-this
            .sliderWidth}px)`;
        });
      });
    }
  }
  closeLightBox() {
    if (this.getAllSlides.length > 0) {
      this.close.addEventListener("click", () => {
        this.lightBox.style.display = "none";
      });
    }
  }
}
const imageLightBox = new imgLightbox(".villa_type");
imageLightBox.openLightBox(".villa_type");
imageLightBox.closeLightBox(".villa_type");

class lightBoxSlider extends imgSlider {
  constructor(parentClass) {
    super(parentClass);
    this.thumbControl = document.querySelectorAll(
      ".image-ligthbox .thumbnail_control .slide"
    );
    this.thumbControl.forEach((e, idx) => {
      e.addEventListener("click", () => {
        this.index = idx;
        this.moveToNextSlide();
      });
    });
  }
}
// const lightBoxImageSlide = new imgSlider(".img_box_main");
// lightBoxImageSlide.letsSlide(".img_box_main");

const lightBoxSlider1 = new lightBoxSlider(".img_box_main");
lightBoxSlider1.letsSlide(".img_box_main");

// ========= Info Modals ============== //
class propertyShow{
  constructor(parentClass){
    this.propertyslides = document.querySelectorAll(parentClass + " .img_box");
    this.propertyslide = document.querySelector(parentClass + " .property_main");
    this.exits = document.querySelectorAll(parentClass + " .exit");
    this.infoIcon = document.querySelectorAll(parentClass + " .icon.info");
    this.thumSlide = document.querySelectorAll(parentClass + " .property_thumb");
    this.thumSlides = document.querySelectorAll(parentClass + " .property_thumb img");
    this.infoAccordions = document.querySelectorAll(parentClass + " .accordion");
    this.accordionSlide = document.querySelector(parentClass + " .accordion_container");
    this.accordionSlides = document.querySelectorAll(parentClass + " .accordion_slider");
    this.next = document.querySelector(parentClass + " .next");
    this.prev = document.querySelector(parentClass + " .prev");
    
    this.index = 0;
    this.point = 0;
  }

  showInfoModal(){
    this.openAccordion = (idx)=>{
      this.point = idx;
      this.infoAccordions.forEach(e => {
        e.classList.remove('open');
      });
      this.infoAccordions[this.point].classList.add('open');
    }
    this.infoIcon.forEach((icon, idx)=> {
      icon.addEventListener('mouseenter', ()=>{
        icon.nextElementSibling.classList.add('active');
      })
      icon.addEventListener('mouseleave', ()=>{
        icon.nextElementSibling.classList.remove('active');
      })
      icon.addEventListener('click', ()=>{
        this.openAccordion(idx);
      })
    });
    this.infoAccordions.forEach((acc, idx) => {
      acc.addEventListener('click', ()=>{
        this.openAccordion(idx);
      })
    });
  }
  showInProperty(){
    if (this.propertyslide) {
      this.slideToRight = ()=>{
        this.propertyslide.style.transition = 'all .5s ease-in-out';
        this.slideWidth = this.propertyslides[this.index].clientWidth;
        this.propertyslide.style.transform = `translateX(${
          -this.slideWidth * this.index
        }px)`;
        this.contentWidth = this.accordionSlides[this.index].clientWidth;
        this.accordionSlide.style.transform = `translateX(${
          -this.contentWidth * this.index
        }px)`;
      }
      this.exits.forEach(exit => {
        exit.addEventListener('click', ()=>{
          this.index++;
          if (this.index > this.propertyslides.length - 1) {
            this.index = 0;
          }
          this.slideToRight();
        })
      });

      this.thumSlides.forEach((thum, idx) => {
        thum.addEventListener('click', ()=>{
          this.index = idx;
          this.slideToRight();
        })
      });
      this.next.addEventListener('click', ()=>{
        this.index++;
          if (this.index > this.propertyslides.length - 1) {
            this.index = 0;
          }
          this.slideToRight();
      })
      this.prev.addEventListener('click', ()=>{
        this.index--;
          if (this.index < 0) {
            this.index = this.propertyslides.length - 1;
          }
          this.slideToRight();
      })
    }
  }
}
const propertyShow1 = new propertyShow(".property_show");
propertyShow1.showInProperty();
propertyShow1.showInfoModal();