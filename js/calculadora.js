var valorBoton; //Valor del click
var valorScreen;//Valor de todo lo de adentro
var valor3=null;//Valor guardado
var valorSuma;
var valorTotal;

$(".screen").keydown(function() {
  return false;//Para que no puedan escribir
});

//------------------------------------------------------------------------------
$('.btn').click(function() {
    valorBoton=($(this).attr("value"));//Para obtener el valor
    
    if(valorBoton=="ac"){
      ac();
    }else if(valorBoton=="+/-"){
      mas_menos();
    }else if(valorBoton=="%"){
      porcentaje();
    }else if(valorBoton=="/"){
      entre();
    }else if(valorBoton=="x"){
      multiplicacion();
    }else if(valorBoton=="-"){
      resta();
    }else if(valorBoton=="+"){
      suma();
    }else if(valorBoton=="="){
      igual();
    }else if(valorBoton==".") {
      punto();
    }else{                                                        
      $(".resultado").attr("placeholder",function(i, origValue) {//esta funcion nueva sirve para poner un numero detras del otro
          
          if(origValue==0){//Para que desaparesca el primer 0
            origValue="";
            
          }else if(origValue==valor3){
            origValue=0;
          }else{
            
          }
          valorScreen=origValue + valorBoton;
          return valorScreen;
      });
     }
    
});

//------------------------------------------------------------------------------
function ac() {
     valorScreen=0;
     valor3=null;
     $(".resultado").attr("placeholder",valorScreen);//le ponemos 0
}

function mas_menos(){
    valorScreen=valorScreen*(-1);
    $(".resultado").attr("placeholder",valorScreen);//Para que se muestre el valor
}

function porcentaje(){
    valorScreen=valorScreen/100;
    $(".resultado").attr("placeholder",valorScreen);//Para que se muestre el valor
}

function entre(){
  
}

function multiplicacion(){
  
}

function resta(){
  
}

function suma(){
    if(valor3==null){
         valor3=valorScreen;//Para obtener lo que esta escrito
         valorScreen=0;
         $(".resultado").attr("placeholder",valorScreen);//Para que se muestre el valor
      }else{
         valorSuma=parseFloat(valor3)+parseFloat(valorScreen);
         $(".resultado").attr("placeholder",valorSuma);//Para que se muestre el valor
         //Poner una condicion que diga que no se junte el nuevo valorBoton con lo anterior en valorScreen
         
      }
}

function igual(){
  if(valorBoton=="+"){
    valorTotal=valor3  +  valorScreen;
  }else if(valorBoton=="-"){
    valorTotal=valor3 - valorScreen;
  }else if(valorBoton=="x"){
    valorTotal=valor3*valorBoton;
  }else if (valorBoton=="/"){
    valorTotal=valor3/valorBoton;
  }
  
     valorScreen=0;
     valor3=null;
   $(".resultado").attr("placeholder",valorTotal);//Para que se muestre el valor
}

function punto(){
     
}



