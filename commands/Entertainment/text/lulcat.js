module.exports = {
    name: "lulcat",
    info: {
        description: "Makes your text look cursed using lul cat language.",
        perms: ["`SendMessages`"],
        beta: "true"
    },
    aliases: "lolcat",
    code: `$getObjectProperty[api;text]
    
    $createObject[api;$nonEscape[$get[jsonresponse]]]
    $onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to generate the output. Please, try again later.]
    $let[jsonresponse;$jsonRequest[https://api.popcat.xyz/lulcat?text=$uri[$message;encode]]]
    $onlyIf[$message!=;Please enter a text.]
$onlyIf[$getGuildVar[betaserver]==on&&$getGlobalUserVar[betacommands]==on;
This command is currently unavailable. Possible reasons are being:

* You don't have Beta commands enabled. Run \`beta\` command to enable it first
* The server has Beta commands disabled
]
    $cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;lulcat;$authorID];$dateStamp];1000]]:R>]
    $disableMentionType[all]`
    }