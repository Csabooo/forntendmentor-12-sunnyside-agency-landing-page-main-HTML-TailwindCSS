const navButtons = document.querySelectorAll(".navs");

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
  });

