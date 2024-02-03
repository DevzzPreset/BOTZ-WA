const version = require("@whiskeysockets/baileys/package.json").version

global.baileys = require('@whiskeysockets/baileys') 
global.language = "id"
global.nomerOwner = ["6283195660663"]
global.ownerjid = "6283195660663@s.whatsapp.net"
global.sig = Kaga Ada Gua Mah
global.email = "devzzxd@gmail.com"
global.runWith = "Panel"
global.botName = "© incu вσт" 
global.ownerName = "ADEP" 
global.sessionName ="session"
global.setmenu ="location" 
global.docType = "docx"
global.prefa = "!"
global.fake = botName
global.copyright = `Bot WhatsApp`
global.baileysVersion = `Baileys ${version}`
global.On = "On"
global.Off ="Off"
global.fake1 ="Devzz°᭄ᴮᵒᵗ`"
global.packName = "incu вσт"
global.authorName = "Created By adep"
global.replyType = "mess"
global.setwelcome = "type1"
global.Dana = 'tar gua bikin'
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000 //detik
global.sgc = 'https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS'
global.syt = 'https://www.youtube.com/@ehanzdhoanx552'
global.nobg = ['jVW2tQEAj2Qo7RD2mjcv99QU','Z9XYXF8LgFeszUF3a6u5PKbJ', 'yFPL4CQFi38fAWVhVQczyrBg']
global.token = "13cc2eee-5315-4d84-b3c8-d5b05ce297c3"
global.fileStackApi = "AVKHbeyXsT0G9IKI01qenz"  
// OPSI PAIRING BY DARWIN
global.usePairingCode = true // false untuk QR
// ISI NOMOR BOTNYA DISINI
global.pairingNumber = "6283896990603" // gunakan tanpa + dan spasi
//Set Bot
global.public = true
global.baileysMd = true
global.antiSpam = true
global.multi = true
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = false 
global.Console = false
global.autorespon = false
global.autoblockcmd = false
//Apikey kalo error daftar aje
global.api = {
alice: 'always ehz', //skizo.tech
angel: 'devzzkey_af003aedbf', // Apikey Zahwazein
Lol: 'GataDios',
Botcahx: 'Admin',
Apiflash: '9b9e84dfc18746d4a19d3afe109e9ea4',
}
global.gcounti = {
'prem' : 1000,
'user' : 20
} 
global.fotoRandom = [
    "https://telegra.ph/file/0ada53a88a1617b24e1c2.jpg",
    "https://telegra.ph/file/d0c414f12d006486256e8.jpg",
    "https://telegra.ph/file/8dd923a69f562d5264b3b.jpg",
    "https://telegra.ph/file/f6840e7b9c789bd6f7b75.jpg",
    "https://telegra.ph/file/a2b84d6ab76d01cefa658.jpg",
   
    ]

const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






