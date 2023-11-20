function operaciones (op){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;

    if(isNaN(parseFloat(document.getElementById('num1').value))){
        document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número </span>"
        document.getElementById("num1").innerText="0"
        document.getElementById("num1").focus()
    }
    else if (isNaN(parseFloat(document.getElementById('num2').value))){
        document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número</span>"
        document.getElementById("num2").innerText="0"
        document.getElementById("num2").focus()
    }
    else{
        switch (op){
            case 'sumar':
                var resultado=parseInt(num1)+parseInt(num2)
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>"
                break
            case 'restar':
                var resultado = num1-num2
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>"
                break
            case 'multiplicar':
                var resultado = num1*num2
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>"
                break
            case 'dividir':
                var resultado = num1/num2
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>"
                break
                case 'al cuadrado':
                    var resultado = num1*num1
                    document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>"
                    break
        }
    }
}