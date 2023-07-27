const convertButton = document.querySelector (".convert-button")
const currencyselect = document.querySelector (".currency-select")

const dolarToday = 5.2
const euroToday = 6.2
const btcToday = 149.81710

const convertValue = () => {
    const inputCurrencyValue = document.querySelector (".input-currency").value
    const currencyValueToConvert = document.querySelector (".currency-value-to-convert")
    const currencyValueConverted = document.querySelector (".currency-value")
    currencyValueToConvert.innerHTML = inputCurrencyValue

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL",
    }).format(inputCurrencyValue);
    
    if(currencyselect.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency", 
        currency: "USD" 
    }).format(inputCurrencyValue / dolarToday);
    }

    if(currencyselect.value == "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency", 
        currency: "EUR" 
    }).format(inputCurrencyValue / euroToday)
    }

    if(currencyselect.value == "bitcoin"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "BTC" 
    }).format(inputCurrencyValue / btcToday)
     }
}

changeCurrency = () => {
    const currencyName = document.getElementById ("currency-name")
    const currencyImg = document.getElementById ("currency-img")

    if(currencyselect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if(currencyselect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencyselect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/btc.png"
    }
    
    convertValue()
}

const arrowImg = document.querySelector(".arrow-img")

document.querySelector(".convert-button").addEventListener("click", () => {
  if (!arrowImg.classList.contains("move-down")) {
       arrowImg.classList.add("move-down")
    arrowImg.setAttribute("src", "./assets/arrow-red.png")
  } else {
    arrowImg.classList.remove("move-down")
    arrowImg.setAttribute("src", "./assets/arrow-gray.png")
  }

  setTimeout(() => {
    arrowImg.classList.remove("move-down")
    arrowImg.setAttribute("src", "./assets/arrow-gray.png")
  }, 700)
})


convertButton.addEventListener("click", convertValue)
currencyselect.addEventListener("change", changeCurrency)