//Variables//
// Turno 0 / empieza persona
var persona = 'x';   
// Turno 1 /computadora y su decision de movimiento
var computer = 'o'; 
var movimientoComputadora;
// Cambia entre turnos
var turno = 0;       
//Funcion que checa el valor de cada celda
var checadorTablero;  
// Variables que guardan el valor de cada celda  
var a1;           
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;
//Funcion que checa el tablero para decidir la lina ganadora
var checoGanador; 
//Verdadero si X gana
var xGanador = false; 
//Verdadero si O gana
var oGanador = false; 
//Funcion que declara el ganador y reinicia el juego
var GanadorAlert; 
//Nuevo juego
var Juego;
//Limpieza del tablero
var limpiarTablero;
//Cuando se hace click en una casilla del tablero aparece una X y su respuesta que es una O
var Juego = function () {
    $('td').one('click', function (event) {
        if (turno == 0) {
            $(this).text(persona);
            checadorTablero();
            checoGanador();
            turno == 1;
            movimientoComputadora();
            checadorTablero();
            checoGanador();
        }
    });
};
//Iniciar Juego
$(document).ready(function () {
    Juego();
});
//Movimiento de la Computadora: Detecta si hay dos en una fila al lado a una celda vacía y lugares para trasladarse allí
var movimientoComputadora = function () {
    if (a1 == "" && ((a3 == "x" && a2 == "x") || (c3 == "x" && b2 == "x") || (c1 == "x" && b1 == "x"))) {
        $('#a1').text("o");
        turno = 0;
    } else {
    if (a2 == "" && ((a1 == "x" && a3 == "x") || (c2 == "x" && b2 == "x"))) {
        $('#a2').text("o");
        turno = 0;
    } else {
    if (a3 == "" && ((a1 == "x" && a2 == "x") || (c1 == "x" && b2 == "x") || (c3 == "x" && b3 == "x"))) {
        $('#a3').text("o");
        turno = 0;
    } else {
    if (c3 == "" && ((c1 == "x" && c2 == "x") || (a1 == "x" && b2 == "x") || (a3 == "x" && b3 == "x"))) {
        $('#c3').text("o");
        turno = 0;
    } else {
    if (c1 == "" && ((c3 == "x" && c2 == "x") || (a3 == "x" && b2 == "x") || (a1 == "x" && b1 == "x"))) {
        $('#c1').text("o");
        turno = 0;
    } else {
    if (c2 == "" && ((c3 == "x" && c1 == "x") || (a2 == "x" && b2 == "x"))) {
        ('#c2').text("o");
        turno = 0;
    } else {
    if (b1 == "" && ((b3 == "x" && b2 == "x") || (a1 == "x" && c1 == "x"))) {
        $('#b1').text("o");
        turno = 0;
    } else {
    if (b3 == "" && ((a3 == "x" && c3 == "x") || (b2 == "x" && b1 == "x"))) {
        $('#b3').text("o");
        turno = 0;
    } else {
    if (b2 == "" && ((a3 == "x" && c1 == "x") || (c3 == "x" && a1 == "x") || (b3 == "x" && b1 == "x") || (c2 == "x" && a2 == "x"))) {
        $('#b2').text("o");
        turno = 0;
    } else { 
    if (b2 == "") {
        $('#b2').text("o");
        turno = 0;   
    } else {
    if (a1 == "") {
        $('#a1').text("o");
        turno = 0;                               
    } else {
    if (c3 == "") {
        $('#c3').text("o");
        turno = 0;                             
    } else {
    if (c2 == "") {
        $('#c2').text("o");
        turno = 0;    
    } else {
    if (b1 == "") {
        $('#b1').text("o");
        turno = 0;
    }
       }
           }
                }
                    }
                       }
                           }
                            }
                        }
                    }
                }
            }
        }
    }   
};
// Funcion que detecta que caja se llena en cada movimiento//
checadorTablero = function () {
    a1 = $('#a1').html();
    a2 = $('#a2').html();
    a3 = $('#a3').html();
    b1 = $('#b1').html();
    b2 = $('#b2').html();
    b3 = $('#b3').html();
    c1 = $('#c1').html();
    c2 = $('#c2').html();
    c3 = $('#c3').html();
};
//Checando condiciones para ganar//
checoGanador = function () { 
    if ((a1 == a2 && a1 == a3 && (a1 == "x")) || //Primer renglon
    (b1 == b2 && b1 == b3 && (b1 == "x")) ||     //Segudo renglon
    (c1 == c2 && c1 == c3 && (c1 == "x")) ||     //Tercer renglon
    (a1 == b1 && a1 == c1 && (a1 == "x")) ||     //Primera columna
    (a2 == b2 && a2 == c2 && (a2 == "x")) ||     //Segunda columna
    (a3 == b3 && a3 == c3 && (a3 == "x")) ||     //Tercera columna
    (a1 == b2 && a1 == c3 && (a1 == "x")) ||     //Diagonal 1
    (a3 == b2 && a3 == c1 && (a3 == "x"))        //Diagonal 2
    ) {
        xGanador = true;
        GanadorAlert();
    } else { 
        if ((a1 == a2 && a1 == a3 && (a1 == "o")) || //Primer renglon
        (b1 == b2 && b1 == b3 && (b1 == "o")) ||     //Segudo renglon
        (c1 == c2 && c1 == c3 && (c1 == "o")) ||     //Tercer renglon
        (a1 == b1 && a1 == c1 && (a1 == "o")) ||     //Primera columna
        (a2 == b2 && a2 == c2 && (a2 == "o")) ||     //Segunda columna
        (a3 == b3 && a3 == c3 && (a3 == "o")) ||     //Tercera columna
        (a1 == b2 && a1 == c3 && (a1 == "o")) ||     //Diagonal 1
        (a3 == b2 && a3 == c1 && (a3 == "o"))        //Diagonal 2
        ) {
            oGanador = true;
            GanadorAlert();
//Checando que todas las celdas esten llenas//
        } else { 
            if (((a1 == "x") || (a1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((c1 == "x") || (c1 == "o")) && ((a2 == "x") || (a2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((c2 == "x") || (c2 == "o")) && ((a3 == "x") || (a3 == "o")) && ((b3 == "x") || (b3 == "o")) && ((c3 == "x") || (c3 == "o"))) {
                alert("Gato encerrado :P!");
            }
        }
    }
};
//Ganador//
var GanadorAlert = function () {
    if (xGanador == true) {
        alert("Ganaste c:!");
    } else {
        if (oGanador == true) {
            alert("Perdiste :c!");
        }
    }
};
//Boton "Nuevo Juego"/Limpia la pantalla, reiniciando el juego//
var limpiarTablero = $('#restart').click(function (event) {
    a1 = $('#a1').text("");
    b1 = $('#b1').text("");
    c1 = $('#c1').text("");
    a2 = $('#a2').text("");
    b2 = $('#b2').text("");
    c2 = $('#c2').text("");
    a3 = $('#a3').text("");
    b3 = $('#b3').text("");
    c3 = $('#c3').text("");
    xGanador = false;
    oGanador = false;
    Juego();
    location.reload(); 
});
