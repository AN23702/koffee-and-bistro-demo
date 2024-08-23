document.addEventListener("DOMContentLoaded", () => {
    const removeActiveClasses = (menuItems) => {
      menuItems.forEach((item) => item.classList.remove("active"));
    };
  
    const setActiveMenu = (selector, defaultActiveIndex = 0) => {
      const menuItems = document.querySelectorAll(selector);
  
      const activeIndex = localStorage.getItem("activeMenuItemIndex");
      if (activeIndex !== null) {

        const activeElement = menuItems[activeIndex];
        if (activeElement) {
          removeActiveClasses(menuItems);
          activeElement.classList.add("active");
        }
      } else {
        menuItems[defaultActiveIndex].classList.add("active");

      }
  
      menuItems.forEach((item, index) => {
        item.addEventListener("click", () => {
          removeActiveClasses(menuItems);
          item.classList.add("active");
  
          localStorage.setItem("activeMenuItemIndex", index);
        });
      });
    };

    setActiveMenu(".menu-main li", 0);
  });
  