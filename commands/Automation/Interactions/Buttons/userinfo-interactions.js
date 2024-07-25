module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `$onlyIf[$advancedTextSplit[$customID;_;0]==memberservinfo;]
$let[user;$advancedTextSplit[$customID;_;1]]
$let[servericon;$replace[$replace[$checkCondition[$guildIcon==];true;$userAvatar[$botID]];false;$serverIcon]]
$let[username;$replace[$replace[$checkCondition[$callFunction[hasusertag;$get[user]]==true];true;$userTag[$get[user]]];false;$username[$get[user]]]]
$let[nickname;$replace[$replace[$checkCondition[$callFunction[hasnickname;$guildID;$get[user]]==false];true;none];false;$nickname[$guildID;$get[user]]]]
$arrayLoad[amountofroles;/;$memberRoles[$guildID;$get[user];/]]

$onlyIf[$memberExists[$guildID;$get[user]]==true;
$interactionReply[
This user appears to have left the server. As a result, their server information will no longer be displayed until they join this server again.
$ephemeral
]]

$interactionUpdate[
$author[Server information;$get[servericon]]
$title[$get[username]'s information]
$addField[**General**;
**Joined the server on:** <t:$trunc[$divide[$memberJoinedAt[$guildID;$get[user]];1000]]:f>
**Amount of roles:** $arrayLength[amountofroles]
**Nickname:** $get[nickname]
;true]
$addField[**Other**;
**Platforms:** $if[$memberPlatforms[$guildID;$get[user]]==;Unavailable;$toTitleCase[$memberPlatforms[$guildID;$get[user]]]]
**Status:** $if[$status[$guildID;$get[user]]==;None;$status[$guildID;$get[user]]]
;true]
$thumbnail[$userAvatar[$get[user]]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[generalmeminfo_$get[user];General info;Secondary]
$addButton[memberservinfo_$get[user];Member's Server info;Secondary;;true]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `$onlyIf[$advancedTextSplit[$customID;_;0]==generalmeminfo;]
$let[user;$advancedTextSplit[$customID;_;1]]
$let[username;$replace[$replace[$checkCondition[$callFunction[hasusertag;$get[user]]==true];true;$userTag[$get[user]]];false;$username[$get[user]]]]
$let[accounttype;$replace[$replace[$checkCondition[$isBot[$get[user]]==true];true;Bot];false;Human]]
$let[dmsstatus;$replace[$replace[$checkCondition[$isUserDMEnabled[$get[user]]==true];true;Enabled];false;Disabled]]

$interactionUpdate[
$title[$get[username]'s information]
$addField[**General**;
**Joined Discord on:** <t:$trunc[$divide[$userCreatedAt[$get[user]];1000]]:f>
**Account type:** $get[accounttype]
**ID:** $get[user]
;true]
$addField[**Other**;
**Avatar:** $hyperlink[link;$userAvatar[$get[user]]]
**DMS:** $get[dmsstatus]
;true]
$thumbnail[$userAvatar[$get[user]]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[generalmeminfo_$get[user];General info;Secondary;;true]
$addButton[memberservinfo_$get[user];Member's Server info;Secondary]
]
`
}]