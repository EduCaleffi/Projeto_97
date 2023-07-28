nome_do_atleta=[];
function enviar(){
    var mostra_array=[];
    for(var i=1; i<=4;i++){
        var nome=document.getElementById("nome_do_atleta_"+i).value;
        nome_do_atleta.push(nome);
    }
    for(var j=0; j<nome_do_atleta.length;j++){
        mostra_array.push("<h4>nome: "+nome_do_atleta[j]+"</h4>");
        }
        mostra_array=mostra_array.join(" ");
    document.getElementById("lista").innerHTML=mostra_array;
    document.getElementById("b_enviar").style.display="none";
    document.getElementById("b_organizar").style.display="inline-block";
}
function organizar(){
    mostra_array=[];
    nome_do_atleta.sort();
    for(var j=0; j<nome_do_atleta.length;j++){
        mostra_array.push("<h4>nome: "+nome_do_atleta[j]+"</h4>");
        }
        mostra_array=mostra_array.join(" ");
    document.getElementById("lista").innerHTML=mostra_array;
}