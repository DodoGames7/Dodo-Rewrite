module.exports = [{
    name: "rpsgameresults1",
    type:"interaction",
    prototype: "button",
    code:`
$interactionFollowUp[{newEmbed:{title:Results!}{description:You choose Rock 🌑! I choose $get[botchosenoption]!}{color:Yellow}}]

$interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}{actionRow:{button:Rock:2:rpsrockbutton:true:🌑}{button:Paper:2:rpspaperbutton:true:📰}{button:Scissors:2:rpsscissorsbutton:true:✂️}}]


$let[botchosenoption;$randomText[Rock 🌑;Paper 📰;Scissors ✂️]]
$let[embeddescription;$getEmbed[$channelID;$interactionData[message.id];1;description]]
$let[embedtitle;$getEmbed[$channelID;$interactionData[message.id];1;title]]

`
},{
     name: "rpsgameresults2",
    type:"interaction",
    prototype: "button",
    code:`

$interactionFollowup[{newEmbed:{title:Results!}{description:You choose Paper 📰! I choose $get[botchosenoption]!}{color:Yellow}}]

$interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}{actionRow:{button:Rock:2:rpsrockbutton:true:🌑}{button:Paper:2:rpspaperbutton:true:📰}{button:Scissors:2:rpsscissorsbutton:true:✂️}}]


$let[botchosenoption;$randomText[Rock 🌑;Paper 📰;Scissors ✂️]]
$let[embeddescription;$getEmbed[$channelID;$interactionData[message.id];1;description]]
$let[embedtitle;$getEmbed[$channelID;$interactionData[message.id];1;title]]
`
},{
    name: "rpsgameresults3",
    type:"interaction",
    prototype: "button",
    code:`

$interactionFollowup[{newEmbed:{title:Results!}{description:You choose Scissors ✂️! I choose $get[botchosenoption]!}{color:Yellow}}]

$interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}{actionRow:{button:Rock:2:rpsrockbutton:true:🌑}{button:Paper:2:rpspaperbutton:true:📰}{button:Scissors:2:rpsscissorsbutton:true:✂️}}]


$let[botchosenoption;$randomText[Rock 🌑;Paper 📰;Scissors ✂️]]
$let[embeddescription;$getEmbed[$channelID;$interactionData[message.id];1;description]]
$let[embedtitle;$getEmbed[$channelID;$interactionData[message.id];1;title]]


 `
}]
