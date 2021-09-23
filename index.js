var carta1 = {
  nome:"Bulbasauro",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"  ,
  atributos: {
    ataque:7,
    defesa:8,
    magia:6
  }
  
};

var carta2 = {
  nome:"Darth Vader",
  imagem: "https://ironstudios.vteximg.com.br/arquivos/ids/235905-1000-1000/Darth-Vader-Ep-IV.png?v=637654351433430000",
  atributos: {
    ataque:9,
    defesa:8,
    magia:2
  } 
};


var carta3 = {
  nome:"Shiryu",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_KIinjPykB1qFLhD_jpSEOfdlrliU41qGTg&usqp=CAU",
  atributos: {
    ataque:5,
    defesa:9,
    magia:10
  }  
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;


function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina =  cartas[numeroCartaMaquina];

  
  var numeroCartaJogador = parseInt(Math.random() * 3);
  while(numeroCartaJogador == numeroCartaMaquina){
    
    numeroCartaJogador = parseInt(Math.random() * 3);
    
  }
  cartaJogador =  cartas[numeroCartaJogador];
  console.log(cartaJogador);
  
  document.getElementById("btnSortear").disabled =true;
  document.getElementById("btnJogar").disabled=false;
  
  exibirCartaJogador();
  
}

function obtemAtributoSelecionado(){
  var radioAtributos = document.getElementsByName("atributo");
  
  for(var indice = 0; indice < radioAtributos.length; indice ++){
    
    if(radioAtributos[indice].checked){
      return radioAtributos[indice].value;
      }
   }  
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  //console.log(cartaJogador.atributos[atributoSelecionado]);
  
  if(valorCartaJogador > valorCartaMaquina){
    htmlResultado = "<p class='resultado-final'> Venceu </p>";
    
  }else if(valorCartaJogador < valorCartaMaquina){
    
    htmlResultado = "<p class='resultado-final'> Perdeu </p>";
    
  }else{
    
    htmlResultado = "<p class='resultado-final'> Empate </p>";
    
  }
  console.log(cartaMaquina);
  divResultado.innerHTML = htmlResultado;
  
  document.getElementById('btnJogar').disabled;
  exibirCartaMaquina();
  
}

function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage= `url(${cartaJogador.imagem})`;
  //modo de fazer a mesma coisa
  //divCartaJogador.style.backgroundImage= "url(" + cartaJogador.imagem + ")"
 var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div i='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
  
  for(var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo];
  }

  var nome = `<p> class="carta-subtitle">${cartaJogador.nome} </p>`;
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>';
}

function exibirCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage= `url(${cartaMaquina.imagem})`
  //modo de fazer a mesma coisa
  //divCartaJogador.style.backgroundImage= "url(" + cartaJogador.imagem + ")"
 var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div i='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
  
  for(var atributo in cartaMaquina.atributos){
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }

  var nome = `<p> class="carta-subtitle">${cartaMaquina.nome} </p>`
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}
  
