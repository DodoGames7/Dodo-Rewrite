module.exports = {
name: "update",
info: {
    description: "Restarts commands to latest code-edits",
    perms: ["`SendMessages`"],
    dev: "true"
},
aliases: ["restartcmds", "reloadcmds"],
type: "messageCreate",
code: `$onlyIf[$checkContains[$clientOwnerID[$getGlobalVar[AllowBotMembers]];$authorID]==true;]
$updateCommands

$let[total;$sum[$commandCount[messageCreate];$commandCount[interactionCreate]]]
$title[Reloaded!]
$addField[**Commands**;
* **Prefix**: $commandCount[messageCreate]
* **Interactions**: $commandCount[interactionCreate]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[veryuselesscustomid;Total: $get[total];Secondary;;true]
`
}
