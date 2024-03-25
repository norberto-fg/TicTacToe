<!DOCTYPE html>
<html>
<head>
  <title>Tic Tac Toe</title> 
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
  <link href="https://fonts.googleapis.com/css?family=Oxygen:400,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Petit+Formal+Script" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script>
  <script src="js/app.js" defer></script>
</head>
<body>
  <div id="app">
    <header>
      <h1>Tic tac toe</h1>
    </header>
	<div class="form-row vertical">
		<label>{{ message }}</label>
	</div>
    <div v-for="item in items">
    	<button style="height:2em;width:2em;" v-for="submenu in item.submenus" v-on:click="nextMove(item.level, submenu.sublevel)" :disabled='submenu.isDisabled'>
    		{{ submenu.item_submenu }}
    	</button>
  	</div>
    <div style="padding-top: 2em;">
      <input type="button"  class="btn btn-primary" value="Reset" v-on:click="reset()">  
    </div>
  </div>
</body>
</html>