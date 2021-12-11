let money = 0;

let clickUpgrades = {
  tools: {
    price: 5,
    quantity: 0,
    multiplier: 2
  },
  advertisements: {
    price: 5,
    quantity: 0,
    multiplier: 5
  }
}

let autoUpgrades = {
  mechanic: {
    price: 350,
    quantity: 0,
    multiplier: 20
  },
  manager: {
    price: 1000,
    quantity: 0,
    multiplier: 40
  }
}

function makeMoney(){
  money++
  document.getElementById("totalMoney").innerHTML = money.toString()
  console.log(money)
}

function buyTools(){
  if(money >= clickUpgrades.tools.price){
    money -= clickUpgrades.tools.price
    clickUpgrades.tools.quantity++
  }
  

document.getElementById("totalMoney").innerHTML = money.toString()
document.getElementById("toolInven").innerHTML = clickUpgrades.tools.quantity.toString()
}

function buyAds(){
  if(money >= clickUpgrades.advertisements.price){
    money -= clickUpgrades.advertisements.price
    clickUpgrades.advertisements.quantity++
  }
  
  
  document.getElementById("totalMoney").innerHTML = money.toString()
  document.getElementById("adInven").innerHTML = clickUpgrades.advertisements.quantity.toString()
}





