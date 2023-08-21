var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("oreminerSave", JSON.stringify(game))
  }, 15000)

  var savegame = JSON.parse(localStorage.getItem("oreminerSave"))
if (savegame !== null) {
  game = savegame
}

if (typeof savegame.ore !== "undefined") game.ore = savegame.ore;
if (typeof savegame.orePerClick !== "undefined") game.orePerClick = savegame.orePerClick;
if (typeof savegame.orePerClickCost !== "undefined") game.orePerClickCost = savegame.orePerClickCost;
if (typeof savegame.lastTick !== "undefined") game.lastTick = savegame.lastTick;
if (typeof savegame.oresPerClickMultiplierCost !== "undefined") game.oresPerClickMultiplierCost = savegame.oresPerClickMultiplierCost;
if (typeof savegame.oresPerClickExponentCost !== "undefined") game.oresPerClickExponentCost = savegame.oresPerClickExponentCost;
if (typeof savegame.orePerClickAdd !== "undefined") game.orePerClickAdd = savegame.orePerClickAdd;