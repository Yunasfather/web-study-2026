const Player = {
  name: "",
  x: 0,
  y: 0,

  moveRight: function () {
    this.x += 1;
  },

display: function () {
  console.log(this.x + "," + this.y + ": Player");
},
};

Player.moveRight();
Player.display();
