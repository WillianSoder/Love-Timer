
const startDate = new Date(2025, 0, 1, 0, 0, 0); // 01/01/2025 às 00:00

function updateTimer() {
    const now = new Date();
    let diff = now - startDate;

    const years = now.getFullYear() - startDate.getFullYear();
    const months = now.getMonth() - startDate.getMonth() + (years * 12);
    const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes(), startDate.getSeconds());
    
    let days = Math.floor((now - startOfThisMonth) / (1000 * 60 * 60 * 24));
    if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }

    let hours = now.getHours() - startDate.getHours();
    if (hours < 0) {
        hours += 24;
    }

    let minutes = now.getMinutes() - startDate.getMinutes();
    if (minutes < 0) {
        minutes += 60;
    }

    let seconds = now.getSeconds() - startDate.getSeconds();
    if (seconds < 0) {
        seconds += 60;
    }

    const timer = `${Math.floor(months / 12)} anos, ${months % 12} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;

    document.getElementById('years').textContent = Math.floor(months / 12);
    document.getElementById('months').textContent = months % 12;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

}

setInterval(updateTimer, 1000);

const photos = [
    'foto1.jpg',
    'foto2.jpg',
    'foto3.jpg', 
    'foto4.jpg',
    'foto5.jpg',
    'foto6.jpg',
    'foto7.jpg',
    'foto8.jpg',
    'foto9.jpg',
    'foto10.JPG'
];

let currentIndex = 0;

function updatePhoto() {
    const img = document.getElementById('currentPhoto');
    img.src = photos[currentIndex];
}

// Ir para a próxima imagem
function nextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    updatePhoto();
}

// Troca automática a cada 3 segundos
setInterval(nextPhoto, 7000);

document.getElementById('currentPhoto').addEventListener('click', nextPhoto);

/*window.addEventListener('click', function playMusicOnce() {
    const audio = document.getElementById('bg-music');
    audio.play();
    window.removeEventListener('click', playMusicOnce);
});*/
const bgMusic = document.getElementById('bg-music');
let musicStarted = false;
let lastTapTime = 0;

// Tocar a música no primeiro toque
window.addEventListener('click', function (event) {
    const now = new Date().getTime();
    const timeDiff = now - lastTapTime;

    if (!musicStarted) {
        bgMusic.play();
        musicStarted = true;
    } else {
        if (timeDiff < 1000) { 
            if (bgMusic.paused) {
                bgMusic.play();
            } else {
                bgMusic.pause();
            }
        }
    }

    lastTapTime = now;
});



