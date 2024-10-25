/*
This is mainly used for testing for now
*/

module.exports = [{
    name: "autoListText",
    type: "awaited",
    code: `
   $if[{value}==none;None;* {value}]
`
},{
    name: "autoListChannels",
    type: "awaited",
    code: `
  $if[{value}==none;None;$get[channels]]

 $let[channels;$if[$guildChannelExists[$guildID;{value}]==true;* <#{value}>;\`Deleted Channel\`]]

`
},{
    name: "autoListCategories",
    type: "awaited",
    code: `
  $if[{value}==none;None;$get[categories]]

 $let[categories;$if[$guildChannelExists[$guildID;{value}]==true;* $channelName[{value}];\`Deleted Category\`]]

`
},{
    name: "autoListRoles",
    type: "awaited",
    code: `
 $if[{value}==none;None;$get[roles]]

 $let[roles;$if[$roleExists[{value};$guildID]==true;* <@&{value}>;\`Deleted Role\`]]

`
}]
