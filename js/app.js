
const contentRightArrow = document.getElementById("contentsRight");
const contentQuery = document.querySelector(".sidebarFirst");

const sidebar = document.getElementById("sidebar");
const sidebarStyle = getComputedStyle(sidebar);

const sidebarList = document.getElementById("sidebarList");
const sidebarListStyle = getComputedStyle(sidebarList);



// switch theme

const themeDiv = document.querySelector("#theme");
const themeIcon = document.getElementById("themeIcon");
var currentColor = 'white';
var docstyle = document.documentElement.style;

const themeChange = () => {
    themechanger();
    function themechanger() {
        blackorwhite();
        if (currentColor == 'white') {
            themeIcon.src = "images/light.png";
            docstyle.setProperty('--background-color', '#202124');
            docstyle.setProperty('--text-color', '#e8eaed');
            docstyle.setProperty('--border', '1px solid #5f6368');
            docstyle.setProperty('--footer-background', '#303134');
            menuIcon.src = "images/menubright.png";
            if (sidebarStyle.visibility == 'visible') {
                menuIcon.src = "images/closebright.png";
                if (sidebarListStyle.display == 'none') {
                    contentRightArrow.src = "images/rightarrowbright.png";
                } else {
                    contentRightArrow.src = "images/downarrowbright.png"
                }
            } else {
                menuIcon.src = "images/menubright.png";
                contentRightArrow.src = "images/rightarrowbright.png";
            }
            currentColor = 'black';

        } else {
            docstyle.setProperty('--background-color', '#f8f9fa');
            themeIcon.src = "images/dark.png";
            docstyle.setProperty('--text-color', 'black');
            docstyle.setProperty('--border', '1px solid #dadce0');
            docstyle.setProperty('--footer-background', '#f8f9fa');
            menuIcon.src = "images/iconmenu.png";
            if (sidebarStyle.visibility == 'visible') {
                menuIcon.src = "images/close.png";
                if (sidebarListStyle.display == 'none') {
                    contentRightArrow.src = "images/rightarrow.png";
                } else {
                    contentRightArrow.src = "images/downarrow.png"
                }
            } else {
                menuIcon.src = "images/iconmenu.png";
                contentRightArrow.src="images/rightarrow.png";
            }
            currentColor = 'white';
        }
    }

}
themeDiv.addEventListener('click', themeChange);
// 


// menu button handler

const menuBtn = document.querySelector("#menuBtn");
const menuBtnId = document.getElementById("menuBtn");



const menuIcon = document.getElementById("menuIcon");

const menuHandler = () => {
    if (sidebarStyle.visibility == 'hidden') {
        sidebar.style.visibility = 'visible';
        sidebar.style.display = 'flex';
        if (currentColor == 'white') {
            menuIcon.src = "images/close.png";
        } else {
            menuIcon.src = "images/closebright.png";
        }
    } else {
        sidebar.style.visibility = 'hidden';
        sidebar.style.display = 'none';
        menuIcon.src = "images/iconmenu.png";
        if (currentColor == 'white') {
            menuIcon.src = "images/iconmenu.png";
        } else {
            menuIcon.src = "images/menubright.png";
        }
    }
}
menuBtn.addEventListener('click', menuHandler);

// dark or white theme
function blackorwhite() {
    const headerStyle = getComputedStyle(document.getElementById("header"));
    if (headerStyle.backgroundColor == 'rgb(32, 33, 36)') {
        currentColor = 'black';
        return currentColor;
    } else {
        currentColor = 'white';
        return currentColor;
    }
}


// content listing
const contentDown = () => {
    contentLister();
    function contentLister() {
        blackorwhite();
        if (sidebarListStyle.display == 'none') {
            sidebarList.style.display = 'flex';
            sidebarList.style.visibility = 'visible';
            if (currentColor == 'white') {
                contentRightArrow.src = "images/downarrow.png";
            } else {
                contentRightArrow.src = "images/downarrowbright.png";
            }
        } else if (sidebarListStyle.display == 'flex') {
            sidebarList.style.visibility = 'hidden';
            sidebarList.style.display = 'none';
            if (currentColor == 'white') {
                contentRightArrow.src = "images/rightarrow.png";
            } else {
                contentRightArrow.src = "images/rightarrowbright.png";
            }
        }
    }
}
contentQuery.addEventListener('click', contentDown);

// 
