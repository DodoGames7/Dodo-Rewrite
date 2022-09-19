const aoijs = require('aoi.js')


const bot = new aoijs.AoiClient({
   token: process.env.TOKEN,
 //Discord Bot Token, (ofc it's hidden what did you expect)
   prefix: ["$getServerVar[prefix]", "<@$clientID>"],  //Discord Bot Prefix
   intents: ["Guilds", "GuildMessages", "MessageContent"] // the discord.js intents
 })



// handlers
bot.variables(require("./utils/variables.js")); // for bot variables (important, do not delete)
require('./utils/callbacks')(bot) // for loading most callbacks used in bot 

 const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */

const  { Panel } = require("@akarui/aoi.panel")
// v6 panel dashboard
const panel = new Panel({
    username: process.env.username,//username for logging in
    password: process.env.password,//password for logging in
    secret: process.env.secret,//session secret
    port: 3000,//port on which website is hosted, Not required! Default 3000
    bot: bot,//your aoi.js client
    mainFile: "index.js",//Main file where code is running.Not required, default taken from package.json
    commands: "./commands",// folder name in which all the edit needing files are there.
    vesrion:"v6"
})
