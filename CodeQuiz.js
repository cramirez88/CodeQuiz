var quiz=[{
    question:"How many continents are there?",
    choices: [7,5,6,4],
    answer: 7
}, {
    question:"What continent is Italy in?",
    choices: ["South America", "Africa", "Europe", "North America"],
    answer: "Europe"
}, {
    question:"Where is the Great Barrier Reef?",
    choices: ["Australia", "Europe", "Asia", "Africa"],
    answer: "Australia"
}, {
    question:"What continent is the Amazon Rainforest?",
    choices: ["South America", "North America", "Asia","Africa"],
    answer: "South America"
}, {
    question:"What continent is Canada in?",
    choices: ["North America","South America","Europe", "Asia"],
    answer: "North America"
}

]
var timer=quiz.length*15
var setIntervalId=null
var index=0
// hOW TO CREATE AN ON CLICK
document.getElementById("startBtn").addEventListener("click",function(){     
      document.getElementById("start").classList.add("hide")
      document.getElementById("begin").classList.remove("hide")
      setIntervalId=setInterval(countdown,1000)
})

function countdown(){
    document.getElementById("timer").textContent=timer--

    if(index<quiz.length){
        document.getElementById("questions").textContent=quiz[index].question
        document.getElementById("choices").textContent=""
        for(var i=0;i<quiz[index].choices.length;i++){
            var li=document.createElement("li")
            li.textContent=quiz[index].choices[i]
            document.getElementById("choices").appendChild(li)
        }
    }
}