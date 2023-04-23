const dropdownContentEl = document.querySelectorAll('.dropdown-menu')
const dropdownLinks = document.querySelectorAll('.dropdown .link');

dropdownLinks.forEach(link => {
  link.addEventListener('click', () => {
    const dropdownMenu = link.nextElementSibling;
     dropdownMenu.classList.toggle('show');
  });
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  const dropdownContent = dropdownContentEl;
  if (!event.target.matches('.dropdown') && !event.target.matches('.link')) {
    // Hide the dropdown content
    dropdownContent.classList.remove('show');
  }
});




