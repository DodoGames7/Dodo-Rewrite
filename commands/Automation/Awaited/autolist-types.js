/*
This is mainly used for testing for now
*/

module.exports = [{
    name: "autoListText",
    type: "awaited",
    code: `
   $if[{value}==none;none;* {value}]
`
},{
    name: "autoListChannels",
    type: "awaited",
    code: `$if[{value}==none;none;$get[channels]]

$let[channels;$if[$guildChannelExists[$guildID;{value}]==true;* <#{value}>;\`Deleted Channel\`]]`
},{
    name: "autoListCategories",
    $if: "old",
    type: "awaited",
    code: `
    $if[{value}==none]
    none
    $else
    $advancedReplaceText[$checkCondition[$guildChannelExists[$guildID;{value}]==true];$channelName[{value}];\`Deleted Category\`]
    $endif
`
},{
    name: "autoListRoles",
    type: "awaited",
    code: `$if[{value}==none;none;$get[roles]]

$let[roles;$if[$roleExists[{value};$guildID]==true;* <@&{value}>;\`Deleted Role\`]]`
}]
