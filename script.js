// Screen Navigation with Slide Transitions
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    setTimeout(() => {
        document.getElementById(screenId).classList.add('active');
    }, 50);
}

function goToScreen2() {
    showScreen('screen2');
}

function selectMovie(movie) {
    console.log('Selected movie:', movie);
    showScreen('screen3');
}

function goToScreen6() {
    showScreen('screen6');
}

// No Button Chase Logic
const noBtn = document.getElementById('noBtn');
let isChasing = false;

noBtn.addEventListener('mouseover', function() {
    if (isChasing) return;
    isChasing = true;
    
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.6s ease-out';
    
    setTimeout(() => {
        isChasing = false;
    }, 600);
});

// OK Button Chase Logic (can't click it)
const okBtn = document.getElementById('okBtn');
let isOkChasing = false;

okBtn.addEventListener('mouseover', function() {
    if (isOkChasing) return;
    isOkChasing = true;
    
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    okBtn.style.position = 'fixed';
    okBtn.style.left = randomX + 'px';
    okBtn.style.top = randomY + 'px';
    okBtn.style.transition = 'all 0.6s ease-out';
    
    setTimeout(() => {
        isOkChasing = false;
    }, 600);
});

// Chase Button Logic (the one that actually works)
const chaseBtn = document.getElementById('chaseBtn');
let isChasingOk = false;

chaseBtn.addEventListener('mouseover', function() {
    if (isChasingOk) return;
    isChasingOk = true;
    
    setTimeout(() => {
        isChasingOk = false;
    }, 500);
});

// When the chase button is finally clicked
chaseBtn.addEventListener('click', function() {
    showScreen('screen4');
    createConfetti();
});

// Confetti Animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        
        const colors = ['#ff1744', '#ff6e40', '#ffca28', '#76ff03', '#00e5ff', '#e040fb'];
        confettiPiece.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.top = '-10px';
        confettiPiece.style.animation = `confetti-fall ${2 + Math.random() * 1.5}s ease-out forwards`;
        confettiPiece.style.animationDelay = Math.random() * 0.3 + 's';
        
        confettiContainer.appendChild(confettiPiece);
    }
}

// Gift Opening Logic
function openGift() {
    const rosesDiv = document.getElementById('roses');
    rosesDiv.innerHTML = '🌹 🌹 🌹 🌹 🌹';
    rosesDiv.style.fontSize = '100px';
    rosesDiv.style.animation = 'roses-appear 1s ease-out';
    
    // Hide the gift box and label
    const presentBox = document.querySelector('.present-box');
    presentBox.style.display = 'none';
    
    const giftLabel = document.querySelector('.gift-label');
    giftLabel.style.display = 'none';
    
    // Move to screen 5 with transition
    setTimeout(() => {
        showScreen('screen5');
    }, 300);
}

// Fill Screen with Hearts
function fillWithHearts() {
    const heartContainer = document.getElementById('heart-fill');
    heartContainer.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.innerHTML = '💖';
        
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 0.5 + 's';
        
        heartContainer.appendChild(heart);
    }
    
    // Clear after animation
    setTimeout(() => {
        heartContainer.innerHTML = '';
    }, 2500);
}

// Add fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);