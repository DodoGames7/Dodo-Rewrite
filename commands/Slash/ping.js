module.exports = {
name: "ping",
type: "interaction",
prototype: "slash",
info: {
 description: "Returns the bot's Latency.",
},
code: `
$InteractionEdit[Ping: $pingms
Message Ping: $interactionPing
Database Ping: $roundTenth[$databasePing;1]
Last Restart: <t:$truncate[$divide[$readyTimestamp;1000]]:f>
]
$wait[3s]
$interactionReply[Pong! 🏓;all;true]
`
}
