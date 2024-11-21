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
