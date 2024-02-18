/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll(".services-modal");
const modalBtn = document.querySelectorAll(".services-button");
const modalClose = document.querySelectorAll(".services-modal-close");

let activeModal = (modalClick) => {
  modal[modalClick].classList.add("active-modal");
};

modalBtn.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    activeModal(i);
  });
});

modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modal.forEach((removeModal) => {
      removeModal.classList.remove("active-modal");
    });
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper(".testimonial-swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scroll = document.querySelector("#scroll-up");
  this.scrollY >= 1000 ? scroll.classList.add("show-scroll") : scroll.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
