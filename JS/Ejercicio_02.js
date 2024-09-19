// Tipos de datos en JS

 // 1.Undefinef - (NULL)

 console.warn("---tipo de dato UNDEFIEND")
 let cliente;
 console.log(`El cliente es: ${cliente}`);
 console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

 cliente = "Juan Romero"
 console.log(`El cliente es: ${cliente}`);
 console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
 
 cliente = 19227
 console.log(`El cliente es: ${cliente}`);
 console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

 //console.log(`El cliente ha realizado ${NumCompras} en este mes `);


 // undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no  declaradas 

 // 2. BOOLEAN -Boleanos -TRUE/FALSE (Falso/verdadero)

 console.warm("--- Tipo de Dato : BOOLEAN (Boleano - True/ False)")
 let esPremium = "No lo se";
 console.log(`¿Es el clieny premium? : ${esPremium} `)
 console.log(`El tipo de dato de la variable es Premium es : ${typeof(esPremium)}`);

console.log("Asignando el valor true a la variable. ")
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor true a ala variable. ")
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log("Cambiando l valor de esPremium a false ")
esPremium=0

if(esPremium)
    console.log("El cliente pago por usar el servicio")
else
console.log("El cliente recibe los servicios gratuitos");


// 3.NUMBER (Números)
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion ;

console.warn("--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimales, flotantes");
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`)
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar: ${cantidad} de productos.`)
console.log(`El importe total de la compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta= saldo_cuenta - (cantidad*costo_producto);
// El cliente realiza un abopno de 1500
monto_transaccion=1500;
console.log_(`Tu abono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de : ${(saldo_cuenta+monto_transaccion)}`);

//4. STRING(Cadena de Caracteres)
const alumno ="Lorena Citlalli Galindo"
let producto;

console.warn("--- Tipo de Dato -STRING (cadena de caracteres )");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)})`);

//Inicializaremos le valñor de la variable producto 
producto = "MONITOR 20\" FULL HD"
console.log(`El nombre del PRODUCTO es: ${producto}, que es un tipo de dato ${typeof(producto)})`);

//Manipulacion los SRINGS
console.log(`Mas adelante podremos transformar el contenido de los STRING usando los metodos y 
    funciones especificas, como convertir su valor a mayusculas: ${alumno} => ${alumno.toUpperCase()}`);
    console.log(`o en su defecto minusculas : ${alumno} => ${alumno.toLowerCase()}`);

    //5.BIGINT (Numero de mayor Amplitud)

    console.warn("--- Tipo de Dato - BIGINT (Numero Amplio");
    const numeroGrande=1234567890
    const numeroGrande2=12345678901234567890
    const numeroGrande3=123456789012345678901234567890
    let numeroGrande4=1234567890123456789012345678901234567890
   

    
        console.log(`El primer experimento de un numero grande es: ${numeroGrande} 
        que si es soportando por NUMBRE, y su tipo de dato es: ${typeof(numeroGrande)}`)
    
        console.log(`El primer experimento de un numero grande es: ${numeroGrande2} 
        que si es soportando por NUMBRE, y su tipo de dato es: ${typeof(numeroGrande2)}`)
    
        console.log(`El primer experimento de un numero grande es: ${numeroGrande3} 
        que si es soportando por NUMBRE, y su tipo de dato es: ${typeof(numeroGrande3)}`)
    
        console.log(`El primer experimento de un numero grande es: ${numeroGrande4} 
        que si es soportando por NUMBRE, y su tipo de dato es: ${typeof(numeroGrande4)}`)

        numeroGrande3=BigInt(123456789012345678901234567890);
        console.log(`El quinto experimento de un numero grande es : ${numeroGrande3},
        que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande3)}`)

         numeroGrande3=BigInt(1234567890123456789012345678901234567890);
        console.log(`El quinto experimento de un numero grande es : ${numeroGrande4},
        que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande4)}`)
    




 
