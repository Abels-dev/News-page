const openMenu = document.getElementById("menu");
const menuList = document.getElementById("menuList");
const container = document.querySelector(".menu");
const menuIcon = document.getElementById("menuImg");
const body=document.getElementsByTagName("body");

openMenu.onclick = () => {
   container.classList.toggle("open-menu");
   menuList.classList.toggle("showUl");
   body[0].classList.toggle("blur");
   if(menuIcon.getAttribute("src")=="assets/images/icon-menu.svg")
      menuIcon.setAttribute("src","assets/images/icon-menu-close.svg")
   else 
    menuIcon.setAttribute("src","assets/images/icon-menu.svg")
};
