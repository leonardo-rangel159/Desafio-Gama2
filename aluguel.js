function verifica(el){
    var data = new Date();
    let d;
    d = String(data.getFullYear());
    d += "-";
    let v = String(data.getMonth()+1);
    if(v < 10){d += "0"+v};
    d += "-";
    d += String(data.getDate());
    datain = el.value;
    if(d > datain){
        alert("Informe uma data valida.");
        el.value = '';
    }
}

function valor(el){
    datain = new Date(document.getElementById('data').value).getTime();
    dataout = new Date(document.getElementById('data1').value).getTime();
    if((datain > 0 && dataout > 0) && (datain <= dataout)){
    data = Math.abs(datain - dataout);
    dias = Math.ceil(data / (1000 * 60 * 60 * 24))+1;
    total = dias * el;
    document.getElementById('valor').innerHTML = '<h4>O valor a ser pago algo final da sua estadia é R$'+total+',00</h4>'
    }else if(datain > 0 && dataout > 0){
        alert("Informe uma data valida.");
    }
}

function mensagem(){
    alert("Desculpa nosso site vai ate aqui só.");
}

function json(){
    var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("c");
var saida = '';
  
  var bands = [];
    $.getJSON("desafio.json", function(data) {
        bands = data.bands;
        saida += '<div class="col-12 col-md-6"><div class="card">'
        saida += '<img src="' + bands[c].photo + '" alt="' + bands[c].name + '" title="' + bands[c].name + '" class="card-img-top">';
        saida += '</div>';
        
        saida += '<br><div><iframe src="'+bands[c].maps+'" class="card card-img-top" width="400" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>';
        saida += '</div>';

        saida += '<div class="col-12 col-md-6 pl-lg-10">';
        saida += '<div class="flickity-slider">';
        saida += '<h2 class="card-text mb-2">' + bands[c].property_type + '</h2>';
        saida += '<h4 class="card-title">' + bands[c].name + '</h4>';
        saida += '<h3 class="card-title">R$ ' + bands[c].price + ',00</h3>';
        saida += '</div>';
        saida += '\
                <label for="data">Data de check-in</label>\
                <input type="date" id="data" onchange="verifica(data)"></input><br>\
                <label for="data1">Date de check-out</label>\
                <input type="date" id="data1" onchange="verifica(data1)"></input><br>\
                <input type="button" id="botao" value="Consultar a pagar" onclick="valor('+bands[c].price+')"></input><br><br>\
                <div id="valor"></div>\
                <div><input type="button" value="Aluga Agora" onclick="mensagem()"></input></div>\
            ';
        saida += '</div>';
        document.getElementById('tela').innerHTML = saida;
    });

}