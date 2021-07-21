function convertScoreToGrade(score) {
let mensaje=  'PUNTUACION INVALIDA';
(score >100) ? return mensaje:"";
(score >=90 - 100) ? return 'A' :"";
(score >=80 - 89) ? return 'B':"";
(score >=70 - 79) ? return 'C':"";
(score >=60 - 69) ? return 'D':"";
(score >=0 - 59) ? return 'F':"";
(score <0) ?return  mensaje:"";
}

console.log("resultado", convertScoreToGrade(91)); // Es necesario mandar a llamar a la función e imprimir en console

/*  Escribe una función llamada convertScoreToGrade.
Dada una puntuación, convertScoreToGrade devuelve una cadena que representa el grado de letra correspondiente a la puntuación dada.

Notas:

(100 - 90) -> 'A'
(89 - 80) ->' B '
(79 - 70) -> 'C'
(69 - 60) -> 'D'
(59 - 0) -> 'F'
Si la puntuación dada es mayor que 100 o menor que 0, debe devolver 'PUNTUACION INVALIDA'.
var output = convertScoreToGrade(91);
console.log(output); // -> 'A'  */



/*
CONSEJO 1: (score >100) esta bien,
indicas que sí score es mayor o igual a 100 regresas mensaje y si no "" (vacío)
por cosa de sintaxis, return debe ser alprincipio de cada operación ternaria, así: return (score >100) ? mensaje:"";
pero si eso se hace con todas las demás condiciones, saldrá un error porque debe existir un return por función.
Ejemplo de lo que no se permite al usar un operador ternario:
return (score >100) ? "mensaje 1":"";
return (score <=100) ? "mensaje 2":"";
 Para resolver lo anterior se usa el if tradicional y para usar return en distintos casos:
if (score >100) {
return "mensaje 1"
}
if (score <=100) {
    return "mensaje 2" 
}
 CONSEJO 2: 
 En el caso de los siguientes intervalos, la forma en que los escribes es:
 (score >=90 - 100), donde del lado izquierdo de >= tienes a score y del lado derecho una resta 90-100, osea -10
 al final tu condiciones es: score >= -10
 Para resolver esto tienes que contemplar que score se encuentra en un intervalo entre un número X y un número Y.
 entonces score estaría en medio:
 X <= score <= Y
 Score se encuentra entre X y Y.
 Y es el límite mayor 
 X es el límite menor.
 
*/