// Array para almacenar los ingresos
let ingresos = [];

// Función para agregar un ingreso
function agregarIngreso() {
  let concepto = document.getElementById("concepto").value;
  let cantidad = document.getElementById("cantidad").value;

  if (concepto !== "" && cantidad !== "") {
    let ingreso = {
      concepto: concepto,
      cantidad: parseFloat(cantidad)
    };

    ingresos.push(ingreso);
    actualizarTablaIngresos();
    actualizarTotal();
    limpiarCampos();
  }
}

// Función para actualizar la tabla de ingresos
function actualizarTablaIngresos() {
  let tablaIngresos = document.getElementById("tablaIngresos");
  tablaIngresos.innerHTML = "";

  for (let i = 0; i < ingresos.length; i++) {
    let ingreso = ingresos[i];

    let fila = document.createElement("tr");
    let celdaConcepto = document.createElement("td");
    let celdaCantidad = document.createElement("td");

    celdaConcepto.textContent = ingreso.concepto;
    celdaCantidad.textContent = "$" + ingreso.cantidad.toFixed(2);

    fila.appendChild(celdaConcepto);
    fila.appendChild(celdaCantidad);
    tablaIngresos.appendChild(fila);
  }
}

// Función para actualizar el total
function actualizarTotal() {
  let total = 0;

  for (let i = 0; i < ingresos.length; i++) {
    total += ingresos[i].cantidad;
  }

  document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
}

// Función para limpiar los campos de entrada
function limpiarCampos() {
  document.getElementById("concepto").value = "";
  document.getElementById("cantidad").value = "";
}