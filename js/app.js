
const contentRightArrow = document.getElementById("contentsRight");
const contentQuery = document.querySelector(".sidebarFirst");

const sidebar = document.getElementById("sidebar");
const sidebarStyle = getComputedStyle(sidebar);

const sidebarList = document.getElementById("sidebarList");
const sidebarListStyle = getComputedStyle(sidebarList);

const themeDiv = document.querySelector("#theme");
const themeIcon = document.getElementById("themeIcon");
var docstyle = document.documentElement.style;

const menuBtn = document.querySelector("#menuBtn");
const menuBtnId = document.getElementById("menuBtn");
const menuIcon = document.getElementById("menuIcon");


var whiteTheme = () => {
    docstyle.setProperty('--background-color', '#f8f9fa');
    themeIcon.src = "images/dark.png";
    docstyle.setProperty('--text-color', 'black');
    docstyle.setProperty('--border', '1px solid #dadce0');
    docstyle.setProperty('--footer-background', '#f8f9fa');
    menuIcon.src = "images/iconmenu.png";
    contentQuery.style.color = "black";
}
var blackTheme = () => {
    themeIcon.src = "images/light.png";
    docstyle.setProperty('--background-color', '#202124');
    docstyle.setProperty('--text-color', '#e8eaed');
    docstyle.setProperty('--border', '1px solid #5f6368');
    docstyle.setProperty('--footer-background', '#303134');
    menuIcon.src = "images/menubright.png";
    contentQuery.style.color = "white"
}

var currentTheme = () => {
    var theme = localStorage.getItem("theme")
    if (theme) {
        return theme;
    } else {
        return "white";
    }
};

var loadCurrentTheme = () => {
    var theme = localStorage.getItem("theme");
    if (theme == "white") {
        whiteTheme();
    } else if (theme == "black") {
        blackTheme();
    }
};

loadCurrentTheme();

// For theme changer
var currentColor=currentTheme();

// switch theme
const themeChange = () => {
    localStorage.clear();
    if (currentColor == "white") {
        blackTheme();
        localStorage.setItem("theme", "black");
        if (sidebarStyle.visibility == 'visible') {
            menuIcon.src = "images/closebright.png";
        } else {
            menuIcon.src = "images/menubright.png";
        }
        currentColor="black";
    } else {
        whiteTheme();
        localStorage.setItem("theme", "white");

        if (sidebarStyle.visibility == 'visible') {
            menuIcon.src = "images/close.png";
        } else {
            menuIcon.src = "images/iconmenu.png";
        }
        currentColor="white"
    }
}

themeDiv.addEventListener('click', themeChange);
// 


// menu button handler



const menuHandler = () => {
    if (sidebarStyle.visibility == 'hidden') {
        sidebar.style.visibility = 'visible';
        sidebar.style.display = 'flex';
        if (currentColor == "white") {
            menuIcon.src = "images/close.png";
        } else {
            menuIcon.src = "images/closebright.png";
        }
    } else {
        sidebar.style.visibility = 'hidden';
        sidebar.style.display = 'none';
        menuIcon.src = "images/iconmenu.png";
        if (currentColor == "white") {
            menuIcon.src = "images/iconmenu.png";
        } else {
            menuIcon.src = "images/menubright.png";
        }
    }
}
menuBtn.addEventListener('click', menuHandler);

// dark or white theme



// content listing
const contentDown = () => {
    contentLister();
    function contentLister() {
        if (sidebarListStyle.display == 'none') {
            sidebarList.style.display = 'flex';
            sidebarList.style.visibility = 'visible';
            rotateArrow("forw");
        } else if (sidebarListStyle.display == 'flex') {
            sidebarList.style.visibility = 'hidden';
            sidebarList.style.display = 'none';
            rotateArrow("backw")
        }
    }
}
contentQuery.addEventListener('click', contentDown);

// Rotateicons

const rotateArrow = (params) => {
    const rotateArrow = document.querySelector('#contentsRight');
    if (params == "forw") {
        rotateArrow.style.transform = 'rotate(0deg)';
        console.log("rotated")
    } else {
        rotateArrow.style.transform = 'rotate(-90deg)';
        console.log("rotatedback")

    }
}

//scroll function
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-10%";
  }
  prevScrollpos = currentScrollPos;
}