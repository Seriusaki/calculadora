var valor1; //Valor del click
var valor2;//Valor de todo lo de adentro
var valor3=null;//Valor guardado
$(".screen").keydown(function() {
  return false;//Para que no puedan escribir
});

$('.btn').click(function() {
    valor1=($(this).attr("value"));//Para obtener el valor
    
    if(valor1=="ac"){
      valor2=0;
      valor3=null;
      $(".resultado").attr("placeholder",valor2);//le ponemos 0
    }
    else if(valor1=="+/-"){
      valor2=valor2*(-1);
       $(".resultado").attr("placeholder",valor2);//Para que se muestre el valor
    }
    else if(valor1=="%"){
      valor2=valor2/100;
      $(".resultado").attr("placeholder",valor2);//Para que se muestre el valor
    }else if(valor1=="+"){
      if(valor3==null){
         valor3=valor2;
         valor2=0;
      $(".resultado").attr("placeholder",valor2);//Para que se muestre el valor
      }else{
        valor2=parseFloat(valor3)+parseFloat(valor2);
         $(".resultado").attr("placeholder",valor2);//Para que se muestre el valor
      }
    }else{                                                        
      $(".resultado").attr("placeholder",function(i, origValue) {//esta funcion nueva sirve para poner un numero detras del otro
          if(origValue==0){//Para que desaparesca el primer 0
            origValue="";
          }
          valor2=origValue + valor1;
          return parseFloat(valor2);
      });
     }
    
});


