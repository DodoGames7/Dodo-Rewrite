module.exports = [{
    name: "Userapps support",
    type: "ready",
    code: `$ifAwaited[$getVar[userapps]==true;{execute:createuserapps}]`
},{
    name: "createuserapps",
    type: "awaited",
    code: `
$createApplicationCommand[global;randomcolor;Returns random color you can use;sendmessages;user;all;slash]
$createApplicationCommand[global;invite;Returns a link to invite the bot;sendmessages;user;all;slash]
$createApplicationCommand[global;report;Returns a link to report issues on Dodo-Bot's GitHub repo;sendmessages;user;all;slash]
$createApplicationCommand[global;about;Returns information about Dodo-Bot;sendmessages;user;all;slash]
$createApplicationCommand[global;ping;Returns the bot's Latency;sendmessages;user;all;slash]


$createApplicationCommand[global;banner;Returns your/users profile banner.;sendmessages;user;all;slash;[
  {
    "type": 6,
    "name": "user",
    "description": "User to select to view banner",
    "required": false
  }
]]


$createApplicationCommand[global;avatar;Returns your/users profile picture.;sendmessages;user;all;slash;[
  {
    "type": 6,
    "name": "user",
    "description": "User to select to view avatar",
    "required": false
  }
]]


$createApplicationCommand[global;reverse;Let's you reverse text;sendmessages;user;all;slash;[
  {
    "type": 3,
    "name": "text",
    "description": "Text to reverse",
    "required": true
  }
]]

$createApplicationCommand[global;owoify;Makes text OWOifed;sendmessages;user;all;slash;[
  {
    "type": 3,
    "name": "text",
    "description": "Text to owoify",
    "required": true
  }
]]

$createApplicationCommand[global;8ball;Ask a question to 8ball;sendmessages;user;all;slash;[
  {
    "type": 3,
    "name": "question",
    "description": "The question to ask 8ball about",
    "required": true
  }
]]

$djsEval[const chalk = require('chalk')

console.log(chalk.green("Successfully created user apps! Restart your Discord to see them!"))
]

$setVar[isuserappsalreadysetup;yes]
$onlyIf[$getVar[isuserappsalreadysetup]==no;]`
}]
