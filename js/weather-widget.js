document.getElementById("plusSidebarWidget").addEventListener("click", function(){
    this.classList.toggle("open");
    if(this.classList.contains("open")){
        this.setAttribute("src", "./images/icons/close-icon.svg");
    }else{
        this.setAttribute("src", "./images/icons/plus-icon.svg");
    }
    var widgetWeatherElement = document.getElementById("widgetWeather");
    widgetWeatherElement.classList.toggle("show-widget");
    var parentElemnt = widgetWeatherElement.parentElement;
    var sidebarElements = Array.from(parentElemnt.getElementsByClassName("hide-mobile"));          
    sidebarElements.forEach(function(item){
        item.classList.toggle("hide");
    });
    document.getElementsByClassName("widget-bar")[0].classList.toggle("mobile-active");           

});