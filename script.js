function showMessage(message) {
    const box = document.getElementById('messageBox');
    const content = document.getElementById('messageContent');

    content.textContent = message;
    box.style.display = 'block';

    setTimeout(() => {
        box.style.display = 'none';
    }, 4000); // some depois de 4 segundos
}

// Verificações românticas 💖
let beautyAttempts = 0;

function verifyName() {
    const name = document.getElementById('nameInput').value.trim().toLowerCase();
    if (name === 'verônica demetrio de oliveira' || name === 'veronica demetrio de oliveira' || name == 'Veronica Demetrio de Oliveira' || name == 'Verônica Demetrio de Oliveira') {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    } else {
        showMessage('Humm... esse não é o nome do amor da minha vida 🤔');
    }
}

function verifyBeauty() {
    const beauty = document.getElementById('beautyInput').value.trim().toLowerCase();
    if (beauty === 'infinito' || beauty == 'Ininito' || beauty == 'INFINITO') {
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'block';
    } else {
        beautyAttempts++;
        if (beautyAttempts >= 3) {
            document.getElementById('beautyHint').textContent = '💡 Dica: lembre que não existe ninguém no universo mais linda que você. Ou seja, seu nível de beleza é...?';
        } else {
            showMessage('Hmmmm... acho que você está se subestimando, tente de novo 💖');
        }
    }
}

function verifyChildren() {
    const daughter = document.getElementById('daughterInput').value.trim().toLowerCase();
    const son = document.getElementById('sonInput').value.trim().toLowerCase();

    if ((daughter === 'isis' && son === 'antony') || (daughter === 'Isis' && son === 'Antony') || (daughter === 'isis' && son === 'Antony') || (daughter === 'Isis' && son === 'antony') ||
    (daughter === 'Ísis' && son === 'Antony') || (daughter === 'ísis' && son === 'Antony') || (daughter === 'ísis' && son === 'antony') || (daughter === 'Isis' && son === 'Antoni') || (daughter === 'isis' && son === 'antoni') ||
    (daughter === 'ísis' && son === 'antoni') || (daughter === 'ísis' && son === 'Antoni') || (daughter === 'Ísis' && son === 'antoni') || (daughter === 'Ísis' && son === 'Antoni')) {
        document.getElementById('authContainer').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
        // Começa a música automaticamente se quiser
        if (!musicStarted) {
            bgMusic.play();
            musicStarted = true;
        }
    } else {
        showMessage('Errrr... Não! 🤭 Pensa bem nos nomes dos nossos filhos e tente novamente.');
    }
}

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
/*
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

*/

