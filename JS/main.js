function clicked(){
    document.getElementById("thank").innerHTML = "<b>Thanks for clicking</b>";
    

    //console.log(document.getElementById("thank")); 
   // alert ("Thank you");
}

function redirect(){
    window.open("https://github.com/Grasieli15/Intro.-JavaScript");
    //window.location.href = "https://github.com/Grasieli15/Intro.-JavaScript";
}

function change(element){
    element.innerHTML = "Thanks for passing the mouse";
    
    //document.getElementById("mousemove").innerHTML = "Thanks for passing the mouse";
    //alert("Change text"
}

function comeback(element){
    element.innerHTML = "Mouse over here";


    //document.getElementById("mousemove").innerHTML = "Mouse over here";
}

function load(){
    alert ("Page loaded")
}

function choice(element){
    console.log(element.value)
}

/*
function soma (n1, n2){
    return n1 + n2;
}
*/
/*
function ValidarIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
     }else{
         validar = false
     }
     return validar;
}

var idade = prompt("Qual sua idade");
console.log(ValidarIdade(idade));
*/
//alert (soma(5, 10));



/*var d = new Date();
alert(d.getDay()+1);
alert(d.getHours()+1);
*/
/*
var count;
for(count=0; count<=5; count++){
    alert(count);
} 
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count)
    count = count + 1;
}
*/
/*
var idade = prompt("Qual sua idade?") 
if (idade >= 18){
     alert("maior de idade");
}else{
    alert("menor de idade")
}
*/

/*
var frutas = [{nome: "maça", cor: "vermelha"},{nome: "Uva", cor: "roxa"}]
console.log(frutas)
alert(frutas[1].nome)
*/
/*
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome)
alert(fruta.cor)
*/

//var lista = ["maçã","pêra","laranja"];
//lista.push("Uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join("-"));


//var nome = "Grasi Costa";
//var idade = 19;
//var idade2 = 10;
///var frase ="To com fome"
//alert (nome + " tem " + idade + " anos");
//alert (idade + idade2);
//console.log(nome);
//console.log(idade+idade2)
//console.log(frase.toLocaleUpperCase())
//alert(frase.replace("To","Sempre"))