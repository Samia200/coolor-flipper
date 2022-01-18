const colors = ["antiquewhite" , "#7be0ad" ,"rgb(237, 220, 210)" , "DBE7E4" ,"hsl(0, 37%, 53%)"]; 

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getrandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    document.querySelector(".color").style.color = colors[randomNumber];


});
function getrandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

