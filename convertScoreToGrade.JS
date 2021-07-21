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

convertScoreToGrade(91);

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
