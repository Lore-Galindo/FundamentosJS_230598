// Repaso de Arreglos

const { warn } = require("vue");

 


 //Estilizacoion de los mensajes de salida 
 const bg= "linear-gradient(11deg, rgba(199) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
 const style_console=`background: ${bg}; color: white;
 border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight:bold`

 //Personalizacion de las salidas a consola

 console.warn("Practica 06: Arreglos en Java Script")

 //Para declarar un arreglo (array)de datos de JavaScrip basta con agregar [] ,y dentro loas datos que contendra el arreglo.
 const mesesAnio=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septirmbre","Octubre","Nomviembre","Diciembre"]
 console.log("%c1. - Declaracion de un Arreglo(Array) ", style_console);

 console.log(mesesAnio)
 console.table(mesesAnio)


 //Acceder a los valore de un arreglo de datos para acceder al valor solo basta enviar la posicion de4l dato que queremos dentro de los limites establecidos,siendo el limite inferior 0 y el superior tamaño -1
 console.log("%c2. - Leer o recuperar los datos de un arreglo", style_console);
 console.log(`El primer mes del año es : ${mesesAnio[0]}`)
 console.log(`El ultimo mes del año es : ${mesesAnio[mesesAnio.length-1]}`)
 console.log(`El treceavo mes del año en la posicion es  : ${mesesAnio[12]}`)

 console.log(`¿Que tipo de dato es un arreglo ?: ${typeof(mesesAnio)}`)

 //Al ser JavaScrip un lenguaje debilmente tipado podremos crear arreglos mixtos de tipo de Dato

 let arregloMixto = ["String",5,45.26,-200,-200, -.16854, Symbol ("MARH"), 'z', false, BigInt(11112222333334444555556666667777), true , {latitud: "20° 18' 0\" N", longitud: "97° 58' 00\" w",altitud:796}, saludar, null]

 //

 //Mostramos el contenido del objeto
 console.log(arregloMixto)
 console.log(arregloMixto)
 console.log(typeof(arregloMixto))

 console.log("Verificamos los tipos de datos de los elementos del arreglo:")
 
 console.log(`El dato en la posicion[0] = ${arregloMixto[0]} y es DEL TIPO: ${typeof(arregloMixto[0])}`);
 console.log(`El dato en la posicion[1] = ${arregloMixto[1]} y es DEL TIPO: ${typeof(arregloMixto[1])}`);
 console.log(`El dato en la posicion[2] = ${arregloMixto[2]} y es DEL TIPO: ${typeof(arregloMixto[2])}`);
 console.log(`El dato en la posicion[3] = ${arregloMixto[3]} y es DEL TIPO: ${typeof(arregloMixto[3])}`);
 console.log(`El dato en la posicion[4] = ${arregloMixto[4]} y es DEL TIPO: ${typeof(arregloMixto[4])}`);
 console.log(`El dato en la posicion[5] = ${arregloMixto[5].toString} y es DEL TIPO: ${typeof(arregloMixto[5])}`);
 console.log(`El dato en la posicion[6] = ${arregloMixto[6]} y es DEL TIPO: ${typeof(arregloMixto[6])}`);
 console.log(`El dato en la posicion[7] = ${arregloMixto[7]} y es DEL TIPO: ${typeof(arregloMixto[7])}`);
 console.log(`El dato en la posicion[8] = ${arregloMixto[8]} y es DEL TIPO: ${typeof(arregloMixto[8])}`);



