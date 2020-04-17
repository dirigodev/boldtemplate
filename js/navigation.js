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

   

    document.getElementById('mobileMenu').addEventListener("click", openCloseMobileMenu);
    document.getElementById('closeMenuMobile').addEventListener("click", openCloseMobileMenu);

    var closeMenuBtnArray = Array.from(document.getElementsByClassName("close-menu"));
    closeMenuBtnArray.forEach(function(item){
        item.addEventListener("click", closeAllMenus);
    });


    Array.from(document.getElementsByClassName('menuItem-subOption')).forEach(function (item) {
       item.addEventListener("click", togleOptionsMobile); 
    });
}

function togleOptionsMobile(){
    console.log(this.parentElement.getElementsByTagName('a'));
    Array.from(this.parentElement.getElementsByTagName('a')).forEach(function(item){
        item.classList.toggle("display");
    });
}


function openCloseMobileMenu(){   
    console.log("clicked menu");
    if(window.innerWidth <= 980){
        document.getElementsByTagName('nav')[0].classList.toggle("mobile-menu-open");
    }
}
