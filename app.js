let money = 0;

let clickUpgrades = {
  tools: {
    price: 10,
    quantity: 0,
    multiplier: 2
  },
  advertisements: {
    price: 20,
    quantity: 0,
    multiplier: 5
  }
}

let autoUpgrades = {
  mechanic: {
    price: 100,
    quantity: 0,
    multiplier: 20
  },
  manager: {
    price: 250,
    quantity: 0,
    multiplier: 40
  }
}

function makeMoney(){
  money++
  for (const key in clickUpgrades) {
    const clickUpgrade = clickUpgrades[key];
    money += clickUpgrade.quantity * clickUpgrade.multiplier
  }
  document.getElementById("totalMoney").innerHTML = money.toString()
  console.log(money)
}

 //quantity * multiplier
function buyTools(){
  if(money >= clickUpgrades.tools.price){
    money -= clickUpgrades.tools.price
    clickUpgrades.tools.quantity++ 
    clickUpgrades.tools.price *= 3
    
  }

document.getElementById("totalMoney").innerHTML = money.toString()
document.getElementById("toolInven").innerHTML = clickUpgrades.tools.quantity.toString()
document.getElementById("toolsAmnt").innerHTML = clickUpgrades.tools.price.toString()
}

function buyAds(){
  if(money >= clickUpgrades.advertisements.price){
    money -= clickUpgrades.advertisements.price
    clickUpgrades.advertisements.quantity++
    clickUpgrades.advertisements.price *= 3
  }
  
  
  document.getElementById("totalMoney").innerHTML = money.toString()
  document.getElementById("adInven").innerHTML = clickUpgrades.advertisements.quantity.toString()
  document.getElementById("adsAmnt").innerHTML = clickUpgrades.advertisements.price.toString()
}

function buyMechanic(){
  if(money >= autoUpgrades.mechanic.price){
    money -= autoUpgrades.mechanic.price
    autoUpgrades.mechanic.quantity++
    autoUpgrades.mechanic.price *= 3
    mechanicInterval()
  }

  document.getElementById("totalMoney").innerHTML = money.toString()
  document.getElementById("mechInven").innerHTML = autoUpgrades.mechanic.quantity.toString()
  document.getElementById("mechAmnt").innerHTML = autoUpgrades.mechanic.price.toString()
}

function mechanicInterval(){
  setInterval(makeMoney, 5000)
}



function buyManager(){
  if(money >= autoUpgrades.manager.price){
    money -= autoUpgrades.manager.price
    autoUpgrades.manager.quantity++
    autoUpgrades.manager.price *= 3
    managerInterval()
  }
  
  
  document.getElementById("totalMoney").innerHTML = money.toString()
  document.getElementById("manInven").innerHTML = autoUpgrades.manager.quantity.toString()
  document.getElementById("manAmnt").innerHTML = autoUpgrades.manager.price.toString()
}

function managerInterval(){
  setInterval(makeMoney, 5000)
}

