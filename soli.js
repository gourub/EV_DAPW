function obtenerdatos() {
    var nombre = document.getElementById('nombre').value;
    var cadena = "";
    document.registro.nombreobtenido.value = nombre;
    
    if (document.getElementById('radio1').checked) {
        var estado = "Casado(a)";
        document.registro.estadocivil.value = estado;
    }
    
    if (document.getElementById('radio2').checked) {
        var estado = "Soltero(a)";
        document.registro.estadocivil.value = estado;
    }
    
    if (document.getElementById('radio3').checked) {
        var estado = "Otro";
        document.registro.estadocivil.value = estado;
    }

    var sub1 = document.getElementById('check1');
    var sub2 = document.getElementById('check2');
    var sub3 = document.getElementById('check3');
    var sub4 = document.getElementById('check4');
    var result = "";

    if (sub1.checked) {
        var ss1 = sub1.value;
        result = ss1;
    }

    if (sub2.checked) {
        var ss2 = sub2.value;
        result = result + "," + ss2;
    }

    if (sub3.checked) {
        var ss3 = sub3.value;
        result = result + "," + ss3;
    }

    if (sub4.checked) {
        var ss4 = sub4.value;
        result = result + "," + ss4;
    }

    document.registro.tushabilidades.value = result;

    var dato = document.getElementById("tienda");
    var suc = dato.options[dato.selectedIndex].value;

    document.registro.tusucursal.value = suc;
}