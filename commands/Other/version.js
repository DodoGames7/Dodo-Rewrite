module.exports ={
  type: "basicCommand",
  name:"version",
  aliases:["updates","news","ver"],
  code: `$title[1;** ⚙️Version: 2.0.0-next (2022 aug 25th)**]
$description[1;
**MAJOR CHANGES**
drop support for aoi.js v5 and introduce support for aoi.js v6!
use discord api v10, to avoid losing access for perfix cmds, \`MessageContent\` intent has been granted to avoid issues
change some stuff
added new category config which is used to configure on how the bot should work

]
$color[1;Blurple]`
} // returns a list of changes in the bot code
