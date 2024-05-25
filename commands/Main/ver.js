module.exports = {
  name: "version",
  info: {
    description: "Returns the current version of Dodo-Bot (alongside with it's Changelog).",
    perms: "`SendMessages`"
},
  aliases: ["ver", "changelog", "updates"],
  $if: "old",
  code: `$title[Dodo-Bot version]
  $description[
* **Version**: $getVar[version]
* **Release type**: $getVar[release_type]
* **Build created on**: <t:$truncate[$divide[$getVar[buildDate];1000]]:f>
  ]
  $color[$getVar[embedcolor]]
  $if[$getVar[pre_release_mode]==on]
  $footer[For testing purposes only.;https://us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/mingcute--warning-fill.png]
  $endif
  $addButton[2;Version history;5;https://github.com/DodoGames7/Dodo-Bot/releases;false;🔎]
  $addButton[1;Other;2;versionother_$authorID;false]
  $addButton[1;Bug Fixes;2;versionbugfixes_$authorID;false]
  $addButton[1;Changes;2;versionchanges_$authorID;false]
  $cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;version;$authorID];$dateStamp];1000]]:R>]
  `
}
