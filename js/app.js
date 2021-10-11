
const contentRightArrow = document.getElementById("contentsRight");
const contentQuery = document.querySelector(".sidebarFirst");

const sidebarList = document.getElementById("sidebarList");
const sidebarListStyle = getComputedStyle(sidebarList);
// content listing
const contentDown = () => {
    if (sidebarListStyle.display == 'none') {
        contentRightArrow.src = "images/downarrow.png";
        sidebarList.style.display='flex';
        sidebarList.style.visibility = 'visible';
    } else if (sidebarListStyle.display == 'flex') {
        contentRightArrow.src = "images/rightarrow.png";
        sidebarList.style.visibility = 'hidden';
        sidebarList.style.display='none';
    }
}
contentQuery.addEventListener('click', contentDown);

// menu button handler

const menuBtn = document.querySelector("#menuBtn");
const menuBtnId = document.getElementById("menuBtn");

const sidebar = document.getElementById("sidebar");
const sidebarStyle = getComputedStyle(sidebar);

const menuIcon=document.getElementById("menuIcon");

const menuHandler = () => {
    if (sidebarStyle.visibility=='hidden') {
        sidebar.style.visibility='visible';
        sidebar.style.display='flex';
        menuIcon.src="images/close.png";
    } else {
        sidebar.style.visibility='hidden';
        sidebar.style.display='none';
        menuIcon.src="images/iconmenu.png";
    }
}
menuBtn.addEventListener('click', menuHandler);

