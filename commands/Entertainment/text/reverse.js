module.exports = {
    name: "reverse",
    info: {
        description: "Reverse some text.",
        perms: ["`SendMessages`"]
    },
    code: `$getObjectProperty[api;text]
$createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to generate the output. Please, try again later.]
$let[jsonresponse;$httpRequest[https://api.popcat.xyz/reverse?text=$uri[$message;encode];GET;;;dead]]
$onlyIf[$message!=;Please enter a text.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;reverse;$authorID];$dateStamp];1000]]:R>]
$disableMentionType[all]`
    }
