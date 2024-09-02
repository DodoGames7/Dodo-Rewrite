module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:General}{field:**Main commands**:\`ping\`, \`commandinfo\`, \`perms\`, \`settings\`, \`beta\`}{field:**Bot related**:\`stats\`, \`ver\`, \`invite\`, \`credits\`, \`about\`, \`report\`, \`gitbuilds\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:helpmenu_$authorID:Select a Module:1:1:false:{stringInput:Main:general:Explore commands from Main module:false}{stringInput:Entertainment:entertainment:Explore commands from Entertainment module:false}{stringInput:Leveling:leveling:Explore commands from Leveling module:false}{stringInput:Util:util:Explore commands from Util module:false}}}]


  
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
$onlyIf[$getSelectMenuValues[all]==general;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==helpmenu;]`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Entertainment}{field:**Games**:\`ftf\`, \`rps\`, \`snake\`, \`matchpairs\`, \`2048\`, \`flood\`, \`minesweeper\`, \`trivia\`, \`c4\`, \`findemoji\`, \`coinflip\`, \`gtp\`, \`wordle\`, \`hangman\`}{field:**Text**:\`say\`, \`howgamer\`, \`fact\`, \`yesorno\`, \`whoasked\`, \`mock\`, \`lulcat\`, \`reverse\`, \`randomtopic\`, \`clap\`, \`8ball\`, \`joke\`}{field:**Images**:\`ad\`, \`comment\`, \`clown\`, \`gun\`, \`nokia\`, \`jail\`, \`wanted\`, \`whereiseveryone\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:helpmenu_$authorID:Select a Module:1:1:false:{stringInput:Main:general:Explore commands from Main module:false}{stringInput:Entertainment:entertainment:Explore commands from Entertainment module:false}{stringInput:Leveling:leveling:Explore commands from Leveling module:false}{stringInput:Util:util:Explore commands from Util module:false}}}]


  
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
$onlyIf[$getSelectMenuValues[all]==entertainment;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==helpmenu;]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Util}{field:**Management**:\`prefix\`, \`reset-prefix\`, \`suggest-set\`, \`set-msgdeletelog\`, \`set-msgeditlog\`, \`reset-msgeditlog\`, \`reset-msgdeletelog\` \`poll-set\`, \`welcomer\`, \`leave\`, \`set-integrationlogs\`, \`reset-integrationlogs\`, \`set-banlog\`, \`reset-banlog\`, \`set-unbanlog\`, \`reset-unbanlog\` }{field:**Info**:\`serverinfo\`, \`user\`}{field:**Miscellaneous**:\`avatar\`, \`suggest\`, \`randomcolor\`, \`poll\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:helpmenu_$authorID:Select a Module:1:1:false:{stringInput:Main:general:Explore commands from Main module:false}{stringInput:Entertainment:entertainment:Explore commands from Entertainment module:false}{stringInput:Leveling:leveling:Explore commands from Leveling module:false}{stringInput:Util:util:Explore commands from Util module:false}}}]

  
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
 {ephemeral}
{interaction}
  ]
$onlyIf[$getSelectMenuValues[all]==util;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==helpmenu;]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `


$interactionUpdate[{newEmbed:{title:Leveling}{field:**Commands**: \`leveling\`, \`rank\`, \`leaderboard\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:helpmenu_$authorID:Select a Module:1:1:false:{stringInput:Main:general:Explore commands from Main module:false}{stringInput:Entertainment:entertainment:Explore commands from Entertainment module:false}{stringInput:Leveling:leveling:Explore commands from Leveling module:false}{stringInput:Util:util:Explore commands from Util module:false}}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$onlyIf[$getSelectMenuValues[all]==leveling;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==helpmenu;]
`
}]
