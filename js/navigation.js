addEventListeners();

var subMenuClass = "sub-menu";
var showClassMenu = "show-menu";

function closeAllMenus(){
    var elementsArray = Array.from(document.getElementsByClassName(subMenuClass));
    elementsArray.forEach(function(item){
        item.classList.remove(showClassMenu);
    });
}

function closeMenuFunction(){           
    if (document.getElementsByClassName(showClassMenu).length > 0)
        closeAllMenus();

    var menuElement =  this.parentElement.getElementsByClassName(subMenuClass)[0];
    menuElement.classList.toggle(showClassMenu);           
            
}


function addEventListeners(){
    var closeMenuBtnArray = Array.from(document.getElementsByClassName("close-menu"));
    closeMenuBtnArray.forEach(function(item){
        item.addEventListener("click", closeAllMenus);
    });
    
    var menuItemsArray = Array.from(document.getElementsByClassName("menu-item-option"));
    menuItemsArray.forEach(function(item){
        item.addEventListener("click", closeMenuFunction)
    });
}