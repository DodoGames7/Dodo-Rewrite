module.exports = {
    name: "version",
    info: {
        description: "View the current version of Dodo-Bot (along with it's changelog)",
        perms: "`SendMessages`",
        flags: ["`--buildinfo`"]
    },
    aliases: ["ver", "changelog", "release"],
    type: "messageCreate",
    code: `
$userCooldown[versioncmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[versioncmd]];1000]]:R>]

$let[releasedatetype;$advancedReplace[$checkCondition[$getGlobalVar[pre_release]==on];true;Last updated on;false;Released on]]

$if[$checkContains[$message;--buildinfo;—buildinfo]==true;
$onlyIf[$getGlobalVar[showbuildinfo]==on;
Viewing build information is currently unavailable.
]

$title[Build info]
$addField[About the build;
* **Dodo-Bot**: v$getGlobalVar[version]
* **Codename**: $getGlobalVar[versionCodename]
* **Build Branch**: $getGlobalVar[buildBranch]
* **Build number**: $getGlobalVar[buildNumber]
* **Revision**: $getGlobalVar[buildRevision]
;true]
$addField[Progress;
$getGlobalVar[buildStatus]
;true]
$color[$getGlobalVar[embedcolor]]


;
$title[Dodo-Bot Version]
    $description[
* **Version**: $getGlobalVar[version]$if[$getGlobalVar[buildRevision]!=0; (Revision $getGlobalVar[buildRevision])]
* **Release type**: $getGlobalVar[release_type]
* **$get[releasedatetype]**: <t:$trunc[$divide[$getGlobalVar[buildDate];1000]]:f>
    ]
$if[$getGlobalVar[pre_release]==on;
$attachment[./assets/warning.png;warning.png]
$footer[Testing is recommended;attachment://warning.png]
]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addButton[versionchanges_$authorID;Changes;Secondary]
    $addButton[versionbugfixes_$authorID;Bug Fixes;Secondary]
    $addButton[versionother_$authorID;Other;Secondary]
    $addActionRow
    $addButton[https://github.com/ddodogames/Dodo-Bot/releases;Changelog history;Link;📜]
]
`
}
