var v = 6;
var m=0;
function loadBands() {
  
  var saida = '';
  
  var bands = [];
  
  $.getJSON("desafio.json", function(data) {
      bands = data.bands;
      m = bands.length;
      for (i = 0; i < v; i++) {
        saida += '<div class="card">';
        saida += '<img src="' + bands[i].photo + '" alt="' + bands[i].name + '" title="' + bands[i].name + '" class="card-img-top">';
        saida += '<div class="card-body">';
        saida += '<p class="card-text">' + bands[i].property_type + '</p>';
        saida += '<p class="card-title">' + bands[i].name + '</p>';
        saida += '<h5 class="card-title">R$ ' + bands[i].price + ',00</h5>';
        saida += '<a href="aluguel.html?c='+i+'" class="btn btn-primary">Alugar</a>';
        saida += '</div>';
        saida += '</div>';
        document.getElementById('tela').innerHTML = saida;
      }
      
      
  });
}


function selecao(){
  var x = document.getElementById("sele").value;
  if(x == 1){
    loadBands();
  }else{
    v = 6;
    var saida = '';
  
    var bands = [];
    
    $.getJSON("desafio.json", function(data) {
        bands = data.bands;
        for (i = 0; i < bands.length; i++) {
          if(x == bands[i].property_type){
            saida += '<div class="card">';
            saida += '<img src="' + bands[i].photo + '" alt="' + bands[i].name + '" title="' + bands[i].name + '" class="card-img-top">';
            saida += '<div class="card-body">';
            saida += '<p class="card-text">' + bands[i].property_type + '</p>';
            saida += '<p class="card-title">' + bands[i].name + '</p>';
            saida += '<h5 class="card-title">R$ ' + bands[i].price + ',00</h5>';
            saida += '<a href="aluguel.html?c='+i+'" class="btn btn-primary">Alugar</a>';
            saida += '</div>';
            saida += '</div>';
            document.getElementById('tela').innerHTML = saida;
            document.getElementById('carregar').style.visibility = "hidden";
          }
        }
      });
  }
}

function carrega(){
  v = v + 3;
  selecao();
}

$(document).scroll(function() {
var scrollEsta, scrollMax, clientMax, per;
//Retorna os pixels do documento actual foi rolado (vertical) a partir do canto superior esquerdo da janela.
scrollEsta = document.documentElement.scrollTop || window.pageYOffset;

//Retorna a altura visível do conteúdo em uma página (não incluindo as fronteiras, margens, ou barras de rolagem)
scrollMax = document.documentElement.scrollHeight;

//Retorna a altura total de um elemento (incluindo áreas escondidas com barras de rolagem)
clientMax = document.documentElement.clientHeight || document.body.clientHeight;

per = scrollEsta / (scrollMax - clientMax);
if ((per === 1 || clientMax === scrollMax) && (m > v)) {
  setTimeout(carrega, 1000);
  document.getElementById('carregar').style.visibility = "visible";
}else{
  document.getElementById('carregar').style.visibility = "hidden";
}
});

function fechar(){
  document.getElementById("info").style.display = "none";
}