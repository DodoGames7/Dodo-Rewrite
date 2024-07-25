module.exports = {
    name: "about",
    info: {
        description: "Returns information about Dodo-Bot.",
        perms: "`SendMessages`"
    },
    aliases: ["info"],
    type: "messageCreate",
    code: `$userCooldown[aboutinfocmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[aboutinfocmd]];1000]]:R>]

$let[quotes;$callFunction[quotes]]
$title[About Dodo-Bot]
    $description[$get[quotes]

Dodo-Bot is a personal project aiming to be an entertainment bot while at the same time provide a couple of useful features! It is basically a bot made in ForgeScript (at least for rebase version)!

The project has existed since late 2021 and to this day, it continues to be developed with new improvements along with other type of updates as well!
]
    $color[$getGlobalVar[embedcolor]]
$thumbnail[https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/dodo-bot-logo.png]
$addActionRow
$addButton[dodobotrebase_$authorID;Rebase;Secondary;;false]
$addButton[https://github.com/DodoGames7/Dodo-Bot;Source code;Link]
    `
}
