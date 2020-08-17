new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.monsterHealth = 100;
      this.playerHealth = 100;
    },
    attack: function () {

      this.monsterHealth -= this.calculateDamage(10, 3);

      if (this.checkWin()) {
        return;
      }

      this.playerHealth -= this.calculateDamage(12, 5);
      
      this.checkWin();
    },
    specialAttack: function () { },
    heal: function () { },
    giveUp: function () { },
    calculateDamage: function (max, min) {
      return Math.max((Math.floor((Math.random() * max)) + 1), min);
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm("You won,Start new Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost,Start new Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  },
});
