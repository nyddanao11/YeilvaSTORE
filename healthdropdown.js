const dropdownMenus = document.querySelectorAll('.dropdown-menu');
const dropdownLinks = document.querySelectorAll('.dropdown .link');

dropdownLinks.forEach(link => {
  link.addEventListener('click', () => {
    const dropdownMenu = link.nextElementSibling;
    dropdownMenu.classList.toggle('show');
  });
});

window.addEventListener('click', function(event) {
  const isDropdownMenu = event.target.closest('.dropdown-menu');
  const isDropdownLink = event.target.closest('.dropdown .link');
  const dropdownMenusArray = Array.from(dropdownMenus);
  if (!isDropdownMenu && !isDropdownLink) {
    dropdownMenusArray.forEach(menu => {
      menu.classList.remove('show');
    });
  }
});




