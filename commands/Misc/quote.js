module.exports = {
    name: "quote",
    info: {
        description: "Quote a message sent by a user",
        perms: ["`SendMessages`"]
    },
    code: `

[Jump to the message]($messageURL[$message[2];$get[channeltarget]])
$author[$username[$get[messageauthor]];$userAvatar[$get[messageauthor]];$userURL[$get[messageauthor]]]
$description[$getMessage[$get[channeltarget];$message[2];content]]
$color[$getVar[embedcolor]]

$let[messageauthor;$getMessage[$get[channeltarget];$message[2];userID]]

$onlyIf[$messageExists[$message[2];$get[channeltarget]]==true;Please provide a valid message id.]
$onlyIf[$guildChannelExists[$guildID;$get[channeltarget]]==true;
Either you have not specified a channel, or the channel exists outside of this server. Please mention a valid channel.
]

$let[channeltarget;$findGuildChannel[$message[1];false]]
$onlyIf[$message[1]!=&&$message[2]!=;Please provide a channel and message id.

Usage: \`$getGuildVar[prefix]quote <channel id> <message id>\`
]`
}
