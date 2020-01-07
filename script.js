// creare una pagina che stampi tutte le configurazioni presenti nel DB. 
// Dare inoltre la possibilita' di aggiungere una nuova configurazione 
// (titolo e descrizione) e tentare l'approccio per una update 
// (aggiornamento di una configurazione esistente).

function printConfig(data) {
  var target = $("#container");

  var template = $("#config-template").html();
  var compiled = Handlebars.compile(template);

  for (var i = 0; i < data.length; i++) {

    var config = data[i];
    var configHTML = compiled(config);
    target.append(configHTML);

  }
}

function getConfig() {

  $.ajax({

    url: 'getConfig.php',
    method: 'GET',
    success: function (data) {

      printConfig(data);
      console.log(data);
    },
    error: function (error) {

      console.log("error", error);
    }
  });
}

function init() {

  getConfig();
}

$(window).ready(init);
