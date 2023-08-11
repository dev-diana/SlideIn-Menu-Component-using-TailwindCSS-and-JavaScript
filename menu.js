/*To open navigation menu, set the width to 60% of the background overlay*/
function openNav() {
    document.getElementById("sideBar").style.width = "100%";
    document.getElementById("sideNav").style.width = "60%";
}

/*Close navigation*/
function exitNav() {
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("sideNav").style.width = "0";
}