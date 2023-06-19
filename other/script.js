let form = document.querySelector("form");
let sr = window.webkitSpeechRecognition || window.SpeechRecognitionAlternative;
let speech = new sr();

speech.lang="hi";
speech.continuous = true;
speech.interimResults = true;

// console.log(speech);

form.addEventListener("submit", e => {
    e.preventDefault();
    speech.start();
})

speech.onresult = res => {
    let text = Array.from(res.results)
        .map(r => r[0])
        .map(txt => txt.transcript)
        .join("");
        form[0].value=text;
    // console.log(text);
 }

 form[2].addEventListener("click",()=>{
    speech.stop();
 })



