/**
 * Las funciones o callbacks son bloques de códigos que realizan acciones, que suelen ser llamadas
 * Durante la ejecución del código.
 *
 * Las callbacks deberán saber como manejar los parametros de exito y erro
 * Por lo mismo cuentan con la siguiente esctructura
 *
 * function estructura(exito,error){
 *      if(error){
 *          //que hago con el error
 *      }else{
 *          //que hago con el exito
 *      }
 * }
 *
 * Ejemplo:
 *
 * CallBACKs:
 * const sumar = (num1, num2) => num1 + num2
 *
 * DECLARADA:
 * function restar(num1,num2){
 *      return num1- num2
 * }
 *
 * function calcular(num1,num2,operacion){
 *      const resultado = operacion(num1,num2)
 *      return resultado
 * }
 *
 */

//Ejemplo:

//CallBACK:
const sumar = (num1, num2) => num1 + num2;

//DECLARADA:
function restar(num1, num2) {
  return num1 - num2;
}

//Declaro la función calcular, la cual tiene tres parametros, los cuales son:
function calcular(num1, num2, operacion) {
  //num1, y num2: los valores, y el parametro operación, la funcion de cálculo requerida
  const resultado = operacion(num1, num2); //Genero una constante para guardar el resultado de los valores aplicados a la operación
  return resultado; //Retorno el valor obtenido.
}

console.log(calcular(10, 5, restar));
console.log(calcular(20, 30, sumar));

// ###################### EJEMPLO DE MANEJO DE ERRORES ##########################

// Comprobamos que los valores son números
console.log(isNaN(5)); // false
console.log(!isNaN(5)); // true

// DECLARAMOS LA FUNCION QUE VA A MANEJAR LOS ERRORES

function errorMannager(error, exito) { // La función que manejará los errores consta de dos parametros
  if(error){ // Generamos un condicional para determinar la acción en caso de error, u exito.  
    console.log(`Ocurrio el error ${error}`)
  }else{
    console.log(`Resultado de la operación es  ${exito}`)
  }
}

// Declaramos las funciones que seran las operaciones 

function dividir(num1,num2,errorMannager){ // La función recibirá tres parametros, dos valores y la función manejadora de errores
  if((!isNaN(num1)) && (!isNaN(num2)) && num2 !== 0){ // En el caso de que todo este correcto ingresará en el if
    errorMannager(null,num1/num2) // Invocamos a la función manejadora de errores, anulamos el parametro error, y realizamos la operación sobre los valores
  }else{
    console.log(`Existe un error en la carga de datos`)
  }
}

function suma(num1,num2,errorMannager){
  if((!isNaN(num1)) && (!isNaN(num2))){
    errorMannager(null,num1+num2)
  }else{
    console.log(`Existe un error en la carga de datos`)
  }
}

function resta(num1,num2,errorMannager){
  if((!isNaN(num1)) && (!isNaN(num2))){
    errorMannager(null,num1-num2)
  }else{
    console.log(`Existe un error en la carga de datos`)
  }
}

function multiplica(num1,num2,errorMannager){
  if((!isNaN(num1)) && (!isNaN(num2))){
    errorMannager(null,num1*num2)
  }else{
    console.log(`Existe un error en la carga de datos`)
  }
}

function potencia(num1,num2,errorMannager){
  if((!isNaN(num1)) && (!isNaN(num2))){
    errorMannager(null,num1**num2)
  }else{
    console.log(`Existe un error en la carga de datos`)
  }
}

function calcular(num1,num2,operacion){
  operacion(num1,num2,errorMannager)
}

calcular(10,5,dividir)
calcular(10,0,dividir)

calcular(3,2,suma)
calcular(3,"b",suma)

calcular(10,5,resta)
calcular(0,5,resta)

calcular(3,2,multiplica)