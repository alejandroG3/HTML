function apostar(){
    var a=Math.round(Math.random()*10);//Genera numero aleatorio
    document.getElementById("resultado").value=a;
    //
    var b=document.getElementById("apostado").value;
    //validar apuesta
    if (a==b){
        document.getElementById("salida").vaule="ganó apuesta";
    }else{
        document.getElementById("salida").vaule="perdió apuesta";
    }
}
function cancel(){
    document.getElementById("apostado").vaule="";
    document.getElementById("resultado").vaule="";
    document.getElementById("salida").vaule="";
}