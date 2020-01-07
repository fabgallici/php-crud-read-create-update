// creare una pagina che stampi tutte le configurazioni presenti nel DB. 
// Dare inoltre la possibilita' di aggiungere una nuova configurazione 
// (titolo e descrizione) e tentare l'approccio per una update 
// (aggiornamento di una configurazione esistente).

function targetReset() {

  var target = $("#container");
  target.html('');
}

function printConfig(data) {

  targetReset();

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

function addNewConfig() {
  var me = $(this);
  $.ajax({

    url: "addNewConfig.php",
    method: "POST",
    data: me.serialize(),
    success: function (data) {
      // console.log(data);

      if (data) {

        getConfig();
      }
    },
    error: function (error) {

      console.log("error", error);
    }
  });

  return false;
}

function updateConfig() {
  var me = $(this);
  $.ajax({

    url: "updateConfig.php",
    method: "POST",
    data: me.serialize(),
    success: function (data) {
      console.log(data);

      if (data) {

        getConfig();
      }
    },
    error: function (error) {

      console.log("error", error);
    }
  });

  return false; //prevent default aggiornamento automatico pagina dopo submit
}

function deleteConfig() {
  var me = $(this);
  $.ajax({

    url: "deleteConfig.php",
    method: "POST",
    data: me.serialize(),
    success: function (data) {
      console.log(data);

      if (data) {

        getConfig();
      }
    },
    error: function (error) {

      console.log("error", error);
    }
  });

  return false; //prevent default aggiornamento automatico pagina dopo submit
}

function init() {

  getConfig();
  $("#myAddForm").submit(addNewConfig);

  $("#myUpdateForm").submit(updateConfig);

  $("#myDeleteForm").submit(deleteConfig);
}

$(window).ready(init);
