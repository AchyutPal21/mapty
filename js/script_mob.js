// For Mob 480w

"use strict";

const sidebar = document.querySelector(".sidebar");
const showSidebar = document.querySelector(".show__sidebar");
const sidebarLogo = document.querySelector(".app__logo");

showSidebar.addEventListener("click", function (event) {
  event.target.closest(".show__sidebar").classList.add("hide_show");
  sidebar.classList.add("show_sideber");
});

sidebarLogo.addEventListener("click", function () {
  showSidebar.classList.remove("hide_show");
  sidebar.classList.remove("show_sideber");
});
