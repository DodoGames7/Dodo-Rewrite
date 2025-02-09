module.exports = {
name: "rebase",
type: "messageCreate",
info: {
        description: "Returns information about the Rebase version",
        perms: ["`SendMessages`"]
},
code: ` $userCooldown[rebasecmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[rebasecmd]];1000]]:R>]

$title[About Rebase]
$description[Rebase is a special version of Dodo-Bot acting as a backup. It was originally made as Dodo-Bot v3 before it was later repurposed to be used as backup.

As the name implies, it mostly acts as a emergency build in case if aoi.js suddenly died one day. It's also used for learning new stuff.]
$color[$getGlobalVar[embedcolor]]
$attachment[./assets/dodo-bot-logo.png;dodobot-logo.png]
$thumbnail[attachment://dodobot-logo.png]

`
}
