module.exports = {
    name: "serverlist",
    info: {
        description: "Returns list of servers the bot is in",
        perms: ["`SendMessages`"],
        dev: "true"
    },
    aliases: "guildlist",
    code: `
$sendMessage[{file:allservers.md:$autoList[$nonEscape[$guildIDs[, ]];, ;autoListServers]}]
$wait[2s]
$sendMessage[Please wait.. Getting the list.. {deleteIn:2s}]
$onlyIf[$hasPermsInChannel[$channelID;$clientID;attachfiles]==true;I must have \`AttachFiles\` permission in order to proceed in this channel. Please, grant me the permission and try again.]
$onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]
    `
}
