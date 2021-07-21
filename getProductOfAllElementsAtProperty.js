//OPCION-1 QUE REALICE
function getProductOfAllElementsAtProperty(obj, key) {
  let incremento= obj[key];
  let total = incremento.reduce((x,y)=>x*y);
 
 if(obj[key] && Array.isArray(obj.key) && obj[key].length){
     return total;
 	}else{
  return 0;
 }

/*    Escriba una función llamada getProductOfAllElementsAtProperty.
Dado un objeto y una key, getProductOfAllElementsAtProperty devuelve el producto de todos los elementos del array.

Notas:

Si el array está vacío, debe devolver 0.
Si la propiedad en la key dada no es un array, debe devolver 0.
Si no hay ninguna propiedad en la key dada, debe devolver 0.
var obj = {
key: [1, 2, 3, 4];
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // -> 24   */
