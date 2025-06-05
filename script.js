
function normalize(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
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
    if (normalize(name) === normalize('verônica demetrio de oliveira') || normalize(name) === normalize('veronica demetrio de oliveira') || normalize(name) === normalize('Veronica Demetrio de Oliveira') || normalize(name) == normalize('Verônica Demetrio de Oliveira')) {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    } else {
        showMessage('Humm... esse não é o nome do amor da minha vida 🤔');
    }
}

function verifyBeauty() {
    const beauty = document.getElementById('beautyInput').value.trim().toLowerCase();
    if (normalize(beauty) === normalize('infinito') || normalize(beauty) === normalize('Ininito') || normalize(beauty) === normalize('INFINITO') ||
        normalize(beauty) === normalize('infinita') || normalize(beauty) === normalize('Infinita') || normalize(beauty) === normalize('INFINITA')) {
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

    if ((normalize(daughter) === normalize('isis') && normalize(son) === normalize('antony')) || (normalize(daughter) === normalize('Isis') && normalize(son) === normalize('Antony')) || (normalize(daughter) === normalize('isis') && normalize(son) === normalize('Antony')) || (normalize(daughter) === normalize('Isis') && normalize(son) === normalize('antony')) ||
    (normalize(daughter) === normalize('Ísis') && normalize(son) === normalize('Antony')) || (normalize(daughter) === normalize('ísis') && normalize(son) === normalize('Antony')) || (normalize(daughter) === normalize('ísis') && normalize(son) === ('antony')) || (normalize(daughter) === normalize('Isis') && normalize(son) === normalize('Antoni')) || (normalize(daughter) === normalize('isis') && normalize(son) === normalize('antoni')) ||
    (normalize(daughter) === normalize('ísis') && normalize(son) === normalize('antoni')) || (normalize(daughter) === normalize('ísis') && normalize(son) === normalize('Antoni')) || (normalize(daughter) === normalize('Ísis') && normalize(son) === normalize('antoni')) || (normalize(daughter) === normalize('Ísis') && normalize(son) === normalize('Antoni'))) {
    document.getElementById('authContainer').style.display = 'none';
    document.querySelector('.container').style.display = 'block';


        startMusic();
    
} else {
    showMessage('Errrr... Não! 🤭 Pensa bem nos nomes dos nossos filhos e tente novamente.');
}
}
/* Versão 1 da diferença de datas (pode gerar erros)
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
*/


/*v2 da diferença de datas*/
const startDate = new Date(2025, 0, 1, 0, 0, 0); // 01/01/2025 às 00:00

function updateTimer() {
    const now = new Date();

    // Diferença total em milissegundos
    let diff = now - startDate;

    // Calcula anos
    let years = now.getFullYear() - startDate.getFullYear();

    // Ajusta meses
    let months = now.getMonth() - startDate.getMonth();
    if (months < 0) {
        years--;
        months += 12;
    }

    // Ajusta dias
    let days = now.getDate() - startDate.getDate();
    if (days < 0) {
        months--;
        if (months < 0) {
            months += 12;
            years--;
        }
        // Dias do mês anterior
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }

    // Ajusta horas
    let hours = now.getHours() - startDate.getHours();
    if (hours < 0) {
        hours += 24;
        days--;
        if (days < 0) {
            months--;
            if (months < 0) {
                months += 12;
                years--;
            }
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
        }
    }

    // Ajusta minutos
    let minutes = now.getMinutes() - startDate.getMinutes();
    if (minutes < 0) {
        minutes += 60;
        hours--;
        if (hours < 0) {
            hours += 24;
            days--;
            if (days < 0) {
                months--;
                if (months < 0) {
                    months += 12;
                    years--;
                }
                const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += prevMonth.getDate();
            }
        }
    }

    // Ajusta segundos
    let seconds = now.getSeconds() - startDate.getSeconds();
    if (seconds < 0) {
        seconds += 60;
        minutes--;
        if (minutes < 0) {
            minutes += 60;
            hours--;
            if (hours < 0) {
                hours += 24;
                days--;
                if (days < 0) {
                    months--;
                    if (months < 0) {
                        months += 12;
                        years--;
                    }
                    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                    days += prevMonth.getDate();
                }
            }
        }
    }

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
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

function startMusic() {
    const bgMusic = document.getElementById('bg-music');
    bgMusic.play().then(() => {
        musicStarted = true;
    }).catch((error) => {
        console.log("Erro ao tentar tocar música:", error);
        showMessage("Clique na tela para ativar a música 🎵");
    });
}


