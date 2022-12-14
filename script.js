//METODOS STRINGS
/*
//.toUpperCase()
var cadena = "El método toUpperCase convierte todos los caracteres de la cadena en mayúsculas"
console.log(cadena.toLocaleUpperCase());

//.toLowerCase()
cadena = "El método toLowerCase convierte todos los caracteres de la cadena en minúsculas"
console.log(cadena.toLocaleLowerCase());

//.trim()
cadena = "    El método trim elimina los espacios en blanco inicia y final de la cadena  "
console.log(cadena.trim());

//.charAt(index)
cadena = "El método charAt devuelve el caracter en el índice dado"
console.log(cadena.charAt(3));

//.slice(startIndex, endIndex)
cadena = "El método slice devuelve la subcadena de la cadena de startIndex a endIndex (no incluído)"
console.log(cadena.slice(2,40));

//.substring(startIndex, length)
cadena = "El método substring acepta la longitud de la subcadena que debe extraerse de la cadena original"
console.log(cadena.substring(5,20));

//.replace(substring, newSubstring)
cadena = "El método replace reemplaza la primera instancia de la subcadena con una nuevaSubCadena"
console.log(cadena.replace("El método replace", "Replace"));

//.split(substring)
cadena = "El método split divide la cadena dada en la subcadena y devuelve las partes como una matriz"
console.log(cadena.split("e"));

//.startsWith(value)
cadena = "Este método indica si una cadena de texto comienza con los caracteres de una cadena de texto concreta, devuelve T o F"
console.log(cadena.startsWith("Este"));

//combinación de métodos
cadena = "  Todos los métodos pueden ser combinados entre sí para obtener el resultado esperado  "
console.log(cadena.trim().toLocaleUpperCase().split(" "));

//Ejercicio JS8
var cadena = "       eStoy en El moduLo tres DEL curso de JavAscrip     "
console.log(cadena.trim().toLocaleLowerCase().replace("estoy","Estoy").replace("modulo","módulo").replace("tres",3).replace("javascrip", "JavaScript"));

var numbers = "3,8,9,8.65,3.6965378,9"
var arrayNumbers = numbers.split(",");
console.log(arrayNumbers);
var arrayFloats = []
for(let i=0; i < arrayNumbers.length; i++){
    arrayFloats.push(parseFloat(arrayNumbers[i]).toFixed(2))
}
console.log("arrayFloats", arrayFloats) 
console.log(`El valor máximo es: ${Math.max(...arrayFloats)}`);
console.log(`El valor mínimo es: ${Math.min(...arrayFloats)}`);
console.log(`Orden ascendente [${arrayFloats.sort()}]`);
console.log(`Orden descendente: [${arrayFloats.reverse()}]` );

//METODOS DE NUMBERS

//.parseInt("string") - convierte a entero sin decimales
var num = "123456"
console.log(parseInt(num));

//.parseFloat("string") - convierte a entero con decimales
num = "1223.232"
console.log(parseFloat(num));

//.Number("string") - convierte a número indéntico
num = "1545.234"
console.log(Number(num));

//.isNan(value) - True si no es un número - False si es número
console.log(isNaN(1255))
console.log(isNaN("ankjd"))

//.toFixed(cantidadDecimales) - Muestra la cantidad de decimales q le indico
num = 69745.254887
console.log(num.toFixed(3));

//OBJETO MATH

//.min()
console.log(Math.min(5,6,9,2,7,5,7));

//.max()
console.log(Math.max(25,97,64,5,36,101));

//.random()
console.log(Math.random());

//.ceil() - redondea hacia arriba
console.log(Math.ceil(2547.23));

//.floor() - redondea hacia abajo
console.log(Math.floor(12154.645))

//.round() - redondea hacia el entero más próximo
console.log(Math.round(2157.2545));

//METODOS DATE

//.now()
console.log(Date.now());

//.parse()
console.log(Date.parse(12-01-2210));

//.UTC()
var date = new Date(Date.UTC(2020,10,2,12,25,30,10))
console.log(date);

//.getDate()
const cumpleaños = new Date('12, 24, 1987');
console.log(cumpleaños.getDate());

//.getDay() - day of the week
const cumple = new Date('05, 11, 1983');
console.log(cumple.getDay());

//.getFullYear()
date = new Date('07, 20, 69 00:20:18');
console.log(date.getFullYear());

//.getMilliseconds()
date = new Date('07, 20, 69 00:20:18:30');
console.log(date.getMilliseconds());

//.getMinutes()
date = new Date('07, 20, 69 00:20:18:20');
console.log(date.getMinutes());

//.getSeconds()
date = new Date('07, 20, 69 00:20:18:20');
console.log(date.getSeconds());

//.getTime()
date = new Date('07, 20, 69 00:20:18:20');
console.log(date.getTime());*/

//JS7 APLICANDO LOGICA II

const array =  [541, 57, 5484, 875.2547, 21102, 14.54, 647.1, 1215.01, 0, 1470];
const btnMap = document.getElementById("btn-map");
const btnForeach = document.getElementById("btn-foreach");
const btnFilter = document.getElementById("btn-filter");
const btnSort = document.getElementById("btn-sort");
const result = document.getElementById("result");

//MAP
btnMap.addEventListener("click", (event) =>{
    const stringsArray = array.map(function(element){
        return `</br> ${element.toFixed(1)}`;
    })
    console.log(stringsArray)
    result.innerHTML = stringsArray;
})

//FOREACH
btnForeach.addEventListener("click", (event) => {
    var arrayFor = []
    array.forEach(function(element, index, array){
        console.log(`Element[${index}]: ${Math.ceil(element)}`)
        arrayFor.push(`</br> Element[${index}]: ${Math.ceil(element)}`)
    });    
    result.innerHTML = arrayFor
})

//FILTER
btnFilter.addEventListener("click", () =>{
    const arrayFilter = array.filter(entero => entero > 500);
    console.log(arrayFilter);
    result.innerHTML = arrayFilter;
})

//SORT
btnSort.addEventListener("click", () =>{
    array.sort(function(a, b){
        return a -b;
    });
    console.log(array);
    result.innerHTML = array;
});