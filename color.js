function generateColor() {

    const letters = "0123456789ABCDEF";
    let color = "#";
    
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    const box = document.getElementById("colorBox");
    box.style.backgroundColor = color;

    const code = document.getElementById("colorCode");
    code.textContent = color;
} 