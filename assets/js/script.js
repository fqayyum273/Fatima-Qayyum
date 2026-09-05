"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}


// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");


// testimonials modal functionality
const testimonialsModalFunc = function () {
  if (modalContainer) {
    modalContainer.classList.toggle("active");
  }

  if (overlay) {
    overlay.classList.toggle("active");
  }
};


// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    if (modalImg) {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    }

    if (modalTitle) {
      modalTitle.innerHTML =
        this.querySelector("[data-testimonials-title]").innerHTML;
    }

    if (modalText) {
      modalText.innerHTML =
        this.querySelector("[data-testimonials-text]").innerHTML;
    }

    testimonialsModalFunc();

  });

}


// modal close functionality
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
}

if (overlay) {
  overlay.addEventListener("click", testimonialsModalFunc);
}


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}


// add event in all select items
for (let i = 0; i < selectItems.length; i++) {

  selectItems[i].addEventListener("click", function () {

    const selectedValue = this.innerText.toLowerCase();

    if (selectValue) {
      selectValue.innerText = this.innerText;
    }

    if (select) {
      elementToggleFunc(select);
    }

    filterFunc(selectedValue);

  });

}


// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {

      filterItems[i].classList.add("active");

    } else if (selectedValue === filterItems[i].dataset.category) {

      filterItems[i].classList.add("active");

    } else {

      filterItems[i].classList.remove("active");

    }

  }

};


// add event in all filter button items for large screen
const filterBtns = document.querySelectorAll("[data-filter-btn]");

let lastClickedBtn = filterBtns[0];

for (let i = 0; i < filterBtns.length; i++) {

  filterBtns[i].addEventListener("click", function () {

    const selectedValue = this.innerText.toLowerCase();

    if (selectValue) {
      selectValue.innerText = this.innerText;
    }

    filterFunc(selectedValue);

    if (lastClickedBtn) {
      lastClickedBtn.classList.remove("active");
    }

    this.classList.add("active");

    lastClickedBtn = this;

  });

}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");


// page navigation functionality
for (let i = 0; i < navigationLinks.length; i++) {

  navigationLinks[i].addEventListener("click", function () {

    const targetPage = this.innerText.trim().toLowerCase();

    // Remove active class from all pages
    for (let j = 0; j < pages.length; j++) {
      pages[j].classList.remove("active");
    }

    // Remove active class from all navigation buttons
    for (let j = 0; j < navigationLinks.length; j++) {
      navigationLinks[j].classList.remove("active");
    }

    // Find the page that matches the clicked navigation button
    const targetElement = document.querySelector(
      `[data-page="${targetPage}"]`
    );

    // Activate the selected page
    if (targetElement) {
      targetElement.classList.add("active");
    }

    // Activate the clicked navigation button
    this.classList.add("active");

    // Scroll to top
    window.scrollTo(0, 0);

  });

}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");


// add event to all form input fields
for (let i = 0; i < formInputs.length; i++) {

  formInputs[i].addEventListener("input", function () {

    if (form && form.checkValidity()) {

      if (formBtn) {
        formBtn.removeAttribute("disabled");
      }

    } else {

      if (formBtn) {
        formBtn.setAttribute("disabled", "");
      }

    }

  });

}
