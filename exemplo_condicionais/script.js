function verificarVelocidade() {

    let velTexto = document.getElementById('velocidade').value;
    let vel = Number(velTexto)
    let display = document.getElementById('msg');

    if (vel <= 80) {
        
        display.innerHTML = "Vai que vai.";
        display.style.color = "green";

    } else {
        
        display.innerHTML = "MULTADO! Você excedeu o limite.";
        display.style.color = "red";
    }
}