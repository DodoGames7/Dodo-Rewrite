module.exports = {
name: "jseval",
info: {
    description: "Executes codes for testing (in djs only)",
    perms: ["`SendMessages`"],
    flags: ["`--return`"],
    dev: "true"
},
aliases: ["djseval"],
type: "messageCreate",
code: `$onlyIf[$checkContains[$clientOwnerID[$getGlobalVar[AllowBotMembers]];$authorID]==true;]
$onlyIf[$message!=;Please eval a code.]
$if[$checkContains[$message;--return;—return]==true;
$!djsEval[$message]
;
$advancedReplace[$djsEval[$message];--return;;—return;]
]`
}
