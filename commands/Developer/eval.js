module.exports = {
name: "eval",
info: {
    description: "Executes codes for testing (in aoi.js only)",
    perms: ["`SendMessages`"],
    dev: "true"
},
aliases: ["e"],
type: "messageCreate",
code: `$onlyIf[$checkContains[$clientOwnerID[$getGlobalVar[AllowBotMembers]];$authorID]==true;]
$onlyIf[$message!=;Please provide a code.]
$eval[$message;true]`
}
