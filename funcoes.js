var date= new Date();
const SECONDS_PER_MINUTE = 60
const MILI_SECONDS_PER_SECOND = 1000
const MINUTES_PER_HOUR = 60
const HOURS_PER_DAY = 24

var day = SECONDS_PER_MINUTE * MILI_SECONDS_PER_SECOND * MINUTES_PER_HOUR * HOURS_PER_DAY;
var anotherDay = new Date((date.getTime() - day));
const d = document.querySelector("#data");
d.value = anotherDay.getFullYear() + "-" + String(anotherDay.getMonth() + 1).padStart(2,'0') + "-" + String(anotherDay.getDate()).padStart(2,'0') ;

function chamaContador(){    
    window.location.href = "contador.html"
    
    let data = document.querySelector("#data").valueAsDate;

    const now = new Date(); // Data de hoje
    const past = data; // Outra data no passado
    const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

    localStorage.dias = days;
    
}



            
