let gold = 0;
let setMultiplier = 0
let setGoldTimer = 0

let upgradeObjs = {
    goldpan: {
        price: 50,
        quantity: 0,
        multiplyer: 1
    },
    shovel: {
        price: 100,
        quantity: 0,
        multiplyer: 5
    },
    dredge: {
        price: 500,
        quantity: 0,
        multiplyer: 10
    },
    factory: {
        price: 1500,
        quantity: 0,
        multiplyer: 20
    }
}


function mine() {

    if (setMultiplier == 0) {
        gold++
    } else if (setMultiplier > 0) {
        gold += setMultiplier + 1
    }

    draw()
}
function upgrade(input) {
    /* if (input == "goldpan") {
         setMultiplier += upgradeObjs[input].multiplyer
         document.getElementById("goldpan").innerText = `${upgradeObjs.goldpan.quantity++}`
     } if (input == "shovel") {
         setMultiplier += upgradeObjs[input].multiplyer
         document.getElementById("shovel").innerText = `${upgradeObjs.shovel.quantity++}`
     } if (input == "dredge") {
         setMultiplier += upgradeObjs[input].multiplyer
         document.getElementById("dredge").innerText = `${upgradeObjs.dredge.quantity++}`
     } if (input == "factory") {
         setMultiplier += upgradeObjs[input].multiplyer
         document.getElementById("factory").innerText = `${upgradeObjs.factory.quantity++}`
     }*/
    document.getElementById(`${input}`).innerText = `${upgradeObjs[input].quantity++}`
    setMultiplier += upgradeObjs[input].multiplyer
    gold -= upgradeObjs[input].price
    setGoldTimer += upgradeObjs[input].quantity * upgradeObjs[input].multiplyer / 3
    draw()
    startInterval()
}
/*First create a method called collectAutoUpgrades, this will iterate over the automaticUpgrades, total the quantity of each automaticUpgrade times their multiplier, and add that value to the cheese resource. (See example below)
We want this to happen automatically, so we will need to use setInterval(reference) to make sure this occurs every three seconds automatically, we can set this automatic invocation like so:
function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
} */
function startInterval() {
    setInterval(autoUpgrade, 3000);
}
function autoUpgrade() {
    debugger
    if ("dredge") {
        gold += upgradeObjs.dredge.quantity * upgradeObjs.dredge.multiplyer

    }
    if ("factory") {
        gold += upgradeObjs.factory.quantity * upgradeObjs.factory.multiplyer
    }

    draw()
}

function draw() {
    let goldElem = document.getElementById("gold")
    let goldPanElem = document.getElementById("goldpan")
    let shovelElem = document.getElementById("shovel")
    let dredgeElem = document.getElementById("dredge")
    let factoryElem = document.getElementById("factory")
    goldElem.innerText = `${gold}`
    goldPanElem.innerText = `${upgradeObjs.goldpan.quantity}`
    shovelElem.innerText = `${upgradeObjs.shovel.quantity}`
    dredgeElem.innerText = `${upgradeObjs.dredge.quantity}`
    factoryElem.innerText = `${upgradeObjs.factory.quantity}`
    document.getElementById("gPrice").innerText = `${upgradeObjs.goldpan.price}`
    document.getElementById("sPrice").innerText = `${upgradeObjs.shovel.price}`
    document.getElementById("drPrice").innerText = `${upgradeObjs.dredge.price}`
    document.getElementById("fPrice").innerText = `${upgradeObjs.factory.price}`
    document.getElementById("multiplier").innerText = `${setMultiplier}`
    document.getElementById("gps").innerText = `${setGoldTimer}`




}



draw()