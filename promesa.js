// ########################## MANEJO DE ERRORES CON PROMESAS ###################################

function dividirConPromesas(num1, num2) {
  return new Promise((resolve, reject) => {
    // Declaro una nueva promesa la cual tiene dos parametros, que hago si revuel, que hago si rechazo.
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
      resolve(`El resultado de la división es ${num1 / num2}`);
    } else {
      reject(`Los valores num1: ${num1}, o num2: ${num2}, no son correctos`);
    }
  });
}

// En la siguiente function calcular() incluiremos las palabras claves async y await, lo cual nos permitira devolver una promesa.
// Tambien incluiremos los bloques de código try, catch, donde try se ejecuta si todo esta bien, y catch atrapa el error.

async function calcular(num1, num2, operacion) {
  try {
    console.log(await operacion(num1, num2));
  } catch (error) {
    console.log(error);
  }
}

calcular(10, 0, dividirConPromesas);
