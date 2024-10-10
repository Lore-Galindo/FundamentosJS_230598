//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(200,150,360,1) 0%, rgba(270,129,12,1) 33%, rgba(255,19,260,1) 90%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`


//Personalización de las salidas a consola

console.warn("Práctica 07: Arreglos en Java Script")

console.log("%c1.-Condicionales - Si/Entonces ... (IF)", style_console)

//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso 
let fechaActual=new Date();
//let fechaActual=new Date(2025,4,30);
//console.log(`Hola, la fecha de hoy es: ${fechaActual.toDateString()}`)
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`)

//Y si la necesitamos en formato local(?)

const fechaLocalMX= fechaActual.toLocaleString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
});

console.log(`en formato local (México): ${fechaLocalMX}`)

//Si es antes de las doce saluda con buenos días

if(fechaActual.getHours()<12)
    console.log(`Buenos días, hoy es ${fechaLocalMX}`)

//Existe un extensor de la sentencia if(Sí) que es else (En Caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año`)
else
    console.log(`Estas en la segunda mitad del año.`)


//que pasa si la validación tiene varias operaciones 
const anio= fechaActual.getFullYear()
let inicioPrimavera= new Date(anio, 2, 21);
let inicioVerano= new Date(anio, 5, 21);
let inicioOtonio= new Date(anio, 8, 23);
let inicioInvierno= new Date(anio, 11, 21);
let estacion;
let horarioVerano= false;

if(fechaActual>= inicioPrimavera && fechaActual< inicioVerano)
{
    console.log("Estamos en PRIMAVERA...")
    console.log("Inicia la Floracion de muchas plantas...")
    console.log("Los dias son mas largos y las noches mas cortas...")
    console.log("Muchos animales despiertan de la inbernacion")
    console.log()
    estacion="Primavera" 
    horarioVerano=true; 

}
else if(fechaActual>= inicioPrimavera && fechaActual< inicioVerano)
{
    console.log("Estamos en VERANO...")
    console.log("En esta temporada los abundan los dias sopleados y calurosos...")
    console.log("En esta tem,porada el indioce de turismo vacacional sube...")
    console.log("Mucha gente busca realizar actividades al aire...")
    console.log()
    estacion="Verano" 
    horarioVerano=true;

}
else if(fechaActual>= inicioOtonio && fechaActual< inicioInvierno)
    {
        console.log("Estamos en OTOÑO..")
        console.log("Los arboles suleln cambiar de follaje...")
        console.log("se registran temperaturas mas templadas...")
        console.log("Los animales comienzan con la recoleccion de alimento y preparan sus espacios para la inbernacion, incluso algunas aves migran...")
        console.log()
        estacion="Otono" 
        horarioVerano=true;
    
    }
else
{
    console.log("Estamos en Invierno...")
    console.log("En esta temporada los dias son mas cortos y las ñocxhes mas largas...")
    console.log("En algunas regiones sule nevar ...")
    console.log("Dado las bajas temperaturas,se recomienda abrigarse")
    console.log()
    estacion="Invierno" 
    horarioVerano=false;
}

console.log("%c2.-Oporador Ternario (validacióncumple:no_cumple)", style_console)
//En javaScript existe una operacion simplificada que valida si una condicion se cumple o no, ty que hacer en cada caso 

const edadPersona = 18;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;

let evaluarMayoriaEdad = (edad) =>
    edad>=18 ? "Eres mayor de edad." : "No eres mayor de edad."

console.log("Evaluando la mayoria de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar qiue la mayoria de edad varia en cada pais por cuestiones legale, por lo que debemos considerar un segundo parametro en la evaluacion.
evaluarMayoriaEdad = (edad,pais)=> 
    (edad>=18 && pais==="MX")? `En ${pais} eres mayor de edad `:`En ${pais} NO eres mayor de edad `;

console.log("Evaluando la mayoria de edad de una persona en Mexico...")
console.log(evaluarMayoriaEdad(edadPersona,"MX"));

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos...")
console.log(evaluarMayoriaEdad(edadPersona,"US"));

console.log("%c3.-SWICH - CASE (Eleccion por valor definido) ", style_console)

//calculando tu generacion en base a tu edad 
let anioNacimiento = 2003;

function determinarGeneracion(anio) {
    switch (true) {
        case (anio < 1968):
            return "Baby Boomers";
        case (anio >= 1968 && anio <= 1980):
            return "Generación X";
        case (anio > 1980 && anio <= 1993):
            return "Generación Y (Millennials)";
        case (anio > 1993 && anio <= 2010):
            return "Generación Z";
        default:
            return "Generación Alpha o posterior";
    }
}

console.log(determinarGeneracion(anioNacimiento));

console.log("%c4.Manejo de Excepciones  (TRY / CATCH) ", style_console)

//En algunasocasiones existiran errores que no son culpas del programa,si no del usuario.la red,el so e incluuso del programa, o incluso de un middleware.pero que si duda debemos controlar para evitar las fallas de ejecucion.
 
console.log("Intentamos dividir el resultado es: ")
try{//intenta
let result= 0/10 //dividri un entero entre 0
console.log(result)
}
catch(error)
{
    console.log("ocurrio un error"+error.message);
}
 
console.log("Intentamos dividir el resultado es:")
try{//intenta
let result= 10/0 //dividri un entero entre 0
console.log(result)
}
catch(error)
{
    console.log("ocurrio un error"+error.message);
}
 
console.log("Intentamos dividir \"a\"/0 el resultado es: ")
try{//intenta
let result= "a"/0 //dividri un entero entre 0
console.log(result)
}
catch(error)
{
    console.log("ocurrio un error"+error.message);
}
 
console.log("Intentamos dividir ")
try{//intenta
let result= a / 10; //dividri un entero entre 0
console.log(result)
}
catch(error)
{
    console.log("ocurrio un error"+error.message);
}

 
console.log("Intentamos dividir :el valor de la variable x / entre el valor de la variable y,el resultado es: ")
try{//intenta
let x=8,y=2,result=x/y; //dividir dos variables definidas
console.log(result)
}
catch(error)
{
    console.log("ocurrio un error"+error.message);
}

console.log("%c5.Controlde ciclos (BREAK / CONTINUA )) ", style_console)
//eN ALGUNAS OCASIONES SERA IMPORTANTE DETENER UN CICLO DE MANERA ABRUPTA PARA CONTROLAR CASOS ESPECIALES EN UN CICLO ...
console.log ("vamos a contar 1 al 10.....")
for(let num=1; num <=10; num++)
    console.log(num);


console.log("Ahora necesitamos que si llegas al 7 pares de contar... supóniendo que solo por hoy es de mala suerte...")

for (let num=1; num<=10;num++)
    if(num==7)
        break;
    else
    console.log(num);

console.log("Ahora necesitamos saber si llegas al 7 te saltes ese numero y continues")

for (let num=1; num<=10;num++)
        if(num==7)
            continue;
        else
        console.log(num);
console.log("%c5.Ciclo Iterativo - (FOR) )) ", style_console)

//Recorre de manera iterativa (i,de incremental o decremetal)

console.log("Los dias de la semana son en orde ascendente son:")
let dias =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

for (let i =0;i<dias.length;i++)
    console.log(dias[i])

console.log("Ahora vamos a imprimir los meses en orden descendentes..")
const meses=[]





    




