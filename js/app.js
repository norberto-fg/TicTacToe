const app = new Vue({
  el: '#app',
  data: {
    turno: 'X',
    winner: '',
    items: [
      {
        level: 0,
        submenus: [
          {
            sublevel: 0,
            item_submenu: '_',
            isDisabled: false
          },
          {
            sublevel: 1,
            item_submenu: '_',
            isDisabled: false
          },
          {
            sublevel: 2,
            item_submenu: '_',
            isDisabled: false
          },
        ]
      },
      {
        level: 1,
        submenus: [
          {
            sublevel: 0,
            item_submenu: '_',
            isDisabled: false
          },
          {
            sublevel: 1,
            item_submenu: '_',
            isDisabled: false
          },
          {
            sublevel: 2,
            item_submenu: '_',
            isDisabled: false
          },
        ]
      },
      {
        level: 2,
        submenus: [
          {
            sublevel: 0,
            item_submenu: '_',
            isDisabled: false
          },
          {
            sublevel: 1,
            item_submenu: '_',
            isDisabled: false
          },
          {
            sublevel: 2,
            item_submenu: '_',
            isDisabled: false
          },
        ]
      },

    ]
  },
  computed:{
    message: function() {
      if (this.winner == '') {
        return "El siguiente turno es para: " + this.turno;  
      }
      else
      {
        return "El ganador es: " + this.winner;
      }
    }
  },
  methods: {
    reset: function() {
      for (var i = 0; i < this.items.length; i++) {
        for (var j = 0; j < this.items[i]['submenus'].length; j++) {
          this.items[i]['submenus'][j]['item_submenu'] = '_';
          this.items[i]['submenus'][j]['isDisabled'] = false;
        }
      }
      this.winner = '';
      this.message;
    },
    checkWinner: function() {
      var bandera = false;
      var counter = 0;
      console.log("------------ Current turn: " + this.turno);
      // Revisa filas
      console.log("*** Revisa filas");
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          if (this.items[i]['submenus'][j]['item_submenu']==this.turno) {
            counter ++;
          }
        }
        if (counter != 3) {
          counter = 0;
        }
        else {
          bandera = true;
          break;
        }
      }
      // Revisa por columnas
      console.log("*** Revisa columnas");
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          if (this.items[j]['submenus'][i]['item_submenu']==this.turno) {
            counter ++;
          }
        }
        if (counter != 3) {
          counter = 0;
        }
        else {
          bandera = true;
          break;
        }
      }
      // Revisa diagonales
      console.log("*** Revisa diagonales");
      if ((this.items[0]['submenus'][0]['item_submenu']==this.turno && this.items[1]['submenus'][1]['item_submenu']==this.turno && this.items[2]['submenus'][2]['item_submenu']==this.turno) || (this.items[0]['submenus'][2]['item_submenu']==this.turno && this.items[1]['submenus'][1]['item_submenu']==this.turno && this.items[2]['submenus'][0]['item_submenu']==this.turno)) {
        bandera = true;
      }

      if (bandera) {
        this.winner = this.turno;
        this.message;
      }
    },
    nextMove: function(level, sublevel) {
      this.items[level]['submenus'][sublevel]['item_submenu'] = this.turno;
      this.items[level]['submenus'][sublevel]['isDisabled'] = true;
      this.checkWinner();
      if (this.turno == 'X') {
        this.turno = 'O';
      }
      else {
        this.turno = 'X';
      }
    }
  }
});