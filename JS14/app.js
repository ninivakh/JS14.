function first(){
   var x = document.getElementById("circle1");
   var y = document.getElementById("click1");

   y.addEventListener("click", function() {
    x.style.transform = "translateX(calc(100% - 200px))";
    x.classList.add("green");
});
    
}  

