var pronoun = [' the',' our'];
 var adj = ['great', 'big' ];
  var noun = ['jogger','racoon'];       //declaramos la variables a usar en la funcion

function random(){          //declaramos la funcion random sin valor, ejecutando en su interior los for que nos generaran los dominios
    let varpro = [];
    for (i = 0; i < pronoun.length; i++){
        for (j = 0; j < adj.length; j++){
            for (k = 0; k < noun.length; k++){
                varpro.push(pronoun[i]+adj[j]+noun[k]+".com");

            }
        }
    }
    document.getElementById("demo").innerHTML = varpro;
    

}
random();