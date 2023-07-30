const convertButton = document.querySelector (".convert-button")
const currencyselect = document.querySelector (".currency-select")
const currencySelectToConvert = document.querySelector (".currency-select-to-convert")

const dolarToday = 5.2
const euroToday = 6.3
const btcToday = 149.81710
const realToday = 1.00

const convertValue = () => {
    const inputCurrencyValue = document.querySelector (".input-currency").value
    const currencyValueToConvert = document.querySelector (".currency-value-to-convert")
    const currencyValueConverted = document.querySelector (".currency-value")
   /*  currencyValueToConvert.innerHTML = inputCurrencyValue */
    
    /* do real para todas as moedas */
    if (currencySelectToConvert.value == "real" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue/realToday)
    }
    if (currencySelectToConvert.value == "real" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)
    }
    if (currencySelectToConvert.value == "real" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }
    if (currencySelectToConvert.value == "real" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue/btcToday)
    }

    /* Todas as moedas para o real */
    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }
    if (currencySelectToConvert.value == "euro" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }
    if (currencySelectToConvert.value == "bitcoin" && currencySelect.value == "real") {
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
     if (currencySelectToConvert.value == "dolar" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue) /* valor que entra no input */
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue) /* Valor que sai do input convertido */
    }
    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dolarToday / euroToday)
    }
    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue) /* valor que entra no input */
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue) /* Valor que sai do input convertido */
    }

    /* Euro para todas as moedas */
    if (currencySelectToConvert.value == "euro" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "euro" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * euroToday / dolarToday)
    }
    if (currencySelectToConvert.value == "euro" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * euroToday / btcToday)
    }

    /* Bitcoin para todas as moedas */
    if (currencySelectToConvert.value == "bitcoin" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue) /* valor que entra no input */
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue) /* Valor que sai do input convertido */
    }
    if (currencySelectToConvert.value == "bitcoin" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dolarToday / euroToday)
    }
    if (currencySelectToConvert.value == "bitcoin" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue) /* valor que entra no input */
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue) /* Valor que sai do input convertido */
    }

    /* Input valor digitado pelo usuário*/
   /*  if (currencySelectToConvert.value == "real"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL",
    }).format(inputCurrencyValue);
    }

    if(currencySelectToConvert.value == "dolar"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency", 
        currency: "USD" 
    }).format(inputCurrencyValue / dolarToday);
    }

    if(currencySelectToConvert.value == "euro"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency", 
        currency: "EUR" 
    }).format(inputCurrencyValue);
    }

    if(currencySelectToConvert.value == "bitcoin"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "BTC" 
    }).format(inputCurrencyValue);
    } */

    /* select de "converter de"*/
   /*  if(currencySelectToConvert.value == "real"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL" 
    }).format(inputCurrencyValue);
    }

    if(currencySelectToConvert.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency", 
        currency: "USD" 
    }).format(inputCurrencyValue);
    }

    if(currencySelectToConvert.value == "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency", 
        currency: "EUR" 
    }).format(inputCurrencyValue);
    }

    if(currencySelectToConvert.value == "bitcoin"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "BTC" 
    }).format(inputCurrencyValue);
     } */

    /* select de "converter para"*/
    /* if(currencyselect.value == "real"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL" 
    }).format(inputCurrencyValue);
    }

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
     } */
}

changeCurrency = () => {
    const currencyName = document.getElementById ("currency-name")
    const currencyImg = document.getElementById ("currency-img")
    const currencyNameToConverter = document.querySelector (".currency-name")
    const currencyImgToConverter = document.querySelector (".currency-img")
    
    /* Converter de */
    if(currencySelectToConvert.value == "real"){
        currencyNameToConverter.innerHTML = "Real brasileiro"
        currencyImgToConverter.src = "./assets/real.png"
    }

    if(currencySelectToConvert.value == "dolar"){
        currencyNameToConverter.innerHTML = "Dólar americano"
        currencyImgToConverter.src = "./assets/dolar.png"
    }

    if(currencySelectToConvert.value == "euro"){
        currencyNameToConverter.innerHTML = "Euro"
        currencyImgToConverter.src = "./assets/euro.png"
    }

    if(currencySelectToConvert.value == "bitcoin"){
        currencyNameToConverter.innerHTML = "Bitcoin"
        currencyImgToConverter.src = "./assets/btc.png"
    }

    /* Converter para */
    if(currencyselect.value == "real"){
        currencyName.innerHTML = "Real brasileiro"
        currencyImg.src = "./assets/real.png"
    }

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
currencySelectToConvert.addEventListener("change", changeCurrency)