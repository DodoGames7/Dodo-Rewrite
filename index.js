const { AoiClient, Util } = require("aoi.js");
const { PluginManager } = require("aoi.js-library");
const config = require("./handler/config.json");

const bot = new AoiClient({
  token: process.env.TOKEN || config.BotToken, // Token with either env or config
  prefix: "$getGuildVar[prefix]", // By default, it uses custom prefix system. (default used prefix: n!)
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildPresences", "GuildModeration"], // discord.js intents (v14)
  events: ["onMessage", "onInteractionCreate", "onJoin", "onMessageDelete", "onMessageUpdate", "onLeave", "onBanAdd", "onBanRemove", "onGuildJoin"], // mostly for making the bot interactions work
  aoiLogs: false, // don't show aoi.js default console message
  aoiWarning: false, // disable aoi.js update warning
  database: { // use aoi.db as the database for storing data
     type: "aoi.db",
     db: require("@akarui/aoi.db"),
     tables: ["main"],
     path: "./database/",
     extraOptions: {
         dbType: "KeyValue"
     },
 },
 disableFunctions: ["$clientToken"],
 suppressAllErrors: config.disableErrors
});

// loading handlers
bot.loadCommands("./commands/", false);
bot.variables(require("./handler/variables.js"));

// parser support
const { parse, createAst } = require('@akarui/aoi.parser');
const {
    parseExtraOptions
} = require('@akarui/aoi.parser/components');
 
Util.parsers.ErrorHandler = parse;
 
Util.parsers.OptionsParser = (data) => {
    return createAst(data).children.map(parseExtraOptions);
}

// Plugins (testing, for now)
new PluginManager(bot).loadPlugins(
    "fafa/fetchinvite",
    "jollyjolli/encodebase64",
    "jollyjolli/decodebase64"
)
 
