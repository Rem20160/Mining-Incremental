var mainGameLoop = window.setInterval(function() {
    diff = Date.now() - game.lastTick;
    game.lastTick = Date.now()
    game.ore += game.orePerClick * (diff / 1000)
    update("oremined", format(game.ore, "scientific") + " ores")
    update("perclickupgrade", format(game.orePerClickAdd, "scientific") + "+" + " ore" + " Cost: " + format(game.orePerClickCost, "scientific") + " ore")
    update("perclickupgrademultiplier", "2x Multiplier " + "Cost: " + format(game.orePerClickMultiplierCost, "scientific") + " ore")
    update("oreminedpersec", format(game.orePerClick, "scientific") + " ore per one second")
    update("perclickupgradeexponent", "^2" + " ores " + "Cost: " + format(game.orePerClickExponentCost, "scientific") + " ore")
  }, 33) 
  
