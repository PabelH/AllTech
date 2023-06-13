// Obtener elementos del DOM
const audioFileInput = document.getElementById('audio-file');
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');

// Configuración del visualizador
const lineWidth = 2;
const strokeStyle = 'rgb(0, 0, 255)';

// Tamaño del lienzo
canvas.width = 600;
canvas.height = 200;

// Evento de cambio de archivo de audio
audioFileInput.addEventListener('change', function() {
  const file = audioFileInput.files[0];
  const fileReader = new FileReader();

  fileReader.onload = function() {
    const audioData = fileReader.result;
    visualizeAudio(audioData);
  };

  fileReader.readAsArrayBuffer(file);
});

// Función para visualizar el audio
function visualizeAudio(audioData) {
  // Crear contexto de audio
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Decodificar el archivo de audio
  audioContext.decodeAudioData(audioData, function(buffer) {
    // Crear fuente de audio
    const source = audioContext.createBufferSource();
    source.buffer = buffer;

    // Crear nodo de analizador
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    // Conectar nodos
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    // Iniciar reproducción del audio
    source.start(0);

    // Función de renderizado
    function renderFrame() {
      // Limpiar el lienzo
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Obtener datos de audio
      analyser.getByteTimeDomainData(dataArray);

      // Visualizar números en la consola
      console.log(dataArray);

      // Dibujar líneas
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeStyle;
      ctx.beginPath();

      const sliceWidth = canvas.width * 1.0 / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = v * canvas.height / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();

      // Llamar a la función en el próximo ciclo de animación
      requestAnimationFrame(renderFrame);
    }

    // Iniciar renderizado
    renderFrame();
  });
}
