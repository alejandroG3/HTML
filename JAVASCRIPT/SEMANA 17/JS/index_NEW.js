function openMenu(){
    document.getElementById("mainMenu").style.width="480px"; //vista celular
    document.getElementById("mainMenu").style.display="flex"; //vista celular
    document.getElementById("mainMenu").style.height="1000px"; //vista celular
    document.getElementById("openmenu").style.display="none"; //vista celular
}
function closeNav(){
    document.getElementById("mainMenu").style.width="0px";//cerrar vista celular
    document.getElementById("mainMenu").style.transition="0.9s all";//cerrar vista celular
    window.location.reload();
}