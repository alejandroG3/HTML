//fuction prefer : turnos preferenciales 
function prefer(){
    let num=1;
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("Ingrese nombre usuario....");
        if (nomuser!==null){
            var n=num.toString().padStart(2, '0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;
        }else{
            alert("Error en turno...");
            break;
        }
    }
}
//fuction user : turnos generales 
function user(){
    let num=1;
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("Ingrese nombre usuario....");
        if (nomuser!==null){
            var n=num.toString().padStart(2, '0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"A"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;
        }else{
            alert("Error en turno...");
            break;
        }
    }
}