module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:Changes}{description:
* You can now exclude channels, roles and categories from xp in \`leveling\` command
  * The "Reset on Leave" button is now a select menu option as part of this change
* Added full attachment support for message edit logs in embed mode
* Added 2 slash commands called \`avatar\` and \`ping\` for user apps
* Updated descriptions of slash commands for user apps
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
* Made small code change to \`8ball\` to avoid potential issue
* Fixed a weird part of \`credits\` interaction code to avoid issues
* Fixed a leftover code still present in \`guess-the-pokemon\` command
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
* Made 2 small changes to \`hangman\` settings such as changing embed title to "Hangman Themes"
* (Source code) renamed the setup option \`EnableUserAppSupport\` to \`EnableUserApps\`
* (Pre-release only) "Build created on" now only appears in \`version\` command if build info button is visible in \`stats\`
* The "No longer used" section in \`credits\` "Packages used" page has been removed
* All "Current Setting(s)" sections have been migrated to embed field
* Updated Github links to use the new username and made minor adjustments
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
 $let[releasedatetype;$advancedReplaceText[$checkCondition[$getVar[showbuildinfo]==on];true;Build created on;false;Released on]]
 $let[devbuild;$if[$getVar[pre_release_mode]==on;{footer:Testing is recommended:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/warningsign.png};  ]]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
 {ephemeral}
{interaction}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==homebutton;]


      `
    }]
