let clickCount = 0;

function doSomethingStupid() {
    clickCount++;
    const msgs = [
        "WHY WOULD YOU DO THAT?",
        "STOP.",
        "THIS IS YOUR FAULT.",
        "CONGRATULATIONS. NOTHING HAPPENED.",
        "THIS BUTTON RESENTS YOU."
    ];
    document.getElementById("output").innerText =
        msgs[Math.min(clickCount - 1, msgs.length - 1)];

    const btn = document.querySelector(".annoying-button");
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 80 + "%";
    btn.style.top = Math.random() * 80 + "%";
}

/* TICKER */
const accusations = [
    "EXPERTS DEEPLY CONCERNED",
    "SOURCES SAY BAD VIBES",
    "WHY IS NOBODY TALKING ABOUT THIS",
    "UNCONFIRMED BUT LOUD",
    "FACT CHECKERS ARE TIRED"
];
let tickerText = "";
setInterval(() => {
    tickerText += " 🔥 " + accusations[Math.floor(Math.random() * accusations.length)];
    document.getElementById("ticker").innerText = tickerText.slice(-300);
}, 1200);

/* SPINNING FACE */
let x=100,y=100,dx=3,dy=2;
const face=document.getElementById("spinning-face");
setInterval(()=>{
    x+=dx;y+=dy;
    if(x<0||x>window.innerWidth-150)dx*=-1;
    if(y<0||y>window.innerHeight-150)dy*=-1;
    face.style.left=x+"px";
    face.style.top=y+"px";
},20);

/* FACE ARMY */
const faceArmy=document.getElementById("face-army");
let faceCount=0;
function spawnFace(){
    const f=document.createElement("div");
    f.className="face-clone";
    const img=document.createElement("img");
    img.src="https://via.placeholder.com/150";
    f.appendChild(img);
    f.style.left=Math.random()*window.innerWidth+"px";
    f.style.top=Math.random()*window.innerHeight+"px";
    faceArmy.appendChild(f);
    faceCount++;
    if(faceCount>15)document.body.classList.add("total-collapse");
}
setInterval(()=>{for(let i=0;i<3;i++)spawnFace();},2000);

/* POPUPS */
const popupMsgs=[
    "THIS CHANGES EVERYTHING",
    "VERY CONCERNING",
    "WE ASKED OURSELVES AND SAID YES",
    "THE SILENCE IS DEAFENING"
];
setInterval(()=>{
    const p=document.createElement("div");
    p.className="fake-popup";
    p.innerHTML="<b>BREAKING</b><br>"+popupMsgs[Math.floor(Math.random()*popupMsgs.length)];
    p.style.left=Math.random()*(window.innerWidth-300)+"px";
    p.style.top=Math.random()*(window.innerHeight-200)+"px";
    document.getElementById("popup-container").appendChild(p);
},700);


/* CURSOR CHASER */
document.addEventListener("mousemove",e=>{
    const c=document.getElementById("cursor-entity");
    c.style.left=e.clientX+10+"px";
    c.style.top=e.clientY+10+"px";
});


/* TEXT CORRUPTION */
setInterval(()=>{
    document.querySelectorAll(".paragraph").forEach(p=>{
        if(Math.random()>0.5){
            p.classList.add("corrupt");
            p.innerText=p.innerText.split("").sort(()=>Math.random()-0.5).join("");
        }
    });
},3000);

/* TAB PANIC */
const titles=["⚠️ SYSTEM FAILURE","🔥 BREAKING 🔥","DO NOT CLOSE","THIS IS BAD"];
let ti=0;
setInterval(()=>{document.title=titles[ti++%titles.length];},500);


