<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>php-crud-read-create-update</title>

  <!-- FONT: LATO -->
  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
  <!-- FONT: FONTAWESOME -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">

  <!-- JS: JQUERY -->
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <!-- JS: MOMENT -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>

  <!-- JS: CHART-JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js"></script>

  <!-- JS: HANDLEBARS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.0/handlebars.min.js" charset="utf-8"></script>
  <!-- TEMPLATE: MESSAGE MENU -->
  <script id="config-template" type="text/x-handlebars-template">
    <div class="config">
        <p>id [{{ id }}]</p>
        <p>title: {{ title }}</p>
        <p>description: {{ description }}</p>
      </div>
  </script>

  <!-- CSS: MY STYLE -->
  <link rel="stylesheet" href="style.css">
  <!-- JS: MY SCRIPT -->
  <script src="script.js" charset="utf-8"></script>

</head>

<body>
  <h1>Hotel Config CRUD</h1>

  <h2>ADD NEW CONFIG</h2>
  <form id="myAddForm">
    <label for="title">title:</label>
    <input type="text" name="title" value="nuovo titolo"><br>
    <label for="description">description:</label>
    <input type="text" name="description" value="nuova descrizione"><br>
    <input type="submit" name="submit" value="NEW config">
  </form>
  <h2>UPDATE EXISTING CONFIG</h2>
  <form id="myUpdateForm">
    <label for="title">title:</label>
    <input type="text" name="title" value="updated title"><br>
    <label for="description">description:</label>
    <input type="text" name="description" value="update descrizione"><br>
    <label for="id">id: </label>
    <input type="text" name="id"><br>
    <input type="submit" name="submit" value="UPDATE config">
  </form>

  <h2>DELETE EXISTING CONFIG</h2>
  <form id="myDeleteForm">
    <label for="title">title:</label>
    <input type="text" name="title"><br>
    <input type="submit" name="submit" value="DELETE config">
  </form>


  <div id="container"> </div>
</body>

</html>