// Obtener la entrada de fecha
const dateInput = document.getElementById("dateInput");
const title = document.getElementById("title");

// Actualizar el valor de countDownDate cuando se selecciona una fecha
dateInput.addEventListener("change", function() {
  // Obtener el valor de la fecha seleccionada
  const selectedDate = new Date(dateInput.value);
  
  // Comprobar si se ha seleccionado una fecha válida
  if (selectedDate && !isNaN(selectedDate)) {
    // Establecer la fecha seleccionada como countDownDate
    countDownDate = selectedDate.getTime();
    title.innerHTML = "Esto falta para tu evento";
  } else {
    title.innerHTML = "El próximo Año comienza en…";
  }
});

// Calcular la fecha inicial (1 de enero del próximo año)
const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;
const initialDate = new Date("January 1, " + nextYear).getTime();

// Set the date we're counting down to
let countDownDate = initialDate;

// Update the count down every 1 second
const x = setInterval(function() {
  // Get today's date and time
  const now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Demasiado tarde ingresa otra fecha.";
  }
}, 1000);