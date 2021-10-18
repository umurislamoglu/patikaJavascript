

let userName = prompt("İsminiz?")
let greeting = document.querySelector("#myName")
greeting.innerHTML = `Hoşgeldin ${userName}!`



function showTime() {


    var date = new Date();
    
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 

    var dayOfWeek = date.getDay();
    
    if (dayOfWeek == 1) {
        dayOfWeek = "Pazartesi";
      } else if (dayOfWeek == 2) {
        dayOfWeek = "Salı";
      } else if (dayOfWeek == 3) {
        dayOfWeek = "Çarşamba";
      } else if (dayOfWeek == 4) {
        dayOfWeek = "Perşembe";
      } else if (dayOfWeek == 5) {
        dayOfWeek = "Cuma";
      } else if (dayOfWeek == 6) {
        dayOfWeek = "Cumartesi";
      } else if (dayOfWeek == 7) {
        dayOfWeek = "Pazar";
      }
 
      var time = h + ":" + m + ":" + s + " " +dayOfWeek;

document.getElementById("myClock").innerHTML = time


      setTimeout(showTime, 1000);
}

showTime();