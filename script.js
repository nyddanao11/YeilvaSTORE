
function showOuterDropdown1() {
    document.getElementById("outerDropdown1").classList.toggle("show");
}
function showOuterDropdown() {
    document.getElementById("outerDropdown").classList.toggle("show");
}
function showInnerDropdown1() {
    document.getElementById("innerDropdown1").classList.toggle("show");
}

function showInnerDropdown2() {
    document.getElementById("innerDropdown2").classList.toggle("show");
  }
 
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("myDropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

