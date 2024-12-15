module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:Changes}{description:
* Build info is now a flag as part of \`version\` command
  * To access the info, run \`$getGuildVar[prefix]version --buildinfo\` to do so!
* Added support for RGB code in \`randomcolor\` command (exclusive to prefix only)
    }{color:$getVar[embedcolor]}$nonEscape[$get[devbuild]]}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:true}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Changelog history:5:https#COLON#//github.com/ddodogames/Dodo-Bot/releases:false:📜}}]

$let[devbuild;$if[$getVar[pre_release_mode]==on;{footer:Testing is recommended:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/warningsign.png};  ]]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionchanges;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:Bug Fixes}{description:
* Fixed description of \`hangman\` cmd's \`--themes\` flag changing after applying a theme
    }{color:$getVar[embedcolor]}$nonEscape[$get[devbuild]]}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:true}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Changelog history:5:https#COLON#//github.com/ddodogames/Dodo-Bot/releases:false:📜}}]

$let[devbuild;$if[$getVar[pre_release_mode]==on;{footer:Testing is recommended:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/warningsign.png};  ]]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
   {ephemeral}
{interaction}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionbugfixes;]
`
},{
      type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Other}{description:
* Support for leaving any server the bot is in has been added
* (Pre-release only) "Build created on" section has been renamed to "Last updated on"
* Added a button to uncompact/compact permissions list from integration logs of a bot
* Added small design changes to \`randomcolor\` command (and the removal of color name)
 }{color:$getVar[embedcolor]}$nonEscape[$get[devbuild]]}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:true}}{actionRow:{button:Changelog history:5:https#COLON#//github.com/ddodogames/Dodo-Bot/releases:false:📜}}]

$let[devbuild;$if[$getVar[pre_release_mode]==on;{footer:Testing is recommended:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/warningsign.png};  ]]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
 {ephemeral}
{interaction}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionother;]


      `
},{
      type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Dodo-Bot version}{description:
* **Version**#COLON# $getVar[version]$get[Revision]
* **Release type**#COLON# $getVar[release_type]
* **$get[releasedatetype]**#COLON# <t:$truncate[$divide[$getVar[buildDate];1000]]:f>
 }{color:$getVar[embedcolor]}$nonEscape[$get[devbuild]]}{actionRow:{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Changelog history:5:https#COLON#//github.com/ddodogames/Dodo-Bot/releases:false:📜}}]

 $let[Revision;$advancedReplaceText[$checkCondition[$getVar[buildRevision]!=0];true; (Revision $getVar[buildRevision]);false; ]]
 $let[releasedatetype;$advancedReplaceText[$checkCondition[$getVar[showbuildinfo]==on];true;Last updated on;false;Released on]]
 $let[devbuild;$if[$getVar[pre_release_mode]==on;{footer:Testing is recommended:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/warningsign.png};  ]]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
 {ephemeral}
{interaction}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==homebutton;]


      `
    }]
