const messages = [
    "te amo muchisimo.❤️",
    "gracias por estar en mi vida.🧸",
    "eres mi persona favorita.♡",
    "juntos por siempre.💕",
    "tu y yo para siempre.✿",
    "tu sonrisa me ilumina.🎀༘",
    "eres lo mejor q me a pasado.🌷͙֒",
    "cada momento contigo es magico.💐",
    "siempre pienso en ti.<𝟑ּ",
    "mi corazon es tuyo.💗",
    "Eres mi razón de vivir.🌹",
    "Contigo todo tiene más sentido.👩‍❤️‍💋‍👨",
    "Tu amor me da vida.😘",
    "No existo sin tu amor.💖",
    "Eres mi sol cada día.🌕",
    "Siempre tú, en mis pensamientos.💋",
    "Amar es vivir en ti.🥰",
    "Tu sonrisa calma mi mundo.💘",
    "Te amo más cada día.💝",
    "Eres mi paz y tormenta.💞",
    "No hay nadie como tú.❣️",
    "Solo tú, siempre tú, amor.🔥",
    "Eres mi lugar seguro siempre.✨",
    "Mi corazón late por ti.👩‍❤️‍👩💞",
    "Tú y yo, para siempre.🌹🎶💖",
    "Tus abrazos son mi refugio.😍",
    "Me pierdo en tu mirada.🎉",
    "Eres mi sueño hecho realidad.😻",
    "Amor eterno, contigo a diario.🌟",
    "Juntos somos invencibles, mi amor.💋",
    "Feliz cumpleaños hermosa.😻",
    "Eres mi todo, mi amor. 💖",
    "Tú haces latir mi corazón. ❤️",
    "Me encantas más cada día. 😍",
    "Eres mi sueño hecho realidad. 🌟",
    "Nuestro amor no tiene fin. 💫",
    "Siempre tú, en mis pensamientos. 💭",
    "Tu sonrisa es mi debilidad. 😊",
    "Te elijo una y otra vez. 🔁",
    "Mi mundo gira por ti. 🌍",
    "Contigo todo es más bonito. 💐",
    "Tu voz es mi melodía. 🎶",
    "No quiero a nadie más. 💌",
    "Tus besos son mi medicina. 😘",
    "Amarte es mi mayor fortuna. 🍀",
    "Te pienso a cada instante. ⏳",
    "Eres mi lugar favorito siempre. 🏡",
    "Quiero estar contigo por siempre. 🔒",
    "Me haces creer en el amor. 💕",
    "Nuestro amor es un milagro. ✨",
    "Tú y yo, destino perfecto. 🔗",





    
    
];

function createTextBubbles() {
    const bubble = document.createElement("div");
    bubble.className = "text_bubbles";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles_text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();
        let newLeft = parseFloat(bubble.style.left);
        let newTop = parseFloat(bubble.style.top);

        if (rect.right > window.innerWidth) {
            newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newLeft}px`;
        }
        if (rect.bottom > window.innerHeight) {
            newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }
        if (rect.left < 0) {
            bubble.style.left = "10px";
        }
        if (rect.top < 0) {
            bubble.style.top = "10px";
        }
    }, 10);

    setTimeout(() => {
        bubble.remove();
    }, 3000);
}

document.getElementById("showMessageBtn").addEventListener("click", () => {
    createTextBubbles();
});
