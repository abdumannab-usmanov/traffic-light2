
let red = document.querySelector("#red")
let yellow = document.querySelector("#yellow")
let green = document.querySelector("#green")

function changelights(){
    setTimeout(() => {
        redLight()
    },0)
    setTimeout(() => {
        yellowLight()
    },7000)
    setTimeout(() => {
        greenLight()
    },4000)
}

function redLight(){
    red.classList.add("active")
    setTimeout(() => {
        red.classList.remove("active")
    },4000)
}
function yellowLight(){
    yellow.classList.add("active")
    setTimeout(() => {
        yellow.classList.remove("active")
    },2000)
}
function greenLight(){
    green.classList.add("active")
    setTimeout(() => {
        green.classList.remove("active")
    },3000)
}

setInterval(changelights,9000)