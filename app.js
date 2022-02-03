/*1. Las variables A y B contienen enteros. Intercambiar el contenido de A y B sin utilizar
una variable temporal.
2. Definir una función que imprima los números impares entre 1 y 99.
3. Definir una función que acepte dos parámetros. Una cadena de caracteres (string) y un
caracter. Esta función deberá devolver la cantidad de veces que el “caracter” se
encuentra en la “cadena” provista. Ejemplo, si a la función se le pasara la cadena
“abracadabra” junto con el carácter “a”, la función deberá devolver 5.
4. Definir una función que imprima números enteros de 1 a 100. Para los números
múltiplos de 3, deberá imprimir la palabra “abra” en lugar del número. Para los
múltiplos de 5, deberá imprimir la palabra “cadabra”. Para los números múltiplos de 3
y de 5, deberá imprimir la palabra “abracadabra”.
5. Definir una función que reverse los caracteres de una cadena.*/

//1
/*Las variables A y B contienen enteros. Intercambiar el contenido de A y B sin utilizar
una variable temporal.*/

//Forma 1:
let a=2;
let b=4;
console.log(a);
console.log(b);
[a,b] = [b,a];
console.log(a);
console.log(b);
/*Explicacion: en este caso uso desestructuracion para desempacar los valores de un vector que forme con
las variables a y b, pero no me parece una solucion correcta porque estaría usando justamente al vector
como un auxiliar.*/

//Forma 2:
let c=2;
let d=4;
console.log(c);
console.log(d);
c = c+d;
d = c-d;
c = c-d;
console.log(c);
console.log(d);
/*Explicacion: aqui aplico una lógica aritmetica para solucionar sin la necesidad de usar una variable
auxiliar.*/

//Fin del 1

//2
/*Definir una función que imprima los números impares entre 1 y 99.*/

function impares(){
    for (let index = 1; index <= 99; index= index +2) {
        console.log(index);   
    }
}
impares();

/*El razonamiento tras la funcion: Hago un ciclo for en donde la particularidad del ciclo 
es que la variable "index" que uso para mostrar también los números, la sumo de dos en dos
para que siempre sea impar.
//Fin del 2

//3
/*3. Definir una función que acepte dos parámetros. Una cadena de caracteres (string) y un
caracter. Esta función deberá devolver la cantidad de veces que el “caracter” se
encuentra en la “cadena” provista. Ejemplo, si a la función se le pasara la cadena
“abracadabra” junto con el carácter “a”, la función deberá devolver 5.*/

function contadorCaracter(cadena, caracter){
    //cadena = "abracadabra";
    //caracter= "a";
    console.log(cadena.length);
    let bandera=0;
    for (let index = 0; index <= cadena.length; index++) {
        if (cadena[index]==caracter) {
            bandera++;
            console.log(bandera);
        }
    }
    console.log("La cantidad de veces que el caracter:"+caracter+" se encuentra en la cadena "+cadena+" es: "+ bandera)
    }
contadorCaracter("abracadabra","a");

/*El razonamiento tras la funcion: Ingreso una cadena de caracteres y un caracter. Implemento un ciclo for
cuyo limite es el largo de la cadena de caracteres y analizo con un if si coincide el caracter extraido
con el caracter ingresado para sumarlo al contador que es la bandera. En una primera version del codigo
se usan las variables como pruebas pero en la refactorizacion se usan correctamente dentro de los parametros
de la funcion.*/
//Fin del 3

//4
/*4. Definir una función que imprima números enteros de 1 a 100. Para los números
múltiplos de 3, deberá imprimir la palabra “abra” en lugar del número. Para los
múltiplos de 5, deberá imprimir la palabra “cadabra”. Para los números múltiplos de 3
y de 5, deberá imprimir la palabra “abracadabra”.*/

function imprimir(){
    let i=1;
    while (i<=100) {
        if (i%3==0 && i%5==0) {
            console.log("En posicion: "+ i + " abracadabra");
        }
        else{
        if (i%3==0) {
            console.log("En posicion: "+ i + " abra");
        }
        if (i%5==0){
            console.log("En posicion: "+ i + " cadabra");
        }}
        i++; 
    }
}
imprimir();

/*El razonamiento tras la funcion: Uso un ciclo while para controlar que mi numero i no sobrepase 100.
Uso el condicional if para los casos en los que "i" es multiplo de 3 y 5, para ello uso el operador resto. 
Si no ocurre, dentro de else uso nuevamente if's para cada caso.
Imprimo las palabras solicitadas.*/
//Fin del 4


//5
/*Definir una función que reverse los caracteres de una cadena.*/

function reverse(cadena){
    //let cadena = "Taza";
    let posicion = cadena.length-1;
    let inverso="";
    //console.log(cadena.length);
    for (let index = 0; index < cadena.length; index++) {
        //console.log(cadena[index]);
        inverso= inverso + cadena[posicion];
        posicion--;
        
    }
        console.log("La palabra es: "+cadena + " y el inverso es: "+ inverso);
    }
reverse("taza");

/*El razonamiento tras la funcion:calculo la posicion de cada caracter en base al largo de la cadena.
Aplico un ciclo for para obtener cada caracter de la cadena y lo concateno al "inverso" para formar 
la palabra al reves. Por ultimo muestro la cadena y su reverso.*/
//Fin del 4