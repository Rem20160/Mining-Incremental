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

  function buyoresperclickexponent() {
    if (game.ore >= game.orePerClickExponentCost) {
      game.ore -= game.orePerClickExponentCost
      game.orePerClick *= game.orePerClick
      game.orePerClickExponentCost *= game.orePerClickExponentCost
      game.orePerClickAdd *= game.orePerClickAdd
    }
  }

  function buyUpgrade_1() {
    if (game.ore >= 100) {
      game.ore -= 100
      game.orePerClick += 10
      btn1 = document.getElementById("Upgrade_1btn");
      btn1.disabled = true;
      btn1.innerHTML = "10+" + " ore " + " Bought"
    }
  }

  function buyUpgrade_2() {
    if (game.ore >= 10000) {
      game.ore -= 10000
      game.orePerClick *=10
      btn2 = document.getElementById("Upgrade_2btn");
      btn2.disabled = true;
      btn2.innerHTML = "10x Multiplier" + " Bought"
    }
  }

  function buyUpgrade_3() {
    if (game.ore >= 10000000)
    game.ore -= 10000000
    game.orePerClick = Math.pow(game.orePerClick, 1.5)
    btn3 = document.getElementById("Upgrade_3btn");
    btn3.disabled = true;
    btn3.innerHTML = "^1.5 ore" + " Bought"
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

  confirmation = document.getElementById("confirmation");
  
  function openConfirmation() {
    confirmation.classList.add("open-confirmation");
  }

  function closeConfirmation() {
    confirmation.classList.remove("open-confirmation");
  }
