const SpeechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
let para= document.createElement("p");
const content= document.querySelector(".content");
content.appendChild(para);

recognition.addEventListener("result",function(event){
    console.log(event);
    const transcript= event.results[0][0].transcript
    para.innerText=transcript;


    if(event.results[0].isFinal){
        para = document.createElement("p");
        content.appendChild(para);
    }
})
recognition.addEventListener("end", recognition.start);
recognition.start()

