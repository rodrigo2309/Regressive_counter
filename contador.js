let dia = String(localStorage.dias).padStart(2,'0');
let hour = 24;
let min = 60;
let seg = 60;

const d = document.querySelector(".dia");
const h = document.querySelector(".hour");
const m = document.querySelector(".min");
const s = document.querySelector(".seg");

d.innerText = dia;
h.innerText = 24
m.innerText = 60
s.innerText = 60

function reiniciar() {
    window.location.href = "index.html"
}

function mostrarNaTela(){
    seg = String(seg - 1).padStart(2,'0');

    if (seg == 0){
        seg = 60;
        min = String(min - 1).padStart(2,'0');
        m.innerText = min;
    }

    if (min == 0){
        min = 60;
        hour = String(hour - 1).padStart(2,'0');
        h.innerText = hour;
    }

    if (hour == 0){
        hour = 24;
        dia = String(dia - 1).padStart(2,'0');
        d.innerText = dia;
    }

    if (dia == 0 && hour == 00 && min == 00 && seg == 00){
        alert("Acabou");
    }
    
    s.innerText = seg;
}

mostrarNaTela();
const t = setInterval(mostrarNaTela,1000);    