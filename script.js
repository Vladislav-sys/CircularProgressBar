

function rotateBar(circle, percents, time) {

      let rightCircle = circle.querySelector(".right-half");
      let leftCircle = circle.querySelector(".left-half");
      let text = circle.querySelector(".text span");

      rightCircle.style.transform = "rotate(0deg)";
      leftCircle.style.transform = "rotate(0deg)";
      leftCircle.style.display = "none";
      text.textContent = "0";

      let degrees = 180 / 50 * percents;

      let start = Date.now(); 

      let timer = setInterval(function() {

      let timePassed = Date.now() - start;

      if (timePassed >= time) {
         if (degrees > 180) {
            leftCircle.style.transform = "rotate(" + (degrees - 180) + "deg)";
            text.textContent = Math.round(timePassed / time * percents); 
         } else {
            rightCircle.style.transform = "rotate(" + degrees + "deg)";
            text.textContent = Math.round(timePassed / time * percents);
         }
         
         clearInterval(timer); 
         return;
      }
      
      if (timePassed / time * degrees > 180) {
         rightCircle.style.transform = "rotate(" + 180 + "deg)";
         leftCircle.style.display = "block";
         leftCircle.style.transform = "rotate(" + ((timePassed / time * degrees) - 180) + "deg)";

      } else {
         rightCircle.style.transform = "rotate(" + timePassed / time * degrees + "deg)"; 
      }
      
      text.textContent = Math.round(timePassed / time * percents);

      }, 20);
     
}

let firstCircle = document.querySelector(".first-circle");
let secondCircle = document.querySelector(".second-circle");
let thirdCircle = document.querySelector(".third-circle");

let button = document.querySelector(".start-btn");

button.onclick = function() {
   button.disabled = true;
   rotateBar (firstCircle, 80 , 1000);
   rotateBar (secondCircle,50 , 1000);
   rotateBar (thirdCircle, 20 , 1000);
   setTimeout(function () { button.disabled  = false } , 1000);
};


	
	
	




	
 

