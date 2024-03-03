const TelegramBot = require("node-telegram-bot-api")

const token = "7125509688:AAE5HKSIs86Kag-tLsTeYAeAGq9UANQHL-4"
const options = {
    polling: true
}
const harnibot = new TelegramBot (token, options)

const BTC = /^BTC$/

harnibot.onText(BTC, async(callback) => {
    const harga_btc = "https://api.coindesk.com/v1/bpi/currentprice.json"

    const apiCall = await fetch (harga_btc)
    const {bpi : {
            USD : {
                code, rate, description, rate_float
            }
                
                  
            
        }
    } = await apiCall.json()

    const resultText = `
 code: ${code}
 rate: ${rate}
 decription: ${description}
 rate_float: ${rate_float}
`



    harnibot.sendMessage(callback.from.id, resultText)
})

