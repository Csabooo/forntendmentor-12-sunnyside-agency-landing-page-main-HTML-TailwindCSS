const navButtons = document.querySelectorAll(".navs");
const navHamburgerButtons = document.querySelectorAll(".nav-hamburger");

const btn = document.getElementById('menu-btn');
const close_btn = document.getElementById('close');
const menu = document.getElementById('hamburger-menu-list');

navButtons.forEach(item => {
  item.addEventListener('click', function () {
    const activeItems = document.querySelectorAll(".navs.active");
    if (activeItems.length > 0) {
      activeItems.forEach(activeItem => {
        activeItem.classList.remove('active');
      });
    }

    if (!item.classList.contains("active")) {
      item.classList.add('active');
    }
  });
})

navHamburgerButtons.forEach(item => {
  item.addEventListener('click', function () {
    const activeItems = document.querySelectorAll(".nav-hamburger.active-yellow");
    if (activeItems.length > 0) {
      activeItems.forEach(activeItem => {
        activeItem.classList.remove('active-yellow');
      });
    }

    if (!item.classList.contains("active-yellow")) {
      item.classList.add('active-yellow');
    }
  });
});


btn.addEventListener('click', navToggle);
close_btn.addEventListener('click', navToggle);

function navToggle() {
  close_btn.classList.toggle("hidden");
  btn.classList.toggle("hidden");
  menu.classList.toggle('hidden');
}
