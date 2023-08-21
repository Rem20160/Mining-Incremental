var game = {
    ore: 0,
    orePerClick: 1,
    orePerClickAdd: 1,
    orePerClickCost: 10,
    orePerClickMultiplierCost: 1000,
    orePerClickExponentCost: 1000000,
  }

  function update(id, content) {
    document.getElementById(id).innerHTML = content;
  }
  
  function mine() {
    game.ore += game.orePerClick
  }
  
  function buyoresperclick() {
    if (game.ore >= game.orePerClickCost) {
      game.ore -= game.orePerClickCost
      game.orePerClick += game.orePerClickAdd
      game.orePerClickCost *= 1.4
    }
  }

  function buyoresperclickmultiplier() {
    if (game.ore >= game.orePerClickMultiplierCost) {
      game.ore -= game.orePerClickMultiplierCost
      game.orePerClick *= 2
      game.orePerClickMultiplierCost *= 3
      game.orePerClickAdd *= 2
    }
  }
  
  function format(number, type) {
    let exponent = Math.floor(Math.log10(number))
    let mantissa = number / Math.pow(10, exponent)
    if (exponent < 6) return number.toFixed(1)
    if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
    if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
  }

  function deletesavefile() {
    localStorage.removeItem("oreminerSave")
  }
