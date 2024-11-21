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



