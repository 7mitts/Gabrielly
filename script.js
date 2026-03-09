const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const finalMessage = document.getElementById("finalMessage");
const carouselImg = document.getElementById("carouselImg");

/* botão não fugindo */

noBtn.addEventListener("mouseover", () => {

const x = Math.random() * (window.innerWidth - 100);
const y = Math.random() * (window.innerHeight - 50);

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

});

/* botão sim */

yesBtn.addEventListener("click", () => {

document.querySelector(".buttons").style.display = "none";
finalMessage.classList.remove("hidden");

});

/* CARROSSEL */

const fotos = [
"fotos/Bibi.jpg",
"fotos/Bibi2.jpg",
"fotos/Bibi3.jpg",
"fotos/Bibi4.jpg",
"fotos/Bibi5.jpg",
"fotos/Bibi6.jpg"
];

let index = 0;

setInterval(() => {

index++;
if(index >= fotos.length){
index = 0;
}

carouselImg.src = fotos[index];

}, 3000);

/* CORAÇÕES */

function criarCoracao(){

const heart = document.createElement("div");

heart.classList.add("heart");
heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";

heart.style.animationDuration = (Math.random() * 5 + 4) + "s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

}

setInterval(criarCoracao, 100);