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
    document.getElementById("mine-sound").play()
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

    document.getElementById("button-sound").play()
    document.getElementById(`${input}`).innerText = `${upgradeObjs[input].quantity++}`
    setMultiplier += upgradeObjs[input].multiplyer
    gold -= upgradeObjs[input].price
    setGoldTimer += upgradeObjs[input].quantity * upgradeObjs[input].multiplyer / 3
    if (input) {
        document.getElementById(`${input}`).innerText = `${upgradeObjs[input].price *= 3}`
    }
    draw()
    startInterval()

}

function buttonDisable() {

    if (gold < upgradeObjs.goldpan.price) {
        document.getElementById("gButton").setAttribute('disabled', 'true')
    } else { document.getElementById("gButton").removeAttribute('disabled') }
    if (gold < upgradeObjs.shovel.price) {
        document.getElementById("sButton").setAttribute('disabled', 'true')
    } else { document.getElementById("sButton").removeAttribute('disabled') }
    if (gold < upgradeObjs.dredge.price) {
        document.getElementById("dButton").setAttribute('disabled', 'true')
    } else { document.getElementById("dButton").removeAttribute('disabled') }
    if (gold < upgradeObjs.factory.price) {
        document.getElementById("fButton").setAttribute('disabled', 'true')
    } else { document.getElementById("fButton").removeAttribute('disabled') }

}

function startInterval() {
    setInterval(autoUpgrade, 3000);
}
function autoUpgrade() {
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
    buttonDisable()

}



draw()