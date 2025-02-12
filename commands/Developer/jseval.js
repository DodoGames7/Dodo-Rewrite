module.exports = {
    name: "jseval",
    info: {
        description: "Executes codes for testing (in djs only)",
        perms: ["`SendMessages`"],
        dev: "true"
    },
    aliases: ["djseval"],
    type: "messageCreate",
    code: `$onlyIf[$checkContains[$clientOwnerID[$getGlobalVar[AllowBotMembers]];$authorID]==true;]
    $onlyIf[$message!=;Please provide a code.]
    $!djsEval[$message]`
}
