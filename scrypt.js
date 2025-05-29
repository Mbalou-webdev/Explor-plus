console.log("Largeur de la fenêtre :", window.innerWidth);

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ✅ Option pour ScrollReveal
const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

// ✅ Appel correct à ScrollReveal
ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".destination_card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".showcase_image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".showcase_content p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".showcase_content h4", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".showcase_btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".banner_card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".discover_card", {
    ...scrollRevealOption,
    interval: 500,
});
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });



  
