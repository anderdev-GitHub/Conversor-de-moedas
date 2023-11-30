const convertButton = document.querySelector (".convert-button")
const currencySelect = document.querySelector (".currency-select")
const currencySelectToConvert = document.querySelector (".currency-select-to-convert")

const convertValue = async () => {
    const inputCurrencyValue = document.querySelector (".input-currency").value
    const currencyValueToConvert = document.querySelector (".currency-value-to-convert")
    const currencyValueConverted = document.querySelector (".currency-value")
    
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const btcToday = data.BTCBRL.high
    const realToday = 1.00

    /* Real para todas as moedas */
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue/realToday)
    }
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)
    }
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / btcToday)
    }

    /* Todas as moedas para o real */
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * btcToday)
    }

     /* Dolar para todas as moedas */
     if (currencySelectToConvert.value == "usd" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dolarToday / euroToday)
    }
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / dolarToday / btcToday)
    }

    /* Euro para todas as moedas */
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * euroToday / dolarToday)
    }
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / euroToday / btcToday)
    }

    /* Bitcoin para todas as moedas */
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolarToday / btcToday)
    }
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroToday / btcToday)
    }
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById ("currency-name")
    const currencyImg = document.getElementById ("currency-img")
    const currencyNameToConverter = document.querySelector (".currency-name")
    const currencyImgToConverter = document.querySelector (".currency-img")
    
    /* Converter de */
    if(currencySelectToConvert.value == "brl"){
        currencyNameToConverter.innerHTML = "Real brasileiro"
        currencyImgToConverter.src = "./assets/real.png"
    }

    if(currencySelectToConvert.value == "usd"){
        currencyNameToConverter.innerHTML = "Dólar americano"
        currencyImgToConverter.src = "./assets/dolar.png"
    }

    if(currencySelectToConvert.value == "eur"){
        currencyNameToConverter.innerHTML = "Euro"
        currencyImgToConverter.src = "./assets/euro.png"
    }

    if(currencySelectToConvert.value == "btc"){
        currencyNameToConverter.innerHTML = "Bitcoin"
        currencyImgToConverter.src = "./assets/btc.png"
    }

    /* Converter para */
    if(currencySelect.value == "real"){
        currencyName.innerHTML = "Real brasileiro"
        currencyImg.src = "./assets/real.png"
    }

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencySelect.value == "bitcoin"){
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
currencySelect.addEventListener("change", changeCurrency)
currencySelectToConvert.addEventListener("change", changeCurrency)