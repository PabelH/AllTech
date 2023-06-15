 // Obtener el lienzo y el contexto
 const canvas = document.getElementById('canvas');
 const ctx = canvas.getContext('2d');
 
 // Configuración inicial
 let isDrawing = false;
 ctx.lineWidth = 5;
 ctx.lineJoin = 'round';
 ctx.lineCap = 'round';
 let currentColor = '#000';
 let backgroundImage = null;
 
 // Función para dibujar en el lienzo
 function draw(e) {
   if (!isDrawing) return;
 
   ctx.strokeStyle = currentColor;
 
   ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);

   ctx.stroke();
 }
 
 // Función para iniciar el dibujo
 function startDrawing(e) {
   isDrawing = true;
   ctx.beginPath();
   ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
  }
 
 // Función para detener el dibujo
 function stopDrawing() {
   isDrawing = false;
 }
 
 // Función para cambiar el color de dibujo
 function changeColor() {
   currentColor = this.value;
 }
 
 // Función para cambiar la imagen de fondo
 function changeBackgroundImage() {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    backgroundImage = new Image();
    backgroundImage.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    };
    backgroundImage.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
 
 // Función para limpiar el lienzo
 function clearCanvas() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   if (backgroundImage) {
     ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
   }
 }
 // Función para cambiar el tamaño del pincel
function changeBrushSize() {
  ctx.lineWidth = this.value;
}

// Función para cambiar el color de fondo del lienzo
function changeBackgroundColor() {
  canvas.style.backgroundColor = this.value;
}

// Función para restaurar la página
function restorePage() {
  location.reload(); // Recarga la página
}

// Función para guardar una captura del lienzo
function saveCanvas() {
  const link = document.createElement('a');
  link.href = canvas.toDataURL(); // Obtiene la URL de la imagen del lienzo
  link.download = 'canvas.png'; // Nombre del archivo de imagen descargado
  link.click(); // Simula un clic en el enlace para descargar el archivo
}


 // Agregar eventos a los elementos
 canvas.addEventListener('mousemove', draw);
 canvas.addEventListener('mousedown', startDrawing);
 canvas.addEventListener('mouseup', stopDrawing);
 canvas.addEventListener('mouseout', stopDrawing);
 colorPicker.addEventListener('input', changeColor);
 imagePicker.addEventListener('change', changeBackgroundImage);
 clearBtn.addEventListener('click', clearCanvas);
 brushSizePicker.addEventListener('input', changeBrushSize);
 backgroundColorPicker.addEventListener('input', changeBackgroundColor);
 restoreBtn.addEventListener('click', restorePage);
 saveBtn.addEventListener('click', saveCanvas);