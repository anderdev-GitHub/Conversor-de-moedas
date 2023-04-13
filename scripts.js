const button = document.getElementById ("convert-button")
const select = document.getElementById ("currency-select")

const dolar = 5.2
const euro = 5.9
const btc = 149.81710

const convertValue = () => {
    const inputReais = document.getElementById ("input-real").value
    const realValueText = document.getElementById ("real-value-text")
    const currencyValueText = document.getElementById ("currency-value-text")
    realValueText.innerHTML = inputReais

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL",
    }).format(inputReais);
    
    if(select.value === "USD$ Dólar americano"){
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency", 
        currency: "USD" 
    }).format(inputReais / dolar);
    }

    if(select.value === "€ Euro"){
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency", 
        currency: "EUR" 
    }).format(inputReais / euro)
    }

    if(select.value === "₿ Bitcoin"){
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "BTC" 
        }).format(inputReais / btc)
        }
}

changeCurrency = () => {
    const currencyName = document.getElementById ("currency-name")
    const currencyImg = document.getElementById ("currency-img")

    if(select.value === "USD$ Dólar americano"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if(select.value === "€ Euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(select.value === "₿ Bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/btc.png"
    }
    convertValue()
}

const arrowImg = document.querySelector(".arrow-img")

document.getElementById("convert-button").addEventListener("click", () => {
  if (!arrowImg.classList.contains("move-down")) {
       arrowImg.classList.add("move-down")
    arrowImg.setAttribute("src", "./assets/arrow-blue.png")
  } else {
    arrowImg.classList.remove("move-down")
    arrowImg.setAttribute("src", "./assets/arrow-gray.png")
  }

  setTimeout(() => {
    arrowImg.classList.remove("move-down")
    arrowImg.setAttribute("src", "./assets/arrow-gray.png")
  }, 700)
})


button.addEventListener("click", convertValue)
select.addEventListener("change", changeCurrency)






