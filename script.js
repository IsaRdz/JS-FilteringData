//METODOS STRINGS

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
