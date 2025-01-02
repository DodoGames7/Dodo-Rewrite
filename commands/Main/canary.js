module.exports = {
    name: "canary",
    info: {
        description: "Returns information about Pre-release builds and how to try them.",
        perms: ["`SendMessages`"]
    },
    aliases: ["devbuilds", "canarybuilds"],
    type: "messageCreate",
    code: `$userCooldown[canarycmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[canarycmd]];1000]]:R>]
$title[About Canary]
$addField[Introduction;Canary is a way to test pre-release builds of upcoming versions of Dodo-Bot before they eventually release as a stable version.

Builds released in this state are incomplete and may have bugs as a result, so it is not recommended to use them for production purposes.
]
$addField[How to test?;For those who want to host them on their bots. You can download the files from the [canary-rebase](https://github.com/ddodogames/Dodo-Bot/tree/canary-rebase) branch on Github.

As of now, the official alpha bot for the rebase version is not available yet.
]
$color[$getGlobalVar[embedcolor]]
`
}
