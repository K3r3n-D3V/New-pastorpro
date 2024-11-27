 // JavaScript to toggle the sidebar
 const menuIcon = document.getElementById("menu-icon");
 const sideNav = document.getElementById("side-nav");
 const closeBtn = document.getElementById("close-btn");

 // Show the sidebar
 menuIcon.addEventListener("click", () => {
   sideNav.style.width = "250px";
 });

 // Close the sidebar
 closeBtn.addEventListener("click", () => {
   sideNav.style.width = "0";
 });

 // Close the sidebar when clicking outside
 document.addEventListener("click", (event) => {
   if (!sideNav.contains(event.target) && !menuIcon.contains(event.target)) {
     sideNav.style.width = "0";
   }
 });

 //this is for the window icon on navbar
 const windowButton = document.querySelector(".window");
 const windowPopup = document.querySelector(".window-popup");
  
  windowButton.addEventListener("click", () => {
    windowPopup.style.display = windowPopup.style.display === "block" ? "none" : "block";
  });

  //close the popup
  document.addEventListener('click', (event) => {
    if (!windowButton.contains(event.target) && !windowPopup.contains(event.target)) {
      windowPopup.style.display = 'none';
    }
  });

 //this is for the 3 dotted menu next to initials
 const menuButton = document.querySelector('.menu-button');
const menuPopup = document.querySelector('.menu-popup');

menuButton.addEventListener('click', () => {
  // Toggle the display of the popup
  menuPopup.style.display = menuPopup.style.display === 'block' ? 'none' : 'block';
});

// Close the popup when clicking outside
document.addEventListener('click', (event) => {
  if (!menuButton.contains(event.target) && !menuPopup.contains(event.target)) {
    menuPopup.style.display = 'none';
  }
});



 //popup
 // Get all clickable divs and close buttons
const clickableDivs = document.querySelectorAll(".clickable");
const closeButtons = document.querySelectorAll(".closePopup");

// Add click event listener to each div
clickableDivs.forEach(div => {
    div.addEventListener("click", () => {
        const popupId = div.getAttribute("data-popup"); // Get related popup's ID
        const popup = document.getElementById(popupId);
        popup.style.display = "block"; // Show the popup
        document.body.classList.add("popup-active");
    });
});

// Add click event listener to each close button
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const popup = button.closest(".popup"); // Find the nearest popup
        popup.style.display = "none"; // Hide the popup
        document.body.classList.remove("popup-active");
    });
});


//styling accordion

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
