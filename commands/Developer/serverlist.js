module.exports = {
    name: "serverlist",
    info: {
        description: "Returns list of servers the bot is in",
        perms: ["`SendMessages`"],
        dev: "true"
    },
    aliases: ["guildlist"],
    type: "messageCreate",
    code: `$onlyIf[$checkContains[$clientOwnerID[$getGlobalVar[AllowBotMembers]];$authorID]==true;]
    $onlyIf[$message!=;Please eval a code.]
    $attachment[$callFunction[autoListServers;$serverIDs[, ];, ];allservers.md;true]`
}
